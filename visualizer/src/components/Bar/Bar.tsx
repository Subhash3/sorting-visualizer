import React from 'react'

import './Bar.min.css'

interface IFC_BarProps {
    val: number;
    index: number;
}

export default function Bar(props: IFC_BarProps) {

    const barStyles = {
        height: 4 * props.val,
        // transform: `translateX(${10 * props.index + 1})`
        left: 10 * props.index
    }

    return (
        <div className="bar" style={barStyles}>
            {props.index}
        </div>
    )
}
