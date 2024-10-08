import linked from './Pics/linkedin.jpg';
import github from './Pics/github.jpg';
import cv from './Pics/Cv.png';
import '../App.css';

export default function Info() {
    return <ul className='info'>
        <li><a href="https://www.linkedin.com/in/danijel-grbic-baa8541a3" className="linkedin" target="_blank">
            <div className="image-container">
                <img src={linked} alt='LinkedIn photo'/>
            </div>
            <div className="text-container">Kolla min LinkedIn</div>
        </a></li>

        <li><a href="https://github.com/DanijelGb" className="github" target="_blank">
             <div className="image-container">
                <img src={github} alt='GitHub photo'/>
            </div>
            <div className="text-container">Kolla mina GitHub projekt</div>
        </a></li>

       <li><a href='/CV.pdf' className="cv" target="_blank">
              <div className="image-container">
                <img src={cv} alt='Representational photo for CV'/>
            </div>
            <div className="text-container">Kolla in mitt CV</div>
        </a></li>

   </ul>
}