import { useState } from 'react'
import './contact.css'
import imageP from '../../src/assets/imageP.png'


function Contact() {

  const [name, setName] = useState("")
  const [projet, setProjet] = useState("")
  const [detail, setDetail] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
  }


  return (
    <div className="main-contact">
      <div className='sec-contact'>
      <img src={imageP} alt="" />
      </div>
      <div className='sec-contact'>
        <form onSubmit={handleChange} netlify>
          <div className="form-div">
            <label htmlFor="name">Name</label>
            <input onChange={(e) => {setName(e.target.value)}} type="text" name="name" id="name" placeholder="John Doe" />
            {name ? <h3>Invalid Input</h3> : null}
          </div>
          <div className="form-div">
            <label htmlFor="pro-n">Project Name</label>
            <input onChange={(e) => {setProjet(e.target.value)}} type="text" name="pro-n" id="pro-n" placeholder="Project Name" />
            {projet ? <h3>Invalid Input</h3> : null}
          </div>
          <div className="form-div">
            <label htmlFor="pro-d">Project Detail</label>
            <textarea onChange={(e) => {setDetail(e.target.value)}} type="text" name="pro-d" id="pro-d" placeholder="Details" />
            {detail ? <h3>Invalid Input</h3> : null}
          </div>
          <button type="button">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact