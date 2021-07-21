import { animate, highlightBars, inPlaceSwap } from './sort';
import { IFC_BarsInfo } from "../components/BarsContainer/BarsContainer"

export const heapSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>, speed: number) => {
    let delay = 1 / speed

    const getChildrenIndices = async (parentIdx: number, size: number) => {
        let left, right;

        left = 2 * parentIdx + 1;
        right = 2 * parentIdx + 2;

        left = (left >= size) ? -1 : left;
        right = (right >= size) ? -1 : right;

        return { left, right };

    }

    const getParentIdx = async (childIdx: number) => {
        return Math.ceil(childIdx / 2) - 1;
    }

    const getPrioritizedChildIndex = async (arr: number[], parentIdx: number, size: number) => {
        let children = await getChildrenIndices(parentIdx, size)

        if (children.left === -1 && children.right !== -1) {
            return children.right
        }

        if (children.left !== -1 && children.right === -1) {
            return children.left
        }

        // Leaf
        if (children.left === -1 && children.right === -1) {
            return -1
        }

        let a = arr[children.left]
        let b = arr[children.right]

        return a >= b ? children.left : children.right
    }

    const heapifyDown = async (arr: number[], idx: number, size: number) => {
        let maxChildIndex: number

        while (true) {
            maxChildIndex = await getPrioritizedChildIndex(arr, idx, size)
            if (maxChildIndex === -1) {
                break
            }
            if (arr[maxChildIndex] <= arr[idx]) {
                break
            }
            inPlaceSwap(maxChildIndex, idx, arr)
            idx = maxChildIndex
        }

        return
    }

    const heapifyUp = async (arr: number[], idx: number) => {
        let element = arr[idx]
        let parentIdx

        while (true) {
            parentIdx = await getParentIdx(idx)

            if ((idx <= 0) || arr[parentIdx] >= element) {
                // Reached Root or Parent > Child
                break
            }
            inPlaceSwap(parentIdx, idx, arr)
            idx = parentIdx
        }
        return
    }

    const heapify = async (arr: number[], size: number) => {
        let lastInternalNodeIndex = Math.ceil(size / 2) - 1

        for (let i = lastInternalNodeIndex; i >= 0; i--) {
            await heapifyDown(arr, i, size)
        }
    }

    const heapSortUtil = async (arr: number[]) => {
        let n = arr.length

        while (n > 0) {
            await heapify(arr, n)

            // Now the first element be the max element... Highlight it and swap it with the last element
            let highlighted = highlightBars(barsInfo.colors, [0], "green")
            highlighted = highlightBars(highlighted, [n - 1], "purple")
            await animate(arr, highlighted, setBarsInfo, delay)

            inPlaceSwap(0, n - 1, arr)

            highlighted = highlightBars(barsInfo.colors, [n - 1], "lightgreen")
            highlighted = highlightBars(highlighted, [0], "")
            await animate(arr, highlighted, setBarsInfo, delay)

            n -= 1
        }
    }

    let { array } = barsInfo
    await heapSortUtil(array)
    // console.log(array)

    await animate(array, barsInfo.colors, setBarsInfo, delay)

    return array
}