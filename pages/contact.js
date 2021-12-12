import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="contact py-5" id="contact">
                <div className="container">
                    <div className="row">
                    
                    <div className="col-lg-5 mr-lg-5 col-12">
                        <div className="google-map w-100">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0456731253807!2d73.76781641488698!3d19.96458138658434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb1601c4135f%3A0xd079091f222954dc!2sRadheshyam%20Residency!5e0!3m2!1sen!2sin!4v1638646150314!5m2!1sen!2sin" width="600" height="450"  style={{border:"0"}}loading="lazy"></iframe>
                        </div>

                        <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                            <div className="contact-info-item">
                            <h3 className="mb-3 text-white">Say hello</h3>
                            <p className="footer-text mb-0">7028073007</p>
                            <p><a href="mailto:yashkapure06@gmail.com">test@gmail.com</a></p>
                            </div>

                            <ul className="social-links">
                                <li><a href="#" className="uil uil-dribbble" data-toggle="tooltip" data-placement="left" title="Dribbble"></a></li>
                                <li><a href="#" className="uil uil-instagram" data-toggle="tooltip" data-placement="left" title="Instagram"></a></li>
                                <li><a href="#" className="uil uil-youtube" data-toggle="tooltip" data-placement="left" title="Youtube"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="contact-form">
                        <h2 className="mb-4">Interested to work together? Lets talk</h2>

                        <form action="mailto:yashkapure06@gmail.com" method="get">
                            <div className="row">
                            <div className="col-lg-6 col-12">
                                <input type="text" className="form-control" name="name" placeholder="Your Name" id="name"/>
                            </div>

                            <div className="col-lg-6 col-12">
                                <input type="email" className="form-control" name="email" placeholder="Email" id="email"/>
                            </div>

                            <div className="col-12">
                                <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message"></textarea>
                            </div>

                            <div className="ml-lg-auto col-lg-5 col-12">
                                <input type="submit" className="form-control submit-btn" value="Send Button"/>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;