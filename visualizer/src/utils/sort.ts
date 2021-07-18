import { ArrayContextData } from "../contexts/arrayProvider";
import { sleep } from "./helpers";

const swap = (i: number, j: number, array: number[]) => {
    // console.log(`swapping ${i} and ${j}`);
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp

    return [...array]
}

export const bubbleSort = async (array: number[], setArray: React.Dispatch<React.SetStateAction<ArrayContextData>>) => {
    // console.log("Before sort: ", array);
    let i, j, delay = 1 / array.length
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // console.log("Swapping")
                let swapped = swap(j, j + 1, array)
                setArray(swapped)
                // console.log("After swapping", array)
                await sleep(delay)
            }
        }
    }
    // console.log("After sort: ", array);
}