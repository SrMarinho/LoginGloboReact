import { useState } from "react"
import styles from "./LoginButton.module.css"
import classNames from 'classnames';

function LoginButton({ value }) {
    function ClickDown(e) {
        e.target.classList.add(styles.clicked)
    }

    function ClickUp(e) {
        e.target.classList.remove(styles.clicked)
    }

    return <input type="button" value={value} className={classNames(styles.button)} onMouseDown={ClickDown} onMouseUp={ClickUp}></input>
}

export default LoginButton