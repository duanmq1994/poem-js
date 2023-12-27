export function getRandomIndexArrayND(max, count) {
    if (count > max) {
        count = max
    }
    let indexArray = []
    for(let i = 0; i < max; i++) {
        indexArray.push(i)
    }
    indexArray.sort(() => {
        return Math.random()-0.5
    })
    indexArray.length = count
    return indexArray
}

export function getRandomIndexArray(max, count) {
    let indexArray = []
    for(let i = 1; i <= count; i++) {
        indexArray.push(Math.floor(Math.random() * max))
    }
    return indexArray
}

export function getRandomOne(max) {
    return Math.floor(Math.random() * max)
}