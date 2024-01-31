import './header.css'
import logo from '../../src/assets/potrait.webp'
import { NavLink } from 'react-router-dom'


function Header() {
  const info ={
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
          <p>{info.title} {info.location}</p>
        </div>
      </div>
      <div className='nav'>
        <ul>
          {
            links.map((element, index) => {
              return <li key={index}><NavLink to={element.path} className='navlink' href="#">{element.navlink}</NavLink></li>
            })
          }
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