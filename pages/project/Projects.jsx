import { pro } from "./Pro"
import './projects.css'

function Projects() {



  return (
    <>
      {
        pro ? (
          <div className="main-pro">
            <div className="sec-pro one-pro">
              <h3>Project</h3>
            </div>
            <div className="sec-pro all-pro">
              {
                pro.map((element, index) => {
                  return (
                    <div className="card" key={index}>
                      <img src={`images/${element.image}`} alt="" />
                      <div className="card-text">
                        <h2>{element.name}</h2>
                        <p>{element.desc}</p>
                        <button type="button">Read More</button>
                      </div>
                    </div>)
                })
              }
            </div>
          </div>) : null
      }
    </>
  )
}

export default Projects