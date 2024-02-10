import './home.css'
import { Link } from 'react-router-dom'
import imageP from '../../src/assets/imageP.png'

function Home() {

  const info = {
    greet: 'Hi, my name is',
    profession: 'Marc-Herley Antoine',
    ptext: 'Herley'
  }
  return (
    <div className="main-home">
      <div className='main-sub'>
        <div className="sec-home">
          <div className='img-pre'>
          <img src={imageP} alt="" />
          </div>
        </div>
        <div className='sec-home'>
          <div className='text-pre'>
            <p>Hello, I&apos;m</p>
            <h2>{info.profession}</h2>
            <h3>Frond-End Developer</h3>
          </div>
          <div className='button-div'>
            <Link to='/projects' className='btn' type='button'>Portfolio&nbsp;<i className="fa-solid fa-folder"></i></Link>
            <a className='cer' href="certificat.pdf" download>Certificat&nbsp;<i className="fa-solid fa-download"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home