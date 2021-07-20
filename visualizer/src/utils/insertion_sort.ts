import { animate } from './sort';
import { IFC_BarsInfo } from "../components/BarsContainer/BarsContainer"

export const insertionSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>, speed: number) => {
    let delay = 1 / speed;

    let { colors, array } = barsInfo
    let n = array.length

    for (let i = 1; i < n; i++) {
        let j
        let temp = array[i]
        for (j = i - 1; (j >= 0) && (temp < array[j]); j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = temp
    }
    animate(array, colors, setBarsInfo, delay)

    return array
}