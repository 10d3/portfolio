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
        <p>Hello, I am <span className='name'>{info.ptext}</span>,
          a passionate front-end developer dedicated to creating engaging and user-friendly web experiences.
          With expertise in <span className='lng'>HTML, CSS, JavaScript and React</span>,
          I specialize in crafting responsive and visually appealing websites.</p>
          <Link to='/projects' className='btn' type='button'>View Portfolio&nbsp;<i className="fa-solid fa-folder"></i></Link>
      </div>
      <div className='sec-home'>
        <img className='imageP' src={imageP} alt="" />
      </div>
    </div>
  )
}

export default Home