import './styles.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="container-home">
            <div class="transbox">
                <p>A SPA Arquitetura e Construção desenvolve projetos na área residencial, comercial, e design de interiores, buscando sempre aliar a melhor solução do projeto, à criatividade, funcionalidade e custo-benefício.</p>
                <Link to="/Services"><button>CONHEÇA MAIS</button></Link>
            </div>
        </main>
    )
}

export default Home;