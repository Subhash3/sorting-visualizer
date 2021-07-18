import React, { useEffect } from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useArray } from '../../contexts/arrayProvider'

import './Visualizer.min.css'
import { resetArray } from '../../utils/helpers'
import BarsContainer from '../BarsContainer/BarsContainer'

function Visualizer() {
    // const [array, setArray] = useState(generateArray(ARRAY_LENGTH))
    const { array, setArray } = useArray()

    console.log("Rendering Visualizer");

    useEffect(() => {
        console.log("Visualizer mounted!")
        setArray(resetArray(array))
    }, [])

    const swapBars = (i: number, j: number) => {
        console.log(`swapping ${i} and ${j}`);
        setArray((prevArr) => {
            let temp = prevArr[i]
            prevArr[i] = prevArr[j]
            prevArr[j] = temp

            return [...prevArr]
        })
    }

    const swap = () => {
        console.log("Swapping");
        swapBars(1, 0)
    }

    return (
        <div className="visualizer">
            <MenuBar />
            <BarsContainer array={array} />
            <button
                onClick={swap}
            >
                Swap Test
            </button>
        </div>
    )
}

export default Visualizer;