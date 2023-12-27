import structure from '../json/structure.json'
import * as utils from './utils'

export default function getLinePattern () {
    let index = utils.getRandomIndexArrayND(structure.length, 10)
    let index2 = utils.getRandomIndexArray(structure.length, 10)
    // return structure[index]
    return index2
}