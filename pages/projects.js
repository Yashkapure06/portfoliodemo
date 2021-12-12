import React from 'react';
import Image from 'next/image';

const Projects = () => {
    return (
        <>
            <section className="project py-5" id="project">
                <div className="container">
                        
                        <div className="row">
                        <div className="col-lg-11 text-center mx-auto col-12">

                            <div className="col-lg-8 mx-auto">
                            <br/><br/><br/><br/>
                                <h2>Things I have Leant and Applied.</h2>
                            </div>

                            <div className=" owl-theme">
                                <div className="item">
                                    <div className="project-info">
                                        <img src="images/project/project-image01.png" className="img-fluid" alt="project image"/>
                                        
                                    </div>
                                </div>
                                    <br/>
                                <div className="item">
                                    <div className="project-info">
                                        <img src="images/project/project-image02.png" className="img-fluid" alt="project image"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="item">
                                    <div className="project-info">
                                        <img src="images/project/project-image03.png" className="img-fluid" alt="project image"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="item">
                                    <div className="project-info">
                                        <img src="images/project/project-image04.png" className="img-fluid" alt="project image"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="item">
                                    <div className="project-info">
                                        <img src="images/project/project-image05.png" className="img-fluid" alt="project image"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="item">
                                    <div className="project-info">
                                        <img src="images/project/project-image06.png" className="img-fluid" alt="project image"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="item">
                                    <div className="project-info">
                                        <img src="images/project/project-image07.png" className="img-fluid" alt="project image"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
