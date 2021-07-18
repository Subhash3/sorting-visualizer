// import { useEffect } from 'react'
// import { useEffect } from 'react'
import { useArray } from '../../contexts/arrayProvider'
import { resetArray } from '../../utils/helpers'

import './MenuBar.min.css'

interface MenuBarProps {
    sortHandler: any
}

export default function MenuBar({ sortHandler }: MenuBarProps) {
    const { setArray } = useArray()

    // useEffect(() => {
    //     console.log("MenuBar: array updated")
    // }, [array])

    // useEffect(() => {
    //     console.log("Menubar: SortHandler updated")
    // }, [sortHandler])

    console.log("Rendering Menubar")
    // console.log(array);

    const generateNewArray = () => {
        // console.log("Generating...")
        setArray((pervArr) => {
            // console.log("Updating state");
            return [...resetArray(pervArr)]
        })
    }

    return (
        <div className="menu-bar">
            <button
                className="generate-new-array-btn"
                onClick={generateNewArray}
            >Generate New Array</button>
            <div className="title">Sort Visualizer</div>
            <button
                className="sort-btn"
                onClick={sortHandler}
            >Sort</button>
        </div>
    )
}
