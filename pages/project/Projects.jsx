import { useState } from "react"
import { pro } from "./Pro"
import './projects.css'

function Projects() {

  const [activeStates, setActiveStates] = useState(Array(pro.length).fill(false));

  const handleSetActive = (index, value) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = value;
    setActiveStates(newActiveStates);
  };

  return (
    <>
      {
        pro ? (<div className="main-pro">
          <div className="sec-pro one-pro">
            <h3>Project</h3>
          </div>
          <div className="sec-pro all-pro">
            {
              pro.map((element, index) => {
                return (
                  <div className="procard" key={index}>
                    <div className="div-img">
                      <img onClick={() => handleSetActive(index, true)} src={`images/${element.image}`} alt="" />
                      <div className={`div-test ${activeStates[index] ? 'active' : ''}`}>
                        <button type="button" onClick={() => handleSetActive(index, false)}><i className="fa-solid fa-xmark"></i></button>
                        <div className="inside-test">
                          <div className="inside-deim">
                            <video width="100%" height="50%" controls>
                              <source src={`videos/${element.video}`} type="video/mp4" />
                            </video>
                          </div>
                          <div className="inside-desc">
                            <p>{element.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="div-text">
                      <h2>{element.name}</h2>
                      <div className="element">
                        {
                          element.tag.map((tags, index) => {
                            return (
                              <i key={index} className={tags.icon}></i>
                            )
                          })
                        }
                      </div>
                      <a href={element.url} target="blank">
                        <i className={element.icon}></i>
                      </a>
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