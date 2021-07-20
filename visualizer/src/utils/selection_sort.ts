import { resetBarColors } from './helpers';
import { highlightBars, swap, animate } from './sort';
import { IFC_BarsInfo } from './../components/BarsContainer/BarsContainer';

export const selectionSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>, speed: number) => {
    let { array, colors } = barsInfo
    let n = array.length
    let delay = 1 / speed

    let lastIndex = n - 1

    let highlighted = colors
    while (lastIndex >= 0) {
        let largest = array[0]
        let indexOfLargest = 0

        let lastBarHighlighted = highlightBars(barsInfo.colors, [lastIndex], "purple")
        // await animate(array, highlighted, setBarsInfo, delay)

        let i
        for (i = 0; i <= lastIndex; i++) {
            // Time to update the new largest
            if (array[i] > largest) {
                // console.log("Largest is at", i)
                largest = array[i]
                indexOfLargest = i
            }

            if (i === indexOfLargest) {
                highlighted = highlightBars(lastBarHighlighted, [i], "red")
                await animate(array, highlighted, setBarsInfo, delay)
            }
        }
        highlighted = highlightBars(lastBarHighlighted, [indexOfLargest], "green")
        await animate(array, highlighted, setBarsInfo, delay)

        // Now we have the largest element.
        // Swap it with the last element
        // console.log("Swapping ", lastIndex, "with", indexOfLargest)

        // Highlight the last element before swapping
        // await animate(array, highlighted, setBarsInfo, delay)

        let colorsAfterSwapping = highlightBars(highlighted, [indexOfLargest], "purple")
        colorsAfterSwapping = highlightBars(colorsAfterSwapping, [lastIndex], "green")
        let swapped = swap(lastIndex, indexOfLargest, array)

        await animate(swapped, colorsAfterSwapping, setBarsInfo, delay)

        array = [...swapped]
        lastIndex -= 1
    }

    let afterReset = resetBarColors(barsInfo.colors)
    await animate(array, afterReset, setBarsInfo, delay)

    return array
    // console.log(array)
}