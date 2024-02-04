import './about.css'
import { skills } from './skill'
function About() {

  const info = {
    about: 'About Me',
    desc: [ 'In the realm of HTML, I meticulously structure content to ensure optimal accessibility and semantic clarity. With CSS, I bring designs to life, utilizing styles that not only enhance aesthetics but also contribute to a seamless user interface. My proficiency in JavaScript empowers me to add dynamic and interactive elements, enhancing the overall user engagement.',
    'One of my focal points is leveraging React to build scalable and efficient user interfaces. This powerful library allows me to create modular components, fostering maintainability and enhancing the overall development process. I take pride in my ability to blend creativity with functionality, resulting in websites that not only meet but exceed user expectations.']
  }
  return (
    <div className="main-about">
      <div className="first-about">
        <h3>{info.about}</h3>
      </div>
      <div className="prin-sec-about">
        <div className='about-t'>
          {
            info.desc.map((des, index) =>{
                return <p key={index}>{des}</p>
            })
          }
        </div>
        <div className='sec-f-about'>
          <h3>My Skills</h3>
          <div className='sec-about'>
            {
              skills.map((element, index) => {
                return (
                  <div className='icon-div' key={index}>
                    <a className='icon-skill' href={element.link}><i className={element.icon}></i></a>
                    <p>{element.desc}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About