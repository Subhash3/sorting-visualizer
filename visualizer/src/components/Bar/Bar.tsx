import React from 'react'

import './Bar.min.css'

interface IFC_BarProps {
    val: number;
    index: number;
    width: number;
    spacing: number
}

export default function Bar(props: IFC_BarProps) {

    const barStyles = {
        height: 4 * props.val,
        width: props.width,
        // transform: `translateX(${10 * props.index + 1})`
        left: props.spacing * props.index
    }

    console.log("Width: ", props.width);

    return (
        <div className="bar" style={barStyles}>
            {props.val}
        </div>
    )
}
