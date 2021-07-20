import { IFC_BarsInfo } from "../components/BarsContainer/BarsContainer"
import { animate } from "./sort"
import { highlightBars } from "./sort"

export const megeSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>, speed: number) => {
    let delay = 1 / speed

    const mergeTwoSortedArrays = async (arr: number[], left: number, mid: number, right: number) => {
        // console.log({ left, mid, right })
        // We're actually dealing with an array from left1 to right2 in the original array
        // [.....left1  ..... right2.....]
        // For each element in the 2nd part find its correct position and shift the elements accordingly
        // This is very similar to insertion sort

        // console.log("Merging", "from ", left, "to", right)

        for (let i = mid; i <= right; i++) {
            let current = arr[i]
            let j

            for (j = i - 1; j >= left; j--) {
                if (arr[j] <= current) {
                    break
                }
            }
            j += 1

            // if i == j then the element is already in the correct position
            let highlighted
            let iBackup = i
            if (i !== j) {
                highlighted = highlightBars(barsInfo.colors, [i, j], "red")
                await animate(array, highlighted, setBarsInfo, delay)

                while (i > j) {
                    arr[i] = arr[i - 1]
                    i--;
                }

                arr[i] = current;
            }
            i = iBackup
            highlighted = highlightBars(barsInfo.colors, [i, j], "green")
            await animate(array, highlighted, setBarsInfo, delay)

        }
        // console.log("After merge:", arr)

        return
    }

    const mergeSortUtil = async (arr: number[], left: number, right: number) => {
        // console.log({ left, right })
        let highlightedBounds = highlightBars(barsInfo.colors, [left], "yellow")
        highlightedBounds = highlightBars(highlightedBounds, [right], "blue")

        await animate(arr, highlightedBounds, setBarsInfo, delay)

        if (left >= right || right === left + 1) {
            return
        }
        let mid = Math.floor((left + right) / 2)

        await mergeSortUtil(arr, left, mid)
        await mergeSortUtil(arr, mid + 1, right)
        await mergeTwoSortedArrays(arr, left, mid, right)
    }

    let n = barsInfo.array.length
    let array = barsInfo.array

    // console.log(array)

    await mergeSortUtil(array, 0, n - 1)
    // console.log(array)
    await animate(array, barsInfo.colors, setBarsInfo, 0)

    return array
}