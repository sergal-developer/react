import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const PortfolioDetails = () => {
    let { projectName } = useParams();
    const navigate = useNavigate();

    const redirectMain = (e) => {
        navigate(`/portafolio`);
    }

    return (
        <>
            <main>
                {/* <!--? Hero Area Start--> */}
                <div className="hero-area2 d-flex align-items-center">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-12">
                                {/* <!-- Hero Caption --> */}
                                <div className="hero-cap pt-100">
                                    <h2>{projectName}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--Hero Area End--> */}
                {/* <!--? About 1 Start--> */}
                <section className="about-area section-padding40 our-services">
                    <div className="container">
                        <div className="rwo">
                            <div className="col-xl-12">
                                <div className="section-tittle mb-75 text-center">
                                    <h2>Details</h2>

                                    <button type="button" onClick={ redirectMain }>Return to Portafolios</button>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-contnet-center">
                            <div className="col-lg-4 col-md-4 col-sm-6" >
                                <div className="single-services single-services2 mb-30">
                                    <div className="services-cap">
                                        <h5>Lorem ipsum dolor is ameet</h5>
                                        <p>Lorem ipsum dolor</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- About  End--> */}
            </main>
        </>
    )
}
