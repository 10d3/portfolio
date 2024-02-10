import './about.css'
import { skills } from './skill'
import imageP from '../../src/assets/imageP.png'

function About() {

  const info = {
    about: 'About Me',
    desc: ['In the realm of HTML, I meticulously structure content to ensure optimal accessibility and semantic clarity. With CSS, I bring designs to life, utilizing styles that not only enhance aesthetics but also contribute to a seamless user interface. My proficiency in JavaScript empowers me to add dynamic and interactive elements, enhancing the overall user engagement.',
      'One of my focal points is leveraging React to build scalable and efficient user interfaces. This powerful library allows me to create modular components, fostering maintainability and enhancing the overall development process. I take pride in my ability to blend creativity with functionality, resulting in websites that not only meet but exceed user expectations.']
  }
  return (
    <div className="main-about">
      <div className="sec-about">
        <div className="sec-img">
          <img src={imageP} alt="" />
        </div>
      </div>
      <div className="sec-about">
        what i do
      </div>
    </div>
  )
}

export default About