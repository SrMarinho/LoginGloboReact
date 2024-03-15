import styles from "./Home.module.css"
import LoginForm from "../components/Login/LoginForm"

function Home() {
    return (
        <div className={styles.bgPrimaryColor}>
            <img src="/Group 20.svg" alt="" className={styles.LoginBG}/>
            <div className={styles.Container}>
                <LoginForm />
            </div>
        </div >
    )
}

export default Home