import React, { ChangeEvent, useEffect } from 'react'
import MenuBar from '../MenuBar/MenuBar'
import { useArray } from '../../contexts/arrayProvider'

import './Visualizer.min.css'
// import { ARRAY_LENGTH, resetArray } from '../../utils/helpers'
import BarsContainer from '../BarsContainer/BarsContainer'
import { makeStyles, Slider, withStyles } from '@material-ui/core'
import { generateArray, resetArray } from '../../utils/helpers'

function Visualizer() {
    const { array, setArray } = useArray()
    const styledClasses = useStyles()

    console.log("Rendering Visualizer ", array);

    useEffect(() => {
        console.log("Visualizer mounted!")
        // setArray(resetArray(array))
    }, [])

    const swapBars = (i: number, j: number) => {
        console.log(`swapping ${i} and ${j}`);
        setArray((prevArr) => {
            let swappedArr = []

            for (let k = 0; k < prevArr.length; k++) {
                if (k === i) {
                    swappedArr.push(prevArr[j])
                } else if (k === j) {
                    swappedArr.push(prevArr[i])
                } else {
                    swappedArr.push(prevArr[k])
                }
            }

            return swappedArr
        })
    }

    const swap = () => {
        console.log("Swapping");
        swapBars(1, 0)
    }

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

    return (
        <div className="visualizer">
            <MenuBar />
            <BarsContainer array={array} />
            <button
                onClick={swap}
            >
                Swap Test
            </button>
            <PrettoSlider
                className={styledClasses.slider}
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                defaultValue={20}
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