import React from 'react'
import IMG from '../../assets/services/architektur.png'
import { Link } from 'react-scroll';

export const Solution = () => {
  return (
    <div>
        <div id="solution"></div>
        <div className="about-area pt-95 mb-80">
            <div className="container">
                <div className="row align-items-center  flex-column-reverse flex-lg-row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-img img-left-margin text-center" data-aos="fade-right" data-aos-duration="2000">
                            <img className="d-block bounce-animate2 img-style" src={IMG} alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-content mb-50 mt-10" data-aos="fade-left" data-aos-duration="2000"> 
                            <div className="title">
                                <span className="theme-color f-700">Solution Architektur</span>
                                <h3 className="f-700">Maßgeschneiderter IT-Erfolg</h3>
                            </div>
                            <div className="about-text mt-55 ">
                                <h6 className="f-400 mb-30">Wir verwandeln Ihre Geschäftsziele und technischen Bedürfnisse in optimierte IT-Lösungen.</h6>
                                <p>Wir gestalten robuste, skalierbare und zukunftssichere IT-Architekturen, die nicht nur heutige Herausforderungen meistern, sondern auch Raum für morgen bieten.</p>
                                <div className="my-btn mt-47">
                                    <Link to="kontakt" smooth={true} duration={1000} style={{ color: 'white' }} className="link btn theme-bg text-capitalize f-18 f-700">Los Geht's</Link>
                                    <div id="service"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
