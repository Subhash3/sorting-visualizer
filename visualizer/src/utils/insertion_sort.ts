import { animate, highlightBars } from './sort';
import { IFC_BarsInfo } from "../components/BarsContainer/BarsContainer"

export const insertionSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>, speed: number) => {
    let delay = 1 / speed;

    let { array } = barsInfo
    let n = array.length

    for (let i = 1; i < n; i++) {
        let j
        let current = array[i]
        // Highlight the current element to indicate that we're finding the correct posistion of this element
        let highlighted = highlightBars(barsInfo.colors, [i], "purple")
        await animate(array, highlighted, setBarsInfo, delay)

        // Find the actual position of array[i]
        // => move the element left so that all the elements on right are bigger than this.
        // This loop finds the index of such element
        for (j = i - 1; j >= 0; j--) {
            if (array[j] <= current) {
                break
            }
        }
        // We actually move a step leftward because of forloop
        // Increment it once to bring it to the correct position
        j += 1

        // if i == j then the element is in the correct position
        let iBackup = i
        if (i !== j) {
            // highlight this bar as we need to replace it
            highlighted = highlightBars(highlighted, [j], "red")
            await animate(array, highlighted, setBarsInfo, delay)

            // Move all the element from this j to i one step towards right
            while (i > j) {
                array[i] = array[i - 1]
                i--;
            }

            // Bring the current element to this correct position
            array[i] = current;
        }
        i = iBackup

        highlighted = highlightBars(barsInfo.colors, [j], "green")
        await animate(array, highlighted, setBarsInfo, delay)

    }

    return array
}