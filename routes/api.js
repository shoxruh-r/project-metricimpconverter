'use strict'

const expect = require('chai').expect
const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {

  const convertHandler = new ConvertHandler()

  app.get('/api/convert', (req, res) => {
    const { input } = req.query
    const initNum = convertHandler.getNum(input)
    const initUnit = convertHandler.getUnit(input)
    const returnUnit = convertHandler.getReturnUnit(initUnit)

    if (initNum === 'invalid number') {
      if (initUnit === 'invalid unit')
        return res.send('invalid number and unit')
      return res.send(initNum)
    }

    if (initUnit === 'invalid unit')
      return res.send(initUnit)

    const returnNum = convertHandler.convert(initNum, initUnit)
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
    res.json({ initNum, initUnit, returnNum, returnUnit, string })

  })
}
