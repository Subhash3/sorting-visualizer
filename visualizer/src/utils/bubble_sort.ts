
import { IFC_BarsInfo } from './../components/BarsContainer/BarsContainer';
import { sleep } from "./helpers";
import { swap, highlightBars } from './sort';

export const bubbleSort = async (barsInfo: IFC_BarsInfo, setBarsInfo: React.Dispatch<React.SetStateAction<IFC_BarsInfo>>) => {
    // console.log("Before sort: ", array);
    let { array, } = barsInfo

    let i, j, delay = 0.2 / array.length
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // These two elements are in wrong order.
                // Turn them red and wait for a few secs.
                let highlighted = highlightBars(barsInfo.colors, [j, j + 1], "red")
                setBarsInfo({
                    array,
                    colors: highlighted
                })
                await sleep(delay)

                // Now swap these two numbers
                let swapped = swap(j, j + 1, array)

                // These are in the correct positions
                // TUrn them green
                let dehighlited = highlightBars(barsInfo.colors, [j, j + 1], "green")

                // Update barsInfo and wait for a few secs
                setBarsInfo({
                    array: swapped,
                    colors: dehighlited
                })
                await sleep(delay)
            } else {
                // They are in the positions they are supposed to be in
                // Turn them green and wait for a few secs
                let highlighted = highlightBars(barsInfo.colors, [j, j + 1], "green")
                setBarsInfo({
                    array,
                    colors: highlighted
                })
                await sleep(delay)
            }
        }
        // Now the last number is in sorted position
        // Turn in green and wait
        let highlighted = highlightBars(barsInfo.colors, [j], "")
        setBarsInfo({
            array,
            colors: highlighted
        })
        await sleep(delay)

    }
    // console.log("After sort: ", array);
}