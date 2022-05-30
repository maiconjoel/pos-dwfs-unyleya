import './styles.css';

const Service = ({img, name, desc}) => {
    return (
        <div className="container-service">
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Service;