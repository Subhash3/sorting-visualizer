import React from 'react'
import Bar from '../Bar/Bar'
import { useArray } from '../../contexts/arrayProvider'

import './BarsContainer.min.css'

export default function BarsContainer() {
    const { array } = useArray()
    return (
        <div className="bars-container">
            {array.map((num, idx) => <Bar val={num} index={idx} key={idx} />)}
        </div>
    )
}
