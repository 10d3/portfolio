import './header.css'
import { useContext } from 'react';
import logo from '../../src/assets/logo.png'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext';


function Header() {

  const { theme, updateTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    updateTheme(theme === 'light' ? 'dark' : 'light');
  };

  const info = {
    name: 'Marc-Herley Antoine',
    title: 'Front-End Developer',
    location: 'In Haiti'
  }
  const links = [
    {
      navlink: 'Home',
      path: '/'
    },
    {
      navlink: 'About',
      path: '/about'
    },
    {
      navlink: 'Blog',
      path: '/blog'
    },
    {
      navlink: 'Projects',
      path: '/projects'
    },
    {
      navlink: 'Contact',
      path: '/contact'
    }
  ]
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

  return (
    <div className="main-header">
      <div className='all'>
        <div className='img-header'>
          <img src={logo} alt="" />
        </div>
        <div>
          <h3>{info.name}</h3>
          <p><span>{info.title}&nbsp;</span>{info.location}</p>
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
  )
}

export default Header