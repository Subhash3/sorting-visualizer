import { useArray } from '../../contexts/arrayProvider'
import { resetArray } from '../../utils/helpers'

import './MenuBar.min.css'

export default function MenuBar() {
    const { setArray } = useArray()

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
            <button className="sort-btn">Sort</button>
        </div>
    )
}
