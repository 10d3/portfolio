import './about.css'
import { skills } from './skill'
function About() {

  const info = {
    about: 'About Me',
    desc: 'Hello! I am Herley, a recently graduated React developer. Based in Haiti, I am passionate about creating dynamic and interactive web experiences. My enthusiasm for programming translates into a constant commitment to learning and tackling new challenges. Join me in the adventure of web development, where I blend my fresh expertise in React with boundless creativity.'
  }
  return (
    <div className="main-about">
      <div className="first-about">
        <h3>{info.about}</h3>
      </div>
      <div className="prin-sec-about">
        <div className='about-t'>
          <p>{info.desc}</p>
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