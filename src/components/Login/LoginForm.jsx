import InputText from "./InputText";
import LoginButton from "./LoginButton";
import styles from "./LoginForm.module.css"

function LoginForm() {
    return (
        <form action="" method="POST">
            <div className={styles.loginFormLogo}>
                <img src="logoGlobo.png" alt="Globo logo fomulario"/>
            </div>
            <div className={styles.FormInputs}>
                <InputText placeholder="Usuário" type="email" required/>
                <InputText placeholder="Senha" type="password" required/>
            </div>
            <LoginButton value="Entrar"/>
        </form>
    )
}

export default LoginForm