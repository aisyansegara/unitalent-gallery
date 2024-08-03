import React from "react";
import "./AboutUsContactSection.css";
import Container from "react-bootstrap/Container";

function AboutUsContactSection() {
    return(
    <div className='about-us-contact-section py-5 mt-5 position-relative'>
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className="row">
                <div className='col-md-4 z-2'>
                    <h2 className='text-start text-light text-capitalize fw-semibold'>Contact Us</h2>
                    <p className='text-start text-light'>If you have any questions or would like to get in touch, please contact us:</p>
                    <ul>
                        <li className='text-start text-light'>Email: <a className="text-light text-decoration-none" href="mailto:unitalent-gallery@gmail.com">unitalent_gallery@gmail.com</a></li>
                        <li className='text-start text-light'>Phone: <a className="text-light text-decoration-none" href="tel:+1234567890">+62 8213 214 589</a></li>
                        <li className='text-start text-light'>Address: Pahlawan Main St, Depok, Indonesia</li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
    )
}

export default AboutUsContactSection;