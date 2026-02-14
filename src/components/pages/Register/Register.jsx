import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { cadastrarUsuario } from "../../../services/api";
import styles from "../Register/Register.module.css"

const Register = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            // BOA PRÁTICA: Deletar a chamada de API para o arquivo de serviço
            const response = await cadastrarUsuario(user);
            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                navigate("/login");
            }
            else {
                setError("Erro ao cadastrar. Verifique se o e-mail já existe.");
            }
        } catch (error) {
            setError("Erro de conexão com o servidor.", error);
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1 className={styles.title}>Criar conta</h1>
                {error && <span className={styles.error}>{error}</span>}
                <div className={styles.inputBox}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Digite seu nome"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        required
                    />
                    <i className="fa-solid fa-user"></i>
                </div>

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
                        className={`${styles.faEye} fa-solid ${showPassword ? "fa-solid fa-eye-slash": "fa-eye"} `}
                        onClick={() => setShowPassword(!showPassword)}
                        ></i>
                </div>

                <button type="submit" className={styles.btn}>Salvar</button>

                <div className={styles.info}>
                    <p>
                        Já tem conta?{" "}
                    </p>
                    <Link className={styles.link} to="/login">entrar</Link>
                </div>

            </form>
        </div>
    )
}

export default Register;