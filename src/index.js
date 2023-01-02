module.exports = function toReadable(number) {
  const numberToString = number.toString()
  const numberLength = numberToString.length
  let result = ''

  if (numberLength === 1) {
    result += fromOneToNine(number)
  }
  if (numberLength === 2) {
    result += fromTenToNinety(number)
    if (result.length === 0) {
      const secondDigit = numberToString - numberToString[1]

      result += fromTenToNinety(secondDigit)
      result += ' ' + fromOneToNine(+ numberToString[1])
    }
  }
  if (numberLength === 3) {
    result += fromOneToNine(+numberToString[0]) + ' hundred'
    if (+numberToString.slice(1) < 10) {
      result += fromOneToNine(+numberToString.slice(1)) === 'zero' ? '' : ' ' + fromOneToNine(+numberToString.slice(1))
    } else {
      const secondPart = fromTenToNinety(+numberToString.slice(1))

      if (secondPart.length === 0) {
        const secondDigit = numberToString.slice(1) - numberToString[2]

        result += ' ' + fromTenToNinety(secondDigit)
        result += ' ' + fromOneToNine(+ numberToString[2])
      } else {
        result += ' ' + secondPart
      }
    }
  }

  function fromOneToNine(num) {
    switch (num) {
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
    }
    return 'zero'
  }

  function fromTenToNinety(num) {
    switch (num) {
      case 10: return 'ten'
      case 11: return 'eleven'
      case 12: return 'twelve'
      case 13: return 'thirteen'
      case 14: return 'fourteen'
      case 15: return 'fifteen'
      case 16: return 'sixteen'
      case 17: return 'seventeen'
      case 18: return 'eighteen'
      case 19: return 'nineteen'
      case 20: return 'twenty'
      case 30: return 'thirty'
      case 40: return 'forty'
      case 50: return 'fifty'
      case 60: return 'sixty'
      case 70: return 'seventy'
      case 80: return 'eighty'
      case 90: return 'ninety'
    }
    return ''
  }

  return result
}

console.log(module.exports(101))