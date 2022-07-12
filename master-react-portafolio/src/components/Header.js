import React from 'react';
import profileIMG  from '../asserts/img/gallery/about1.png';

export const Header = () => {
  return (
    <>
      <main>
        {/* <!--? Hero Area Start--> */}
        <div className="slider-area">
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12 col-lg-10 col-md-10 col-sm-10">
                            {/* <!-- Hero Caption --> */}
                            <div className="hero__caption">
                                <h1>SIG-SIGMA.</h1>
                                <p>Digital Product Designer</p>
                                <p className="cd-headline letters scale">Head of design at 
                                    <a href="#" className="cd-words-wrapper">
                                        <b className="is-visible">Calvino</b>
                                        <b>Spondon</b>
                                        <b>Infix</b>
                                        <b>Directory</b>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--Hero Area End-->
        <!--? About 1 Start--> */}
        <section className="about-area section-padding40">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-10">
                    <div className="about-caption mb-50">
                        <div className="section-tittle mb-35">
                            <h2>About</h2>
                        </div>
                        <p>For more than 12 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer.</p>
                       
                        <p>At the moment, this journey has brought me to Cloud Academy in Mendrisio, Switzerland where I am a full-time Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-img">
                        <img src={ profileIMG } alt="" />
                    </div>
                </div>
            </div>
            <div className="row pt-40">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="experience">
                        <span>12 years</span>
                        <p>of experience</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="experience">
                        <span>$40M+</span>
                        <p>invested in projects I was<br /> involved in</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="experience">
                        <span>Multiple</span>
                        <p>industry awards</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        {/* <!-- About  End-->
        <!--? May-about Start --> */}
        <div className="may-about section-padding40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle2 mb-30">
                            <h2>Experience</h2>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="single-about">
                            <div className="tittle-experience">
                                <h3>User Experience Designer</h3>
                                <p>Jan 18 - Feb 20</p>
                            </div>
                            <div className="experience-link">
                                <a href="#">Yeadi Tech, NY <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="single-about">
                            <div className="tittle-experience">
                                <h3>Web Designer</h3>
                                <p>Jan 18 - Feb 20</p>
                            </div>
                            <div className="experience-link">
                                <a href="#">Yeadi Tech, NY <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="single-about">
                            <div className="tittle-experience">
                                <h3>UI Designer</h3>
                                <p>Jan 18 - Feb 20</p>
                            </div>
                            <div className="experience-link">
                                <a href="#">Yeadi Tech, NY <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="section-tittle2 mb-30 pt-50">
                            <h2>Education</h2>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="single-about">
                            <div className="tittle-experience">
                                <h3>Interaction Design</h3>
                                <p>Jan 18 - Feb 20</p>
                            </div>
                            <div className="experience-link">
                                <a href="#">Yeadi Tech, NY <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="single-about">
                            <div className="tittle-experience">
                                <h3>Human centered design</h3>
                                <p>Jan 18 - Feb 20</p>
                            </div>
                            <div className="experience-link">
                                <a href="#">Yeadi Tech, NY <i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- May-about End -->
        <!--? My Expertise Start --> */}
        <div className="our-services pt-top section-bg1">
            <div className="container">
                <div className="rwo">
                    <div className="col-xl-12">
                        <div className="section-tittle mb-75 text-center">
                            <h2>My Expertise</h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-contnet-center">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-services mb-30">
                            <div className="services-cap">
                                <h5>Experience<br /> Design</h5>
                                <p>Switzerland where I am a full time Product Designer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-services mb-30">
                            <div className="services-cap">
                                <h5>Interaction<br /> Design</h5>
                                <p>Switzerland where I am a full time Product Designer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="single-services mb-30">
                            <div className="services-cap">
                                <h5>Front-end<br /> Design</h5>
                                <p>Switzerland where I am a full time Product Designer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- My Expertise End -->
        <!--? Gallery Area Start --> */}
        <div className="gallery-area section-padding40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle mb-60">
                            <h2>Selected Portfolios</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img small-img "></div>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <a href="assets/img/gallery/gallery1.png" className="img-pop-up"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 ol-lg-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img small-img "></div>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <a href="assets/img/gallery/gallery2.png" className="img-pop-up"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img small-img "></div>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <a href="assets/img/gallery/gallery2.png" className="img-pop-up"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                        <div className="box snake mb-30">
                            <div className="gallery-img small-img "></div>
                            <div className="overlay">
                                <div className="overlay-content">
                                    <a href="assets/img/gallery/gallery3.png" className="img-pop-up"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}
