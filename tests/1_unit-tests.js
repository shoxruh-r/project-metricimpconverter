const chai = require('chai')
const assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')

const convertHandler = new ConvertHandler()

suite('Unit Tests', () => {
    // #1
    test('read a whole', () => {
        assert.strictEqual(
            convertHandler.getNum('4gal'),
            4,
            'convertHandler should correctly read a whole number input.'
        )
    })

    // #2
    test('read a decimal', () => {
        assert.strictEqual(
            convertHandler.getNum('3.1mi'),
            3.1,
            'convertHandler should correctly read a decimal number input.'
        )
    })

    // #3
    test('read a fractional', () => {
        assert.strictEqual(
            convertHandler.getNum('1/2km'),
            .5,
            'convertHandler should correctly read a fractional input.'
        )
    })

    // #4
    test('read a fractional with a decimal', () => {
        assert.strictEqual(
            convertHandler.getNum('5.4/3lbs'),
            1.8,
            'convertHandler should correctly read a fractional input with a decimal.'
        )
    })

    // #5
    test('error on a double-fraction', () => {
        assert.strictEqual(
            convertHandler.getNum('3/2/3km'),
            'invalid number',
            'convertHandler should correctly return an error on a double-fraction.'
        )
    })

    // #6
    test('default 1', () => {
        assert.strictEqual(
            convertHandler.getNum('kg'),
            1,
            'convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.'
        )
    })

    // #7
    test('read valid unit', () => {
        assert.strictEqual(
            convertHandler.getUnit('4gal'),
            'gal',
            'convertHandler should correctly read each valid input unit.'
        )
    })

    // #8
    test('error for invalid unit', () => {
        assert.strictEqual(
            convertHandler.getUnit('3/7.2/4kilomegagram'),
            'invalid unit',
            'convertHandler should correctly return an error for an invalid input unit.'
        )
    })

    // #9
    test('return unit for valid unit', () => {
        assert.isString(
            convertHandler.getReturnUnit('gal'),
            'convertHandler should return the correct return unit for each valid input unit.'
        )
    })

    // #10
    test('spelled-out string unit for valid unit', () => {
        assert.strictEqual(
            convertHandler.spellOutUnit('gal'),
            'gallon',
            'convertHandler should correctly return the spelled-out string unit for each valid input unit.'
        )
    })

    // #11
    test('gal to L', () => {
        assert.strictEqual(
            convertHandler.getReturnUnit('gal'),
            'L',
            'convertHandler should correctly convert gal to L.'
        )
    })

    // #12
    test('L to gal', () => {
        assert.strictEqual(
            convertHandler.getReturnUnit('L'),
            'gal',
            'convertHandler should correctly convert L to gal.'
        )
    })

    // #13
    test('mi to km', () => {
        assert.strictEqual(
            convertHandler.getReturnUnit('mi'),
            'km',
            'convertHandler should correctly convert mi to km.'
        )
    })

    // #14
    test('km to mi', () => {
        assert.strictEqual(
            convertHandler.getReturnUnit('km'),
            'mi',
            'convertHandler should correctly convert km to mi.'
        )
    })

    // #15
    test('lbs to kg', () => {
        assert.strictEqual(
            convertHandler.getReturnUnit('lbs'),
            'kg',
            'convertHandler should correctly convert lbs to kg.'
        )
    })

    // #11
    test('kg to lbs', () => {
        assert.strictEqual(
            convertHandler.getReturnUnit('kg'),
            'lbs',
            'convertHandler should correctly convert kg to lbs.'
        )
    })
})