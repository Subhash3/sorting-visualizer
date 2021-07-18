import React, { ChangeEvent, useEffect } from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useArray } from '../../contexts/arrayProvider'

import './Visualizer.min.css'
import BarsContainer from '../BarsContainer/BarsContainer'
import { makeStyles, Slider, withStyles } from '@material-ui/core'
import { generateArray } from '../../utils/helpers'
import { bubbleSort } from '../../utils/sort'

function Visualizer() {
    const { array, setArray } = useArray()
    const styledClasses = useStyles()

    // console.log("Rendering Visualizer ", array);

    useEffect(() => {
        console.log("Visualizer mounted!")
        // setArray(resetArray(array))
    }, [])

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

    const sortHandler = () => {
        bubbleSort(array, setArray)
    }

    return (
        <div className="visualizer">
            <MenuBar sortHandler={sortHandler} />
            <BarsContainer />
            <PrettoSlider
                className={styledClasses.slider}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
                min={5}
                max={200}
                onChange={sliderChangeHandler}
            />
        </div>
    )
}

const useStyles = makeStyles({
    slider: {
        position: "absolute",
        width: 1000,
        left: '50%',
        transform: 'translateX(-50%)',
    }
})

const PrettoSlider = withStyles({
    root: {
        color: 'rgb(31, 114, 87)',
        height: 8,
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