import './header.css'
import { useContext, useState } from 'react';
import logo from '../../src/assets/logo.png'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext';


function Header() {

  const { theme, updateTheme, links } = useContext(ThemeContext);

  const toggleTheme = () => {
    updateTheme(theme === 'light' ? 'dark' : 'light');
  };

  const info = {
    name: 'Marc-Herley Antoine',
    title: 'Front-End Developer',
  }
  const social = [
    {
      icon: "fa-brands fa-github",
      link: 'https://github.com/10d3'
    },
    {
      icon: "fa-brands fa-linkedin",
      link: 'https://www.linkedin.com/in/aherleym/'
    },
    {
      icon: "fa-brands fa-whatsapp",
      link: "https://wa.me/50944585449"
    },
    {
      icon: "fa-solid fa-inbox",
      link: "mailto:marcherleyantoine@gmail.com.com"
    },
    {
      icon: "fa-brands fa-telegram",
      link: "https://t.me/Ekko3"
    }
  ]

  const [ham, setHam] = useState(false);

  return (
    <div className="main-header">
      <div className='mob'>
        <button id='toggler' className='togglere' onClick={() => setHam(!ham)}>
          {
            ham ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
          }
        </button>
        <h2>herley</h2>
        <div className={`nav ${ham ? 'active' : ''}`} >
          <ul>
            {
              links.map((element, index) => {
                return <li key={index}><NavLink onClick={() => setHam(!ham)} to={element.path} className='navlink' href='#'>{element.navlink}</NavLink></li>
              })
            }
          </ul>
          <div className='copyright'>
          {
            social.map((element, index) => {
              return <a key={index} href={element.link}><i className={element.icon}></i></a>
            })
          }
        </div>
        </div>
        <button id='toggler' onClick={toggleTheme}>
          {
            theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>
          }
        </button>
      </div>
      <div className='desk'>
        <div className='all'>
          <div className='img-header'>
            <img src={logo} alt="" />
          </div>
          <div>
            <h3>{info.name}</h3>
            <p><span>{info.title}</span></p>
          </div>
        </div>
        <div className='nav'>
          <ul>
            {
              links.map((element, index) => {
                return <li key={index}><NavLink to={element.path} className='navlink' href="#">{element.navlink}</NavLink></li>
              })
            }
            <button id='toggler' onClick={toggleTheme}>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </ul>
        </div>
        <div className='copyright'>
          {
            social.map((element, index) => {
              return <a key={index} href={element.link}><i className={element.icon}></i></a>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Header