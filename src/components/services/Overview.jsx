import React from 'react'
import ICON1 from '../../assets/icon/solution.png'
import ICON2 from '../../assets/icon/code.png'
import ICON3 from '../../assets/icon/cloud.png'
import ICON4 from '../../assets/icon/infrastructure.png'
import ICON5 from '../../assets/icon/ai.png'
import ICON6 from '../../assets/icon/app-dev.png'
import { Link } from 'react-scroll';

export const Overview = () => {
  return (
    <div>
        <div className="service-area over-hidden">
            <div className="container">
                <div className="row test1">
                    <Link to="solution" smooth={true} duration={800} offset={-100} className="link col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                        <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up">
                            <div className="ser-icon d-inline-block text-center mb-20 transition5">
                                <img src={ICON1} alt=""/>
                            </div>
                            <div className="service-text">
                                <h6 className="f-700 mb-22">Solution Architektur</h6>
                                <p>Intelligente IT-Architekturen, perfekt abgestimmt auf Ihre Geschäftsziele.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="software" smooth={true} duration={800} offset={-50} className="link col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                        <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                <img src={ICON2} alt=""/>
                            </div>
                            <div className="service-text">
                                <h6 className="f-700 mb-22">Softwareentwicklung</h6>
                                <p>Innovative und effiziente Lösungen für alle Ihre Softwareprojekte.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="cloud" smooth={true} duration={800} offset={20} className="link col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                        <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                            <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                <img src={ICON3} alt=""/>
                            </div>
                            <div className="service-text">
                                <h6 className="f-700 mb-22">Cloud-Lösungen</h6>
                                <p>Maximieren Sie Flexibilität mit unseren maßgeschneiderten Cloud-Services.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="it-infrastruktur" smooth={true} duration={800} offset={-50} className="link col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                        <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                            <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                <img src={ICON4} alt=""/>
                            </div>
                            <div className="service-text">
                                <h6 className="f-700 mb-22">IT Infrastruktur</h6>
                                <p>Zuverlässige, starke und sichere Grundlagen für Ihren digitalen Erfolg.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="ki" smooth={true} duration={800} className="link col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                        <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                <img src={ICON5} alt=""/>
                            </div>
                            <div className="service-text">
                                <h6 className="f-700 mb-22">Künstliche Intelligenz</h6>
                                <p>Integration von KI/ML Algorithmen für Arbeitsoptimierung.</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="app-dev" smooth={true} duration={800} offset={-90} className="link col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                        <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                <img src={ICON6} alt=""/>
                            </div>
                            <div className="service-text">
                                <h6 className="f-700 mb-22">Mobile/Web Dev</h6>
                                <p>Erreichbarkeit auf jeder Platform, von Browser bis Handy mit elegantem UI.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
