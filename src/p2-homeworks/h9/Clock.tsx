import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {

            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)

    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const hours = (date.getHours() < 10) ? "0" + date.getHours() : date.getHours()
    const minutes = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes()
    const seconds = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds()

    const stringTime = (hours + ":" + minutes + ":" + seconds)
    const stringDate = (new Date().toLocaleDateString())
    return (
        <div className={styles.dataTimeContainer}>
            <div className={styles.time}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div className={styles.date}>
                    {stringDate}
                </div>
            )}
            <div className={styles.buttonsContainer}>
                <SuperButton red onClick={start}>start</SuperButton>
                <SuperButton red onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
