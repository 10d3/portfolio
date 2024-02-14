import "./home.css";
import { Link } from "react-router-dom";
import imageP from "../../src/assets/imageP.png";

function Home() {
  const info = {
    greet: "Hi, my name is",
    profession: "Marc-Herley Antoine",
    ptext: "Herley",
  };
  return (
    <div className="justify-content-center px-1 mx-1 px-xl-5 mx-xl-5">
      <div className="py-5 bg-text">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-image text-center" data-aos="fade-right">
              <img src={imageP} alt="banner" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="banner-content my-1 pt-1 my-lg-5 pt-lg-5"
              data-aos="fade-in"
            >
              <span className="text-muted text-uppercase">
                Designer / Developer
              </span>
              <h1 className="banner-title display-xl lh-1 txt-fx slide-up">
                Marc-Herley Antoine
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="icon-box" data-aos="fade-up">
              <span>01</span>
              <h3 className="sub-heading">UI/UX Design</h3>
              <p>At in proin consequat ut cursus venenatis sapien.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <span>02</span>
              <h3 className="sub-heading">Illustration</h3>
              <p>At in proin consequat ut cursus venenatis sapien.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <span>03</span>
              <h3 className="sub-heading">Graphic Design</h3>
              <p>At in proin consequat ut cursus venenatis sapien.</p>
            </div>
          </div>
          <div className="col-lg-3">
            <a
              href="#portfolio"
              className="btn btn-dark text-uppercase py-4 px-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              View All Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
