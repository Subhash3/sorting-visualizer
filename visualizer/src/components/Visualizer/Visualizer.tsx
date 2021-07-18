import React, { useEffect } from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useArray } from '../../contexts/arrayProvider'

import './Visualizer.min.css'
import { resetArray } from '../../utils/helpers'
import BarsContainer from '../BarsContainer/BarsContainer'

function Visualizer() {
    const { array, setArray } = useArray()

    useEffect(() => {
        console.log("Visualizer mounted!")
        setArray(resetArray(array))
    }, [])

    return (
        <div className="visualizer">
            <MenuBar />
            <BarsContainer />
        </div>
    )
}

export default Visualizer;