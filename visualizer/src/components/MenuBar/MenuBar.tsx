import React from 'react'

import './MenuBar.min.css'

export default function MenuBar() {
    return (
        <div className="menu-bar">
            <button className="generate-new-array-btn">Generate New Array</button>
            <div className="title">Sort Visualizer</div>
            <button className="sort-btn">Sort</button>
        </div>
    )
}
