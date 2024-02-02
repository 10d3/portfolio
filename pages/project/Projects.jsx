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
          <div className="sec-pro one-pro">Projects</div>
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
                        <iframe width="50%" height="50%" src="https://www.youtube.com/embed/B1w07ogfWgQ?si=O_Im723AgAs_tYNH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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