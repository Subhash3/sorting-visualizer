import React from 'react'
import Bar from '../Bar/Bar'

import './BarsContainer.min.css'

interface IFC_BarsContainerProps {
    array: number[]
}

export default function BarsContainer({ array }: IFC_BarsContainerProps) {
    console.log("Rendering Bars Container ", array);

    /*
        width = nb * wb + (nb-1) * spacing
        nb = no. of bars
        wb = bar width
        spacing = space b/w each bar

        Hence wb = (width - ((nb-1) * spacing))/(nb)

        spacing = wb
        width = nb + wb * (nb - 1) * wb
        wb = width/(nb + nb -1)
    */

    const barsContainerStyles = {
        width: 1000
    }

    let nb = array.length
    let wb = barsContainerStyles.width / (2 * nb - 1)
    let spacing = wb + 5

    return (
        <div className="bars-container" style={barsContainerStyles}>
            {array.map((num, idx) => <Bar val={num} index={idx} key={idx} width={wb} spacing={spacing} />)}
        </div>
    )
}
