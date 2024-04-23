import style from './footer.module.css'

function Footer() {
    return (
        <footer className={style.container}>
            <p className={style.p}>© 2024 Desenvolvido por Jaqueline Marina</p>
            <div className={style.social}>
                <a href="https://github.com/jaquelinemarina"
                    className={style.github} target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/jaquelinemarina/"
                    className={style.linkedin} target="_blank" rel="noreferrer">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer