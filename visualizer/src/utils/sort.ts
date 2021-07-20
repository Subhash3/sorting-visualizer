import { selectionSort } from './selection_sort';
import { IFC_BarsInfo } from './../components/BarsContainer/BarsContainer';
import { bubbleSort } from './bubble_sort';
import { sleep } from './helpers';
import { scale, sortingAlgos } from './helpers';

export const swap = (i: number, j: number, array: number[]) => {
    // console.log(`swapping ${i} and ${j}`);
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp

    return [...array]
}

export const highlightBars = (colors: string[], indices: number[], color: string) => {
    let highlighted: string[] = []
    for (let k = 0; k < colors.length; k++) {
        if (indices.includes(k)) {
            highlighted.push(color)
        } else {
            highlighted.push(colors[k])
        }
    }

    return highlighted
}

export const animate = async (newArray: number[], newColors: string[], setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>, delay: number) => {
    setBarsInfo({
        array: [...newArray],
        colors: [...newColors]
    })
    await sleep(delay)
}

export const sort = (algoName: string, speed: number, barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>) => {
    speed = scale(speed, 1, 10, 1, 100)
    switch (algoName) {
        case sortingAlgos.BUBBLE_SORT:
            bubbleSort(barsInfo, setBarsInfo, speed)
            break
        case sortingAlgos.SELECTION_SORT:
            // console.log(`${algoName} hasn't been implemented yet`)
            selectionSort(barsInfo, setBarsInfo, speed)
            break
        case sortingAlgos.INSERTION_SORT:
            console.log(`${algoName} hasn't been implemented yet`)
            break
        case sortingAlgos.MERGE_SORT:
            console.log(`${algoName} hasn't been implemented yet`)
            break
        case sortingAlgos.QUICK_SORT:
            console.log(`${algoName} hasn't been implemented yet`)
            break
        default:
            bubbleSort(barsInfo, setBarsInfo, speed)
            break
    }
}