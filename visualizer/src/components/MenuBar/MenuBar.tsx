// import { useEffect } from 'react'
// import { useEffect } from 'react'
// import { useArray } from '../../contexts/arrayProvider'
import { useEffect } from 'react'
import { useBarsInfo } from '../../contexts/barsInfoProvider'
import { resetArray, resetBarColors } from '../../utils/helpers'

import './MenuBar.min.css'

interface MenuBarProps {
    sortHandler: any
}

export default function MenuBar({ sortHandler }: MenuBarProps) {
    // const { setArray } = useArray()
    const { barsInfo, setBarsInfo } = useBarsInfo()

    // useEffect(() => {
    //     console.log("MenuBar: array updated")
    // }, [array])

    // useEffect(() => {
    //     console.log("Menubar: SortHandler updated")
    // }, [sortHandler])

    useEffect(() => {
        // console.log("MenuBar: BarsInfo changed!!")
    }, [barsInfo])

    // console.log("Rendering Menubar")
    // console.log(array);

    const generateNewArray = () => {
        // console.log("Generating...")
        // setArray((pervArr) => {
        //     // console.log("Updating state");
        //     return [...resetArray(pervArr)]
        // })

        setBarsInfo(prevBarsInfo => {
            console.log("MenuBar: Setting barsInfo")
            return {
                array: resetArray(prevBarsInfo.array),
                colors: resetBarColors(prevBarsInfo.colors)
            }
        })
    }

    return (
        <div className="menu-bar">
            <button
                className="generate-new-array-btn"
                onClick={generateNewArray}
            >Generate New Array</button>
            <div className="title">Sorting Visualizer</div>
            <button
                className="sort-btn"
                onClick={sortHandler}
            >Sort</button>
        </div>
    )
}
