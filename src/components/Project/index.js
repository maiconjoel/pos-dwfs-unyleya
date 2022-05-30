import './styles.css';

const Project = ({img, name, desc}) => {
    return (
        <div className="container-project">
            <img src={img} alt={name}/>
            <h2>{name}</h2>
        </div>
    )
}

export default Project;