import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import styles from "./HW10.module.css"
import imageLoading from "../../img/loading.gif"

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3500)
        console.log('loading...')
    };

    return (
        <div>

            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><img src={imageLoading} alt="loading" className={styles.imageLoading}/><p className={styles.text}>LOADING... :)</p>  </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }


            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
