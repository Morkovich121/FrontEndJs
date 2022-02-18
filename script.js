const scores = {
    "A": 100,
    "B": 14,
    "C": 9,
    "D": 28,
    "E": 145,
    "F": 12,
    "G": 3,
    "H": 10,
    "I": 200,
    "J": 100,
    "K": 114,
    "L": 100,
    "M": 25,
    "N": 450,
    "O": 80,
    "P": 2,
    "Q": 12,
    "R": 400,
    "S": 113,
    "T": 405,
    "U": 11,
    "V": 10,
    "W": 10,
    "X": 3,
    "Y": 210,
    "Z": 23
}

//Дальше идут функции для всех 14 заданий
let getMinMaxDiff = (array) => {
    return array.length <= 1 ? 0 : Math.max.apply(null, array) - Math.min.apply(null, array)
}

let getLongWords = (string, number) => {
    return string.split(' ').filter((el) => el.length > number)
}

let getMissingElement = (array) => {
    return array.reduce((acc, curr) => acc + curr, 0) === 45 ? 0 : 45 - array.reduce((acc, curr) => acc + curr, 0)
}

let solution = (string, subString) => {
    return string.substr(string.length - subString.length, subString.length) === subString
}

let averages = (array) => {
    return array.map((el, index) => {
        return (array[index] + array[index + 1]) / 2
    }).slice(0, -1)
}

let maxFromDigits = (number) => {
    return [...String(number)].map(Number).sort((a, b) => b - a).join("")
}

let nameScore = (string) => {
    let score = [...string.toUpperCase()].reduce((acc, curr) => acc + scores[curr], 0)
    return score <= 60 ? "NOT TOO GOOD" : (score >= 61 && score <= 300) ? "PRETTY GOOD" :
        (score >= 301 && score <= 599) ? "VERY GOOD" : score >= 600 ? "THE BEST" : ""
}

let countVowels = (string) => {
    return [...string].filter((el) => el.match(/[aeouiAEOUI]/)).length
}

let removeABC = (string) => {
    return [...string].filter((el) => !el.match(/[abc]/)).join("") === string ? null : [...string].filter((el) => !el.match(/[abc]/)).join("")
}

let difference = (arrayOne, arrayTwo) => {
    return Array.from(new Set(arrayOne.concat(arrayTwo)))
}

let reverseObject = (object) => {
    let resultObject = {}
    for (let keys in object) {
        resultObject[object[keys]] = keys
    }
    return resultObject
}

let calculateDifference = (object, limit) => {
    return Object.values(object).reduce((acc, curr) => acc + curr, 0) - limit
}

let leftRotations = (string) => {
    let result = []
    for (let i = 0; i < string.length; i++) {
        result.push(string.substring(i, string.length) + string.substring(0, i))
    }
    return result
}

let rightRotations = (string) => {
    let result = []
    for (let i = string.length - 1; i >= 0; i--) {
        result.push(string.substring(i + 1, string.length) + string.substring(0, i + 1))
    }
    return result
}

let doesBrickFit = (a, b, c, w, h) => {
    return (Math.max(a,b)<=Math.max(w,h) && Math.min(a,b)<=Math.min(w,h) || Math.max(b,c)<=Math.max(w,h) && Math.min(b,c)<=Math.min(w,h) || Math.max(a,c)<=Math.max(w,h) && Math.min(a,c)<=Math.min(w,h))
}


console.log(doesBrickFit(1,2,2,1,1))