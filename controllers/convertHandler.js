function ConvertHandler() {

  this.getNum = input => {
    const result = input.match(/^[0-9./]+/g)

    if (result) {
      const i = input.indexOf('/')

      if (i > 0 && input.indexOf('/', i + 1) > 0)
        return 'invalid number'
    }

    return result ? eval(result[0]) : 1
  }

  this.getUnit = input => {
    let result = input.match(/[a-zA-Z]+$/g)

    if (result) {
      result = result[0]

      result = result.toLowerCase()

      if (result === 'l')
        result = result.toUpperCase()

      return ['gal', 'L', 'mi', 'km', 'lbs', 'kg'].includes(result) ? result : 'invalid unit'
    }

    return 'invalid unit'
  }

  this.getReturnUnit = initUnit => {
    switch (initUnit) {
      case 'gal':
        return 'L'
      case 'L':
        return 'gal'
      case 'mi':
        return 'km'
      case 'km':
        return 'mi'
      case 'lbs':
        return 'kg'
      case 'kg':
        return 'lbs'
      default:
        return 'invalid unit'
    }
  }

  this.spellOutUnit = unit => {
    switch (unit) {
      case 'gal':
        return 'gallon'
      case 'L':
        return 'liter'
      case 'mi':
        return 'mile'
      case 'km':
        return 'kilometer'
      case 'lbs':
        return 'pound'
      case 'kg':
        return 'kilogram'
      default:
        return 'invalid unit'
    }
  }

  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934

    let result

    switch (initUnit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'L':
        result = initNum / galToL
        break
      case 'mi':
        result = initNum * miToKm
        break
      case 'km':
        result = initNum / miToKm
        break
      case 'lbs':
        result = initNum * lbsToKg
        break
      case 'kg':
        result = initNum / lbsToKg
    }

    return result.toFixed(5)
  }

  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    return `${initNum} ${this.spellOutUnit(initUnit)}s converts to ${returnNum} ${this.spellOutUnit(returnUnit)}s`
  }

}

module.exports = ConvertHandler
