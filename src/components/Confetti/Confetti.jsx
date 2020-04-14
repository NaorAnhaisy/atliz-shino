import React from 'react'
import Confetti from 'react-confetti'
import ScreenSize from "../ScreenSize/ScreenSize"
import { useState } from 'react'

export default () => {

    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    return (
        <>
            <ScreenSize setWidth={setWidth} setHeight={setHeight} />
            <Confetti
                width={width}
                height={height}
            />
        </>
    )
}