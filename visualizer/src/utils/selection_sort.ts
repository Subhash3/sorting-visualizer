import { highlightBars, swap } from './sort';
import { IFC_BarsInfo } from './../components/BarsContainer/BarsContainer';
import { sleep } from './helpers';

export const selectionSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>) => {
    let { array, colors } = barsInfo
    let n = array.length
    let delay = 5 / n

    let lastIndex = n - 1

    while (lastIndex >= 0) {
        let largest = array[0]
        let indexOfLargest = 0
        for (let i = 0; i <= lastIndex; i++) {
            // Time to update the new largest
            if (array[i] > largest) {
                // console.log("Largest is at", i)
                largest = array[i]
                indexOfLargest = i
            }

            if (i === indexOfLargest) {
                let highlighted = highlightBars(colors, [i], "purple")
                setBarsInfo({
                    array,
                    colors: highlighted
                })
                await sleep(delay)
            }
        }
        // Now we have the largest element.
        // Swap it with the last element
        // console.log("Swapping ", lastIndex, "with", indexOfLargest)

        // Highlight the last element before swapping
        let highlighted = highlightBars(colors, [lastIndex], "red")
        setBarsInfo({
            array,
            colors: highlighted
        })
        await sleep(delay)

        let swapped = swap(lastIndex, indexOfLargest, array)
        let dehighlighted = highlightBars(colors, [lastIndex, indexOfLargest], "")
        setBarsInfo({
            array: [...swapped],
            colors: dehighlighted
        })
        await sleep(delay)
        array = [...swapped]
        lastIndex -= 1
    }

    // console.log(array)
}