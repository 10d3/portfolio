import './header.css'
function Header() {

  const links = ['Home', 'About', 'Blog', 'Projects', 'Contact']
  const social = [
    {
      icon: "fa-brands fa-github",
      link : 'https://github.com/10d3'
    },
    {
      icon: "fa-brands fa-linkedin",
      link : 'https://www.linkedin.com/in/aherleym/'
    }
  ]

  return (
    <div className="main-header">
      <div className='img-header'>
        <img src="" alt="" />
        <h2>image here</h2>
      </div>
      <div className='nav'>
        <ul>
          {
            links.map((element, index) => {
              return <li key={index}><a className='navlink' href="#">{element}</a></li>
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