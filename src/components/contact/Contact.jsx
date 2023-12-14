import React from 'react'
import IMG from '../../assets/contact/kontakt.png'

export const Contact = () => {
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
                                <form action="php/mail.php" method="POST" id="contact-form">
                                    <div className="contact-info text-md-center text-lg-left pt-20">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-15" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                                <input className="name w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 primary-font-family" type="text" name="inputName" id="inputName" placeholder="Name *" required/>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-15" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500">
                                                <input className="email w-100 theme-border pl-20 pt-15 pb-15 pr-10 form-color border-radius5 primary-font-family" type="email" name="inputEmail" id="inputEmail" placeholder="Email *" required/>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-15" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                                <input className="phone w-100 theme-border pl-20 pt-15 pb-15 pr-10" type="text" name="inputPhone" id="inputPhone" placeholder="Telefon" required/>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-15" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                                <textarea className="massage w-100 primary-border pl-20 pt-20" name="inputMessage" id="inputMessage" placeholder="Ihre Anfrage *" required></textarea>
                                            </div>
                                        </div>
                                        <div className="my-btn mt-40">
                                            <button className="btn theme-bg text-uppercase f-18 f-700" type="submit" name="submit" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500">Los geht's</button>
                                        </div>
                                    </div>
                                </form>
                                <p className="form-message mt-20"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 col-12 pr-10">
                        <div className="faq-img img-right-margin text-center"  data-aos="fade-left" data-aos-duration="2000">
                            <img className="d-block bounce-animate2" src={IMG} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
