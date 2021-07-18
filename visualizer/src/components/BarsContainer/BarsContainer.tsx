import React from 'react'
import { useArray } from '../../contexts/arrayProvider';
import Bar from '../Bar/Bar'

import './BarsContainer.min.css'

interface IFC_BarsContainerProps {
}

export default function BarsContainer() {
    const { array, setArray } = useArray()

    // console.log("Rendering Bars Container ", array);

    /*
        width = nb * wb + (nb-1) * spacing
        nb = no. of bars
        wb = bar width
        spacing = space b/w each bar

        Hence wb = (width - ((nb-1) * spacing))/(nb)
    */

    const barsContainerStyles = {
        width: 1000
    }

    let nb = array.length
    let spacing = 2
    let wb = barsContainerStyles.width / nb
    wb -= spacing
    let showNumber = array.length <= 45


    return (
        <div className="bars-container" style={barsContainerStyles}>
            {array.map((num, idx) => <Bar val={num}
                index={idx}
                key={idx}
                width={wb}
                spacing={spacing}
                showNumber={showNumber}
            />)}
        </div>
    )
}
