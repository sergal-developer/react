import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import projects from '../data/projects.json';

export const PortfolioDetails = () => {
    let { projectName } = useParams();
    const [project, setProject] = useState({});

    const navigate = useNavigate();

    const redirectMain = (e) => {
        navigate(`/portafolio`);
    }

    useEffect(() => {
        let _project = projects.filter(t => t.id === parseInt(projectName));
        console.log('_project: ', _project);
        setProject(_project[0]);
        console.log('project: ', project);
    }, []);

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

                                    <button type="button" onClick={redirectMain}>Return to Portafolios</button>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-contnet-center">
                            <div className="col-lg-12 col-md-12 col-sm-12" >
                                <div className="single-services single-services2 mb-30">
                                    <div className="services-cap">
                                        {project.id ? (
                                            <div>
                                                <div className='projectCover'>
                                                    <img src={project.preview} alt={project.preview} />
                                                </div>
                                                <h5>{project.title}</h5>
                                                <div>{project.content}</div>

                                                <div>{JSON.stringify(project.period)}</div>
                                                <div>{
                                                    project.techs.map(tech => (
                                                        <>
                                                            <div key={tech.id.toString()}>{tech.name}</div>
                                                        </>
                                                    ))
                                                }
                                                </div>
                                            </div>
                                        ) : (<p>Cargando proyecto</p>)}

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
