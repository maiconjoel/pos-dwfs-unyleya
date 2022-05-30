import './styles.css';
import Project from '../../components/Project';
import p1 from '../../img/prj01/1.jpg';
import p2 from '../../img/prj02/1.jpg';
import p3 from '../../img/prj03/1.jpg';
import p4 from '../../img/prj04/1.jpg';
import p5 from '../../img/prj05/1.jpg';
import p6 from '../../img/prj06/1.jpg';

const Portfolio = () => {
    return (
        <div className='container-services'>
            <Project img={p1} name='Casa A'/>
            <Project img={p2} name='Casa B'/>
            <Project img={p3} name='Casa C'/>
            <Project img={p4} name='Casa D'/>
            <Project img={p5} name='Casa E'/>
            <Project img={p6} name='Casa F'/>
        </div>
    )
}

export default Portfolio;