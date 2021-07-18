import React from 'react'

import './Bar.min.css'

interface IFC_BarProps {
    val: number;
    index: number;
    width: number;
    spacing: number;
    showNumber: Boolean;
    color: string;
}

export default function Bar({ val, width, spacing, index, showNumber, color }: IFC_BarProps) {

    const barStyles = {
        height: 4 * val,
        width: width,
        left: width * index + spacing * index
    }

    // console.log("Width: ", width);

    return (
        <div className={`bar ${color}`} style={barStyles}>
            {
                showNumber ? <span>{val}</span> : null
            }
        </div>
    )
}
