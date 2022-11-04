import React from 'react'
import {Slider, withStyles} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void
    value?: [number, number],
    min?: number,
    max?: number,
    step?: number,
    disable?: boolean

    // min, max, step, disable, ...
}


const MySlider = withStyles({
    root: {
        color: '#dabdab'
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: '#4c2f27',
        borderRadius: 50,
        marginTop: -6,
        '&:hover': {
            boxShadow: 'rgba(177, 152, 123, 0.31) 0 0 0 8px'
        },
    },
    track: {
        height: 8
    },
    rail: {
        color: '#dabdab',
        height: 8,
        borderRadius: 50,
        opacity: 1
    }
})(Slider);


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, max, step, disable
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    return (
        <div style={{width: "150px"}}>
            <MySlider onChange={onChangeRange}
                   value={value}
                   min={min}
                   max={max}
                   step={step}
                   disabled={disable}/>
        </div>
    )
}

export default SuperDoubleRange
