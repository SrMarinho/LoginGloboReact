import { useState } from "react"
import styles from "./InputText.module.css"

function InputText({type, placeholder}) {
    const [value, setValue] = useState("")

    return <input type={type} value={ value } onChange={e => setValue(e.target.value)} placeholder={ placeholder } className={styles.inputText}/>
}

InputText.defaultProps = {
    placeholder: "",
    type: "text"
}

export default InputText