import React from 'react'
import { sortingAlgos } from '../../utils/helpers'

import './SortingAlgoOptions.min.css'

interface IFC_SortingAlgoOptionsProps {
    sortingAlgo: string,
    algoChangeHandler: React.MouseEventHandler<HTMLDivElement>
}

export default function SortingAlgoOptions({ sortingAlgo, algoChangeHandler }: IFC_SortingAlgoOptionsProps) {
    return (
        <div className="sort-algo-options">
            <div
                className={`sort-algo bubble ${sortingAlgo === sortingAlgos.BUBBLE_SORT ? "active" : ""}`}
                data-value={sortingAlgos.BUBBLE_SORT}
                onClick={algoChangeHandler}
            >Bubble Sort</div>
            <div
                className={`sort-algo selection ${sortingAlgo === sortingAlgos.SELECTION_SORT ? "active" : ""}`}
                data-value={sortingAlgos.SELECTION_SORT}
                onClick={algoChangeHandler}
            >Selction Sort</div>
            <div
                className={`sort-algo insertion ${sortingAlgo === sortingAlgos.INSERTION_SORT ? "active" : ""}`}
                data-value={sortingAlgos.INSERTION_SORT}
                onClick={algoChangeHandler}
            >Insertion Sort</div>
            <div
                className={`sort-algo merge ${sortingAlgo === sortingAlgos.MERGE_SORT ? "active" : ""}`}
                data-value={sortingAlgos.MERGE_SORT}
                onClick={algoChangeHandler}
            >Merge Sort</div>
            <div className={`sort-algo quick ${sortingAlgo === sortingAlgos.QUICK_SORT ? "active" : ""}`}
                data-value={sortingAlgos.QUICK_SORT}
                onClick={algoChangeHandler}
            >Quick Sort</div>
            <div className={`sort-algo heap not-implemented ${sortingAlgo === sortingAlgos.HEAP_SORT ? "active" : ""}`}
                data-value={sortingAlgos.HEAP_SORT}
                onClick={algoChangeHandler}
            >Heap Sort</div>
        </div>
    )
}
