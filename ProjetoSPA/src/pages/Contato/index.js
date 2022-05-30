import './styles.css';

const Contato = () => {
    return (
        <div className='container-contato'>
            <h1>Contato</h1>
            <form>
                <label>NOME</label>
                <input placeholder="Nome Completo"/>
                <label>E-MAIL</label>
                <input placeholder="e-mail"/>
                <label>MENSAGEM</label>
                <textarea placeholder="Mensagem"/>
                <button>ENVIAR</button>
            </form>

        </div>
    )
}

export default Contato;