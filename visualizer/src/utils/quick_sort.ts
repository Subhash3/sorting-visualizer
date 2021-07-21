import { animate, inPlaceSwap } from './sort';
import { IFC_BarsInfo } from "../components/BarsContainer/BarsContainer"

export const quickSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>, speed: number) => {

    const quickSortUtil = async (arr: number[], left: number, right: number) => {
        if (left >= right) {
            return
        }

        let pivotIndex = await pivotPartition(arr, left, right)
        await quickSortUtil(arr, left, pivotIndex - 1)
        await quickSortUtil(arr, pivotIndex + 1, right)
    }
    const pivotPartition = async (arr: number[], left: number, right: number) => {
        let pivotIndex = right
        let pivot = arr[pivotIndex]

        let i = left
        let j
        for (j = left; j < right; j++) {
            if (arr[j] < pivot) {
                inPlaceSwap(i, j, arr)
                i += 1
            }
        }
        inPlaceSwap(i, j, arr)
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