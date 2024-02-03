import './home.css'
import { Link } from 'react-router-dom'
import imageP from '../../src/assets/imageP.png'

function Home() {

  const info = {
    greet: 'I am a',
    profession: 'Front-End Developer',
    ptext: 'Herley'
  }
  return (
    <div className="main-home">
      <div className='sec-home'>
        <h2 id='greet'>{info.greet}<br /><span className='info'>{info.profession}</span></h2>
        <p>Greetings, I'm <span className='name'>{info.ptext}</span>, a dedicated front-end developer driven by a deep passion for creating immersive and user-friendly web experiences. My journey in web development has equipped me with expertise in a range of technologies, including HTML, CSS, JavaScript, and React.</p>
        <div className='under-p'>
          <Link to='/projects' className='btn' type='button'>Portfolio&nbsp;<i className="fa-solid fa-folder"></i></Link>
          <a className='cer' href="certificat.pdf" download>Certificat&nbsp;<i className="fa-solid fa-download"></i></a>
        </div>
      </div>
      <div className='sec-home'>
        <img className='imageP' src={imageP} alt="" />
      </div>
    </div>
  )
}

export default Home