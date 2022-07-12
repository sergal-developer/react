import './App.scss';
import { RouterApp } from './router/RouterApp';

function App() {
  return (
    <>
      <RouterApp />
      {/* <!-- Spinner  --> */}


      {/* <!-- Navbar  --> */}


      {/* <!-- Header --> */}


      {/* <!-- Video Modal Start --> 
      <div className="modal modal-video fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                  allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}


      {/* <!-- About  --> */}


      {/* <!-- Expertise  --> */}

      {/* <!-- Service  --> */}


      {/* <!-- Projects Start -->
      <div className="container-xxl py-6 pt-5" id="project">
        <div className="container">
          <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">My Projects</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                <li className="mx-3 active" data-filter="*">All Projects</li>
                <li className="mx-3" data-filter=".first">UI/UX Design</li>
                <li className="mx-3" data-filter=".second">Graphic Design</li>
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="./assets/img/project-1.jpg" alt="" />
                <div className="portfolio-btn">
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="./assets/img/project-2.jpg" alt="" />
                <div className="portfolio-btn">
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="./assets/img/project-3.jpg" alt="" />
                <div className="portfolio-btn">
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="./assets/img/project-4.jpg" alt="" />
                <div className="portfolio-btn">
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item first">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="./assets/img/project-5.jpg" alt="" />
                <div className="portfolio-btn">
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
              <div className="portfolio-img rounded overflow-hidden">
                <img className="img-fluid" src="./assets/img/project-6.jpg" alt="" />
                <div className="portfolio-btn">
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                  <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Projects End --> */}


      {/* <!-- Team Start --> 
      <div className="container-xxl py-6 pb-5" id="team">
        <div className="container">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">Team Members</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5" href="">Contact Us</a>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded" src="./assets/img/team-1.jpg" alt="" />
                <div className="team-text bg-white rounded-end p-4">
                  <div>
                    <h5>Full Name</h5>
                    <span>Designer</span>
                  </div>
                  <i className="fa fa-arrow-right fa-2x text-primary"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded" src="./assets/img/team-2.jpg" alt="" />
                <div className="team-text bg-white rounded-end p-4">
                  <div>
                    <h5>Full Name</h5>
                    <span>Designer</span>
                  </div>
                  <i className="fa fa-arrow-right fa-2x text-primary"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded" src="./assets/img/team-3.jpg" alt="" />
                <div className="team-text bg-white rounded-end p-4">
                  <div>
                    <h5>Full Name</h5>
                    <span>Designer</span>
                  </div>
                  <i className="fa fa-arrow-right fa-2x text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}


      {/* <!-- Testimonial Start -->
      <div className="container-fluid bg-light py-5 my-5" id="testimonial">
        <div className="container-fluid py-5">
          <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
          <div className="row justify-content-center">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-left h-100">
                <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="./assets/img/testimonial-1.jpg" alt="" />
                <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="./assets/img/testimonial-2.jpg" alt="" />
                <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="./assets/img/testimonial-3.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="./assets/img/testimonial-1.jpg" alt="" />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                  <hr className="w-25 mx-auto"></hr>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="./assets/img/testimonial-2.jpg" alt="" />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                  <hr className="w-25 mx-auto"></hr>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-5">
                    <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="./assets/img/testimonial-3.jpg" alt="" />
                    <div className="testimonial-icon">
                      <i className="fa fa-quote-left text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                  <hr className="w-25 mx-auto"></hr>
                  <h5>Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-right h-100">
                <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="./assets/img/testimonial-1.jpg" alt="" />
                <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="./assets/img/testimonial-2.jpg" alt="" />
                <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="./assets/img/testimonial-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}


      {/* <!-- Contact --> */}


      {/* <!-- Map Start -->
      <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container-xxl pt-5 px-0">
          <div className="bg-dark">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0" allowFullScreen="" aria-hidden="false"
              tabIndex="0"></iframe>
          </div>
        </div>
      </div>
      {/* <!-- Map End --> */}



      <div className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></div>

    </>
  );
}

export default App;
