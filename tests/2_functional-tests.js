const chaiHttp = require('chai-http')
const chai = require('chai')
let assert = chai.assert
const server = require('../server')

chai.use(chaiHttp)

suite('Functional Tests', () => {
    // #1
    test('Convert a valid input', done => {
        chai
            .request(server)
            .get('/api/convert?input=10L')
            .end((err, res) => {
                assert.strictEqual(res.status, 200)
                assert.strictEqual(res.body.string, '10 liters converts to 2.64172 gallons')
                done()
            })
    })

    // #2
    test('Convert an invalid input', done => {
        chai
            .request(server)
            .get('/api/convert?input=32g')
            .end((err, res) => {
                assert.strictEqual(res.status, 200)
                assert.strictEqual(res.text, 'invalid unit')
                done()
            })
    })

    // #3
    test('Convert an invalid number', done => {
        chai
            .request(server)
            .get('/api/convert?input=3/7.2/4kg')
            .end((err, res) => {
                assert.strictEqual(res.status, 200)
                assert.strictEqual(res.text, 'invalid number')
                done()
            })
    })

    // #4
    test('Convert an invalid number AND unit', done => {
        chai
            .request(server)
            .get('/api/convert?input=3/7.2/4kilomegagram')
            .end((err, res) => {
                assert.strictEqual(res.status, 200)
                assert.strictEqual(res.text, 'invalid number and unit')
                done()
            })
    })

    // #5
    test('Convert with no number', done => {
        chai
            .request(server)
            .get('/api/convert?input=kg')
            .end((err, res) => {
                assert.strictEqual(res.status, 200)
                assert.strictEqual(res.body.returnUnit, 'lbs')
                assert.strictEqual(res.body.returnNum, 2.20462)
                done()
            })
    })
})
