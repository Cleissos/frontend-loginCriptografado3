import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUsuario } from "../../../services/api";

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            // BOA PRÁTICA: Passar como um objeto para bater com o que a API espera
            const credentials = { email: user.email, password: user.password };
            const response = await loginUsuario(credentials);

            if (response.ok) {
                // Se o login for sucesso, vai para o home (Landing Page)
                navigate("/home");
            } else {
                try {
                    // Tenta ler o texto da resposta
                    const mensagemError = await response.text();

                    // Se o Spring enviar um objeto JSON como string, o console vai te mostrar
                    console.log("Resposta bruta do erro:", mensagemError);

                    // Se a mensagem vier vazia ou for um erro padrão longo do Spring
                    // definimos um mensagem amigável
                    if (!mensagemError || mensagemError.includes("timestamp")) {
                        setError("E-mail ou senha inválidos.");
                    } else {
                        setError(mensagemError);
                    }
                } catch (readError) {
                    setError("Erro ao processar resposta do servidor." + readError);
                }
            }
        } catch (error) {
            alert("Erro ao processar resposta do servidor.", error);
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Entrar</h1>
                {error && <span className={styles.error}>{error}</span>}

                <div className={styles.inputBox}>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        required
                    />
                    <i className="fa-solid fa-envelope"></i>
                </div>

                <div className={styles.inputBox}>
                    <input
                        className={styles.input}
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        required
                    />
                    <i className="fa-solid fa-lock"></i>
                    <i
                        className={`${styles.faEye} fa-solid ${showPassword ? "fa-solid fa-eye-slash" : "fa-eye"} `}
                        onClick={() => setShowPassword(!showPassword)}
                    ></i>
                </div>

                <button type="submit" className={styles.btn}>Entrar</button>

                <div className={styles.info}>
                    <p>
                        Ainda não tem cadastro?{" "}
                    </p>
                    <Link className={styles.link} to="/register">cadastre-se</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;