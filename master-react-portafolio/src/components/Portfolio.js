import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Portfolio = ({ expertises, projects }) => {
    const navigate = useNavigate();

    const _expertises = [
        { id: 1, title: 'Front-end Design', content: 'Maquetacion e implementacion de componentes previamente diseñados, con apoyo de frameworks basados en Javascript' },
        { id: 2, title: 'Back-end Developer', content: 'Creacion de servicios y apis de consumo' },
        { id: 3, title: 'Windows Azure', content: 'Implementacion de planes de despliege y uso de recursos para Windows Azure' },
        { id: 4, title: 'Interaction Design', content: 'Planeacion de efectos flujos y animaciones implementados en mockups de diseño' },
        { id: 5, title: 'Data Access', content: 'Creacion y administracion de bases de datos como SQL y postgress' }
    ]

    const _projects = [
        {
            id: 1, name: 'portal1', title: 'Portal Adrisa Seguros', content: 'Portal de administracion de seguros y polizas, desarrollo modulo de finanzas y reportes', period: [new Date('01/01/2012'), new Date('01/12/2013')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        },
        {
            id: 2, name: 'portal2', title: 'Portal Incidentes Embajada de EEUU', content: 'Portal de administracion de seguros y polizas, desarrollo modulo de finanzas y reportes', period: [new Date('01/11/2013'), new Date('31/11/2013')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        },
        {
            id: 3, name: 'portal3', title: 'GMM Seguros', content: 'Portal de administracion de seguros y polizas, desarrollo modulo de finanzas y reportes', period: [new Date('01/01/2014'), new Date('01/08/2014')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        },
        {
            id: 4, name: 'portal4', title: 'Blackboard Ultra', content: 'Sistema de Gestion de Aprendizaje Blackboard', period: [new Date('01/08/2014'), new Date('01/12/2015')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        },
        {
            id: 5, name: 'portal5', title: 'Scholastic', content: 'Portal de administracion de seguros y polizas, desarrollo modulo de finanzas y reportes', period: [new Date('01/09/2015'), new Date('01/10/2016')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        },
        {
            id: 6, name: 'portal6', title: 'Interapt', content: 'Portal de administracion de seguros y polizas, desarrollo modulo de finanzas y reportes', period: [new Date('01/09/2016'), new Date('01/12/2016')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        },
        {
            id: 7, name: 'portal7', title: 'Ebay', content: 'Portal de administracion de seguros y polizas, desarrollo modulo de finanzas y reportes', period: [new Date('01/07/2016'), new Date('01/04/2017')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        },
        {
            id: 8, name: 'portal8', title: 'Zaplabs LLC', content: 'Portal de administracion de seguros y polizas, desarrollo modulo de finanzas y reportes', period: [new Date('01/03/2017'), new Date('01/07/2017')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        },
        {
            id: 9, name: 'portal9', title: 'Dell EMC', content: 'Portal de administracion de seguros y polizas, desarrollo modulo de finanzas y reportes', period: [new Date('01/09/2017'), new Date('01/10/2017')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        },
        {
            id: 10, name: 'portal10', title: 'APX Glow', content: 'Portal de administracion de seguros y polizas, desarrollo modulo de finanzas y reportes', period: [new Date('02/11/2017'), new Date('16/07/2022')],
            techs: [{ id: 11, name: 'Windows Azure', logo: '' }, { id: 12, name: 'ASP.NET', logo: '' }, { id: 13, name: 'C#', logo: '' }, { id: 14, name: 'JQuery', logo: '' }, { id: 15, name: 'Cristal Reports', logo: '' }, { id: 16, name: 'SQL', logo: '' }]
        }
    ];

    const redirectDetaills = (e, item) => {
        navigate(`/portafolio/${item.id}`);
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
                                    <h2>My Portfolio</h2>
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
                                    <h2>My Expertise</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-contnet-center">
                            {
                                expertises.map(expertise => (
                                    <>
                                        <div className="col-lg-4 col-md-4 col-sm-6" key={expertise.id.toString()}>
                                            <div className="single-services single-services2 mb-30">
                                                <div className="services-cap">
                                                    <h5>{expertise.title}</h5>
                                                    <p>{expertise.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                    </div>
                </section>
                {/* <!-- About  End--> */}
                {/* <!--? Gallery Area Start --> */}
                <div className="gallery-area section-padding40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-tittle mb-60">
                                    <h2>Selected Portfolios</h2>
                                </div>
                                <div>
                                    <input type="text" name="" value=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            {
                                projects.map(project => (
                                    <>
                                        <div className="col-xl-5 ol-lg-6 col-lg-6 col-md-6 col-sm-6" key={project.id.toString()}>
                                            <div className="box snake mb-30">
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

                                                <div>
                                                    <button type="button" onClick={e => redirectDetaills(e, project)}>Detalles</button>
                                                </div>
                                                <div className="gallery-img small-img "></div>
                                                {/* <div className="overlay">
                                                    <div className="overlay-content">
                                                        <a href="assets/img/gallery/gallery2.png" className="img-pop-up"><i className="ti-plus"></i></a>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </>
                                ))

                            }
                        </div>
                    </div>
                </div>
                {/* <!-- Gallery Area End --> */}
            </main>
        </>
    )
}
