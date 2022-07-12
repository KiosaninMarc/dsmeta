import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.facebook.com/fly2video" target="_blank" rel="noopener noreferrer">@Marcweb</a>
                    </p>
            </div>
        </header>
    )
}

export default Header