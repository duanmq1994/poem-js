import structure from '../json/structure.json'
import words from '../json/index'

import * as utils from './utils'

function getLineText(pattern) {
    let line = ''
    pattern.forEach(element => {
        let wordArr = words[element]
        if (wordArr != undefined) {
            let wordIndex = utils.getRandomOne(wordArr.length)
            line += wordArr[wordIndex]
        } else {
            line += element
        }
    })
    return line
}

export default function generate(lineCount, hasDuplication=true) {
    let poem = []

    if (lineCount == 0) {
        lineCount = Math.floor(Math.random() * 10)
    }
    let patternIndexArr = utils.getRandomIndexArray(structure.length, lineCount)
    if (!hasDuplication) {
        patternIndexArr = utils.getRandomIndexArrayND(structure.length, lineCount)
    }

    patternIndexArr.forEach(index => {
        poem.push(getLineText(structure[index]))
    })
    return poem
}