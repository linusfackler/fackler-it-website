import React, { useState, useRef} from 'react'
import IMG from '../../assets/contact/kontakt.png'
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jz37m57', 'template_g2bhzm7', form.current, 'ptoa8d7FLk_mGlCrD')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

  return (
    <div>
        <div id="kontakt"></div>
        <div className="faq-area pt-30 mb-70"  data-aos="fade-right" data-aos-duration="2000">
            <div className="container">
                <div className="row mt-10">
                    <div className="col-xl-6 col-lg-7 col-md-12  col-sm-12 col-12">
                        <div className="contact-wrapper">
                            <div className="contact-form">
                                <div className="title px-md-5 px-lg-0 text-md-center text-lg-left">
                                    <h3 className="f-700 mb-40">Nur eine Nachricht entfernt.</h3>
                                    <p className="mb-20">Wir freuen uns!</p>
                                </div>
                                {emailSent ? (
                                        <div className="email-sent-confirmation">
                                            <h6 className="f-700 mb-60 text-md-center text-lg-left">Vielen Dank für Ihre Nachricht! Wir melden uns.</h6>
                                        </div>
                                    ) : (
                                    <form ref={form} onSubmit={sendEmail} id="contact-form">
                                        <div className="contact-info text-md-center text-lg-left pt-20">
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-15" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                                    <input className="name w-100 primary-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 primary-font-family" type="text" name="inputName" id="inputName" placeholder="Name *" required/>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-15" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500">
                                                    <input className="email w-100 primary-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 primary-font-family" type="email" name="inputEmail" id="inputEmail" placeholder="Email *" required/>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-15" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                                    <input className="phone w-100 primary-border pl-20 pt-15 pb-15 pr-10" type="text" name="inputPhone" id="inputPhone" placeholder="Telefon"/>
                                                </div>
                                            </div>
                                            <div className="row ">
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-15" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                                    <textarea className="massage w-100 primary-border pl-20 pt-20" name="inputMessage" id="inputMessage" placeholder="Ihre Anfrage *" required></textarea>
                                                </div>
                                            </div>
                                            <div className="my-btn mt-15">
                                                <button className="btn theme-bg text-uppercase f-18 f-700" type="submit" name="submit" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500">Los geht's</button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 col-12 pr-10">
                        <div className="faq-img img-right-margin text-center"  data-aos="fade-left" data-aos-duration="2000">
                            <img className="d-block bounce-animate2 img-style contact-image" src={IMG} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
