import React from 'react'
import Bar from '../Bar/Bar'

import './BarsContainer.min.css'

interface IFC_BarsContainerProps {
    array: number[]
}

export default function BarsContainer({ array }: IFC_BarsContainerProps) {
    console.log("Rendering Bars Container");
    return (
        <div className="bars-container">
            {array.map((num, idx) => <Bar val={num} index={idx} key={idx} />)}
        </div>
    )
}
