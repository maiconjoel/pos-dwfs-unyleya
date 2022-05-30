import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
    return (
        <main className="container-main">
            <h1><Link to="/">SPA Arquitetura e Construção</Link></h1>
            <ul>
                <li><Link to="/"><a>Home</a></Link></li>
                <li><Link to="/Services"><a>Serviços</a></Link></li>
                <li><Link to="/Portfolio"><a>Portfólio</a></Link></li>                
                <li><Link to="/Contato"><a>Contato</a></Link></li>
            </ul>
        </main>
    )
}

export default Header;