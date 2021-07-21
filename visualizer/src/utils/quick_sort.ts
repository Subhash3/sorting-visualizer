import { animate, highlightBars, inPlaceSwap } from './sort';
import { IFC_BarsInfo } from "../components/BarsContainer/BarsContainer"

export const quickSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>, speed: number) => {
    let delay = 1 / speed

    const quickSortUtil = async (arr: number[], left: number, right: number) => {
        if (left >= right) {
            return
        }

        let highlighted = barsInfo.colors
        highlightBars(highlighted, [left], "yellow")
        highlightBars(highlighted, [right], "blue")

        let pivotIndex = await pivotPartition(arr, left, right)
        await quickSortUtil(arr, left, pivotIndex - 1)
        await quickSortUtil(arr, pivotIndex + 1, right)
    }
    const pivotPartition = async (arr: number[], left: number, right: number) => {
        let highlighted = barsInfo.colors

        let pivotIndex = right
        let pivot = arr[pivotIndex]

        let pivotHighlighted = highlightBars(highlighted, [pivotIndex], "purple")

        let i = left
        let j

        for (j = left; j < right; j++) {
            let pointersHighlighted = pivotHighlighted
            pointersHighlighted = highlightBars(pointersHighlighted, [i], "orange")
            pointersHighlighted = highlightBars(pointersHighlighted, [j], "magenta")
            await animate(arr, pointersHighlighted, setBarsInfo, delay)

            if (arr[j] < pivot) {
                // If i == j then i is already in its correct position... Don't need to turn it red or swap
                if (i !== j) {

                    pointersHighlighted = highlightBars(pointersHighlighted, [i], "red")
                    pointersHighlighted = highlightBars(pointersHighlighted, [j], "lightgreen")
                    await animate(arr, pointersHighlighted, setBarsInfo, delay)

                    inPlaceSwap(i, j, arr)
                }

                pointersHighlighted = highlightBars(pointersHighlighted, [i], "lightgreen")
                pointersHighlighted = highlightBars(pointersHighlighted, [j], "magenta")
                await animate(arr, pointersHighlighted, setBarsInfo, delay)

                i += 1
            }
        }
        inPlaceSwap(i, j, arr)
        pivotHighlighted = highlightBars(highlighted, [i], "lightgreen")
        await animate(arr, pivotHighlighted, setBarsInfo, delay)
        pivotIndex = i

        return pivotIndex
    }

    let { array } = barsInfo
    let n = array.length

    console.log("Before quicksort:", array)
    await quickSortUtil(array, 0, n - 1)
    console.log("After quicksort:", array)

    await animate(array, barsInfo.colors, setBarsInfo, 0)

    return array
}