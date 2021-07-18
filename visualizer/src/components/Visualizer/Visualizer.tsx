import React, { useEffect } from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useArray } from '../../contexts/arrayProvider'

import './Visualizer.min.css'
import { resetArray } from '../../utils/helpers'

function Visualizer() {
    const { array, setArray } = useArray()

    useEffect(() => {
        console.log("Visualizer mounted!")
        setArray(resetArray(array))
    }, [])

    return (
        <div className="visualizer">
            <MenuBar />
            {array.map((num, idx) => <div key={idx}>{idx}: {num} </div>)}
        </div>
    )
}

export default Visualizer;