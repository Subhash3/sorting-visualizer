import React, { useEffect } from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useArray } from '../../contexts/arrayProvider'

import './Visualizer.min.css'
import { resetArray } from '../../utils/helpers'
import BarsContainer from '../BarsContainer/BarsContainer'

function Visualizer() {
    const { array, setArray } = useArray()

    console.log("Rendering Visualizer ", array);

    useEffect(() => {
        console.log("Visualizer mounted!")
        // setArray(resetArray(array))
    }, [])

    const swapBars = (i: number, j: number) => {
        console.log(`swapping ${i} and ${j}`);
        setArray((prevArr) => {
            let swappedArr = []

            for (let k = 0; k < prevArr.length; k++) {
                if (k === i) {
                    swappedArr.push(prevArr[j])
                } else if (k === j) {
                    swappedArr.push(prevArr[i])
                } else {
                    swappedArr.push(prevArr[k])
                }
            }

            return swappedArr
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