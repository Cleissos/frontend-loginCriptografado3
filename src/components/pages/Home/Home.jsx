import styles from "./Home.module.css";
import Logo from "./img/logo-academia2.webp"
import ImgHome5 from "./img/img-home3.webp"
import ImgHome from "./img/img-home.jpg"
import ImgHome2 from "./img/img-home2.jpg"
import ImgHome6 from "./img/img-home6.jpg"
import ImgHome7 from "./img/img-home7.jpg"
import ImgService from "./img/serrvice-academia.jpg";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <section className={styles.sectionHeader}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="" />
                    </div>
                    <nav className={styles.navBar}>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#address">Address</a></li>
                        </ul>
                    </nav>
                    <div className={styles.logout}>
                        <button onClick={() => navigate("/login")} className={styles.btnLogout}>
                            Logout
                        </button>
                    </div>
                </section>
            </header>
            <div id="home" className={styles.home}>
                <section>
                    <div className={styles.imgHome}>
                        <img src={ImgHome} alt="" />
                    </div>
                    <div className={styles.info}>
                        <p>
                            Na nossa academia, cada treino é um passo a mais rumo à sua melhor versão. Aqui você encontra um ambiente moderno, acolhedor e equipado com tudo o que precisa para evoluir no seu ritmo — seja para ganhar força, melhorar o condicionamento ou simplesmente se sentir melhor consigo mesmo. Mais do que resultados estéticos, acreditamos em saúde, constância e bem-estar.
                        </p>
                        <p>
                            Nosso time de profissionais está pronto para te acompanhar em cada desafio, com orientação, motivação e planos pensados para o seu objetivo. Não importa se você está começando agora ou já vive o mundo fitness há anos: este é o seu espaço para superar limites, criar disciplina e transformar esforço em conquista. Seu treino começa aqui. 🏋️‍♂️✨
                        </p>
                    </div>
                </section>
            </div>
            <section id="about" className={styles.about}>
                <h2 className={styles.title}>CONHEÇA NOSSO ESPAÇO</h2>
                <div className={styles.imgAbout}>
                    <img src={ImgHome} alt="" />
                    <img src={ImgHome2} alt="" />
                    <img src={ImgHome6} alt="" />
                    <img src={ImgHome7} alt="" />
                </div>

            </section>

            <section id="services" className={styles.service}>
                <h2 className={styles.title}>
                    NOSSOS SERVICOS
                </h2>
                <div className={styles.serviceCard}>
                    <img src={ImgService} alt="" />
                    <div className={styles.serviceContent}>
                        <p>
                            Oferecemos uma estrutura completa para atender todos os perfis e objetivos, desde iniciantes até atletas experientes. Nossa academia conta com equipamentos modernos de musculação, área de treino funcional, espaço para cardio e aulas coletivas dinâmicas como HIIT, alongamento, circuito e treinamento personalizado. Cada aluno recebe orientação adequada para treinar com segurança, eficiência e foco nos resultados.
                        </p>
                        <p>
                            Além disso, disponibilizamos acompanhamento com profissionais qualificados, avaliação física periódica e planos de treino personalizados, adaptados às suas metas e evolução. Nosso compromisso é proporcionar uma experiência completa, unindo tecnologia, metodologia e motivação para que você alcance seus objetivos com saúde, disciplina e confiança.
                        </p>
                    </div>
                </div>
            </section>
            <section id="address" className={styles.address}>
                <h2 className={styles.title}>
                    LOCALIZAÇÃO
                </h2>
                <iframe className={styles.frame} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14659.714205595155!2d-49.863204238217875!3d-2.0086246426624657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92bd5aab75cacdd3%3A0xe0d9fdd6301ec9cf!2sAcademia%20Biofitness!5e0!3m2!1spt-BR!2sbr!4v1770830857659!5m2!1spt-BR!2sbr" 
                width="600" 
                height="450" 
                style={{border: 0}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>

            <footer className={styles.footer}>
                <p className={styles.assinatura}>
                    © 2026 Academia Biofitness. Todos os direitos reservados. Desenvolvido por Cleisson Silva.
                </p>
            </footer>
        </div>
    )
}

export default Home;