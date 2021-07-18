export const MIN_NUM = 10
export const MAX_NUM = 100
export const DEFAULT_ARRAY_LENGTH = 30

export const resetArray = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = getRandomInt(MIN_NUM, MAX_NUM)
    }

    return array
}

export const generateArray = (length: number) => {
    let arr = new Array(length)
    return resetArray(arr)
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

export const sleep = (delay: number) => {
    return new Promise((resolve) => setTimeout(resolve, delay * 1000));
}