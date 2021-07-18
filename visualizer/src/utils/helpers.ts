const MIN_NUM = 10
const MAX_NUM = 100

export const resetArray = (array: any[number], length: number = 10) => {
    for (let i = 0; i < length; i++) {
        array[i] = getRandomInt(MIN_NUM, MAX_NUM)
    }

    return array
}

export const mapStateToProps = (state: any) => {
    return { ...state }
}

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
