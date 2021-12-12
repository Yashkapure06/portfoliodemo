import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text">
                                <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
                                <h1 className="animated animated-text">
                                    <span className="mr-2">Hey folks, I am</span>
                                        <div className="animated-info">
                                            <span className="animated-item">Yash Kapure</span>
                                            <span className="animated-item">Web Designer</span>
                                            <span className="animated-item">UI/UX</span>
                                        </div>
                                </h1>

                                <p>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.
                                I also love to learn new things.
                                A Tea 🍵 Lover and sometimes coffee☕.
                                The Sport I love is Cricket🏏.
                                </p>
                                
                                <div className="custom-btn-group mt-4">
                                <Link href="https://drive.google.com/file/d/1DD6JVT0a0SYXaEU-sjip1II41VLRuTop/view?usp=sharing" target="_blank">
                                <a className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a>
                                </Link>
                                <Link href="/contact">
                                <a className="btn custom-btn custom-btn-bg custom-btn-link">Connect with me</a>
                                </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="about-image svg">
                                <img src="images/undraw/undraw_software_engineer_lvl5.svg" className="img-fluid" alt="svg image"/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;
