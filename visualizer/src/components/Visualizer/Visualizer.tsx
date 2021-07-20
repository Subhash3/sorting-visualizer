import React, { ChangeEvent, useEffect, useState } from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useArray } from '../../contexts/arrayProvider'

import './Visualizer.min.css'
import BarsContainer, { IFC_BarsInfo } from '../BarsContainer/BarsContainer'
import { makeStyles, Slider, withStyles } from '@material-ui/core'
import { generateArray, sortingAlgos } from '../../utils/helpers'
import { sort } from '../../utils/sort'
import SortingAlgoOptions from '../SortingAlgoOptions/SortingAlgoOptions'

function Visualizer() {
    const { array, setArray } = useArray()
    const initialColors = array.map(num => "")
    const [sortingAlgo, setSortingAlgo] = useState(sortingAlgos.BUBBLE_SORT)
    const [sortingSpeed, setSortingSpeed] = useState<number>(1)
    const [barsInfo, setBarsInfo] = useState<IFC_BarsInfo>({
        array: array,
        colors: []
    })
    const styledClasses = useStyles()

    // console.log("Rendering Visualizer ", array);
    // console.log(initialColors)

    useEffect(() => {
        console.log("Visualizer mounted!")
        setBarsInfo({
            array: array,
            colors: initialColors
        })
        // setArray(resetArray(array))
    }, [])

    // When the array is modified, update the barsInfo as well.
    useEffect(() => {
        // console.log("Array changed. Time to change barsInfo");
        setBarsInfo({
            array: array,
            colors: initialColors
        })
    }, [array])

    const sliderChangeHandler = (e: ChangeEvent<{}>, value: number | number[]) => {
        let newLength: number

        if (typeof value === "number") {
            newLength = value
        } else {
            newLength = value[0]
        }

        setArray((prevArr) => {
            return [...generateArray(newLength)]
        })
    }

    const speedChangeHandler = (e: ChangeEvent<{}>, value: number | number[]) => {
        let newVal: number

        if (typeof value === "number") {
            newVal = value
        } else {
            newVal = value[0]
        }

        setSortingSpeed(newVal)
    }

    const sortHandler = () => {
        sort(sortingAlgo, sortingSpeed, barsInfo, setBarsInfo)
    }

    const algoChangeHandler = (e: any) => {
        let value = e.target.dataset.value
        setSortingAlgo(value)
        // console.log(value)
    }

    return (
        <div className="visualizer">
            <MenuBar sortHandler={sortHandler} />
            <BarsContainer barsInfo={barsInfo} />
            <PrettoSlider
                className={styledClasses.slider}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
                min={5}
                max={200}
                onChange={sliderChangeHandler}
            />
            <div className="speed-slider-container">
                {/* {sortingSpeed} */}
                <PrettoSlider
                    className={styledClasses.speedSlider}
                    orientation="vertical"
                    // valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={3}
                    min={1}
                    max={10}
                    onChange={speedChangeHandler}
                />
            </div>
            <SortingAlgoOptions sortingAlgo={sortingAlgo} algoChangeHandler={algoChangeHandler} />
        </div>
    )
}

const useStyles = makeStyles({
    slider: {
        position: "absolute",
        width: 1000,
        left: '50%',
        transform: 'translateX(-50%)',
    },
    speedSlider: {
        position: "absolute",
        right: 10,
        top: 0,
        height: '50px',
        // width: '14px !important',
        rail: {
            height: 24,
            width: "14px !important",
            borderRadius: 24,
            opacity: 1,
        }
    },
})

// Copied from Material-UI website
const PrettoSlider = withStyles({
    root: {
        color: 'rgb(31, 114, 87)',
        height: 5,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export default Visualizer;