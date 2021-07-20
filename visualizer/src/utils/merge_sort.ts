import { IFC_BarsInfo } from "../components/BarsContainer/BarsContainer"
import { animate } from "./sort"
import { highlightBars } from "./sort"

export const megeSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>, speed: number) => {
    let delay = 1 / speed

    const mergeTwoSortedArrays = async (arr: number[], left: number, right: number) => {
        // We're actually dealing with an array from left1 to right2 in the original array
        // [.....left1  ..... right2.....]
        // For each element in the 2nd part find its correct position and shift the elements accordingly
        // This is very similar to insertion sort

        console.log("Merging", "from ", left, "to", right)

        for (let i = left + 1; i <= right; i++) {
            let current = arr[i]
            let j

            let highlighted = highlightBars(barsInfo.colors, [i], "red")
            await animate(array, highlighted, setBarsInfo, delay)

            for (j = i - 1; j >= left; j--) {
                if (arr[j] <= current) {
                    break
                }
            }
            j += 1
            highlighted = highlightBars(highlighted, [j], "red")

            // if i == j then the element is in the correct position
            let iBackup = i
            if (i !== j) {
                // highlight this bar as we need to replace it
                highlighted = highlightBars(highlighted, [j], "red")
                await animate(array, highlighted, setBarsInfo, delay)


                // Move all the element from this j to i one step towards right
                while (i > j) {
                    arr[i] = arr[i - 1]
                    i--;
                }

                // Bring the current element to this correct position
                arr[i] = current;
                highlighted = highlightBars(highlighted, [iBackup], "red")
            }
            i = iBackup

            highlighted = highlightBars(highlighted, [j], "green")
            await animate(array, highlighted, setBarsInfo, delay)
        }
        // console.log("After merge:", arr)

        return
    }

    const mergeSortUtil = async (arr: number[], left: number, right: number) => {
        console.log({ left, right })
        let highlightedBounds = highlightBars(barsInfo.colors, [left], "yellow")
        highlightedBounds = highlightBars(highlightedBounds, [right], "blue")

        await animate(arr, highlightedBounds, setBarsInfo, delay)

        if (left >= right) {
            return
        }
        let mid = Math.floor((left + right) / 2)

        await mergeSortUtil(arr, left, mid)
        await mergeSortUtil(arr, mid + 1, right)
        await mergeTwoSortedArrays(arr, left, right)
    }

    let n = barsInfo.array.length
    let array = barsInfo.array

    console.log(array)

    await mergeSortUtil(array, 0, n - 1)
    console.log(array)
    await animate(array, barsInfo.colors, setBarsInfo, 0)
}