import './styles.css';
import Service from '../../components/Service';
import arquitetura from '../../img/arquitetura-service.png';
import design from '../../img/design-service.png';
import construcao from '../../img/construcao-service.png';
import consultoria from '../../img/consultoria-service.png';

const Services = () => {
    return (
        <div className='container-services'>
            <Service img={arquitetura} name='Arquitetura' desc='Trabalhamos na materialização de seus sonhos em projetos residenciais e comerciais, proporcionando conforto, bem-estar e valor estético.'/>
            <Service img={design} name='Design de Interiores' desc='Organizamos o espaço interno, definindo os materiais dos acabamentos e a distribuição dos móveis considerando o estilo do cliente, a acústica, a ventilação, a iluminação e a estética.'/>
            <Service img={construcao} name='Construção' desc='Realizamos o acompanhamento completo da sua obra: do planejamento físico-financeiro, ao gerenciamento de fornecedores, passando pelo controle de prazos e custos. Cuidamos de tudo conforme o seu projeto, do inicio da obra até a entrega das chaves.'/>
            <Service img={consultoria} name='Consultoria' desc='Prestamos suporte na escolha do seu imóvel, seu negócio e visita técnica para dicas de Design Interiores.'/>
        </div>
    )
}

export default Services;