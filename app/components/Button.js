"use client";
import React from 'react'
import styles from './button.module.css'

export default function Button() {

    return (
        <div className={styles["button-container"]}>
            <a className={styles.button} href='#' onClick={() => console.log("Click korsi!!")}>Click here</a>
        </div>
    )
}
