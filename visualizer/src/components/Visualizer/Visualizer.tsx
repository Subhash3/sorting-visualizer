import React, { useEffect } from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useArray } from '../../contexts/arrayProvider'

import './Visualizer.min.css'
import { resetArray } from '../../utils/helpers'

function Visualizer() {
    const [array, setArray] = useArray()

    useEffect(() => {
        setArray(resetArray(array, 10))
    }, [])

    return (
        <div className="visualizer">
            <MenuBar />
            {array.map((num, idx) => <span key={idx}>{num} </span>)}
        </div>
    )
}

export default Visualizer;