import React from 'react';
import cls from './preloader.module.scss'
import loader from '../../../assets/images/loader.svg'

const Preloader = (props) => {
    return (
        <div className={cls.preloader}>
            <img src={loader} alt="Preloader" />
        </div>

    )
}

export default Preloader;