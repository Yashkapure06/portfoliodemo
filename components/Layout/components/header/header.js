import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container">
                    <Link href="/">
                    <a className="navbar-brand"><i className='uil uil-user'></i> Yash</a>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link href="/">
                                <a className="nav-link"><span data-hover="About">About</span></a>
                                </Link>
                            </li>
                            <hr/>
                            <li className="nav-item">
                                <Link href="/projects">
                                <a className="nav-link"><span data-hover="Projects">Projects</span></a>
                                </Link>
                            </li>
                            <hr/>
                            <li className="nav-item">
                                <Link href="/resume">
                                <a className="nav-link"><span data-hover="Resume">Resume</span></a>
                                </Link>
                            </li>
                            <hr/>
                            <li className="nav-item">
                                <Link href="/contact">
                                <a className="nav-link"><span data-hover="Contact">Contact</span></a>
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-lg-auto">
                            <div className="ml-lg-4">
                            <div className="color-mode d-lg-flex justify-content-center align-items-center">
                                <i className="color-mode-icon"></i>
                                Color mode
                            </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
