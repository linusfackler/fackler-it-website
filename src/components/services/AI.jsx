import React from 'react'
import IMG from '../../assets/services/ki.png'
import SHAPE from '../../assets/services/shape1.png'

export const AI = () => {
  return (
    <div>
        <div id="ki"></div>
        <div className="sp-feature-area over-hidden">
            <div className="sp-feature-bg feature-bg bg-no-repeat pb-95" data-aos="fade-up" data-aos-duration="1800" style={{ backgroundImage: `url(${SHAPE})` }}>
                <div className="container">
                    <div className="row align-items-center mt-10">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="sp-feature-content pr-xl-2 mb-10 mt-45" data-aos="fade-right" data-aos-duration="2000">
                                <div className="title">
                                    <span className="theme-color f-700">Künstliche Intelligenz</span>
                                    <h3 className="f-700 pb-30">Intelligente Lösungen für die Zukunft</h3>
                                    <p>Tauchen Sie ein in die Welt der Künstlichen Intelligenz mit unseren maßgeschneiderten Lösungen, die Ihre Daten in wertvolle Einblicke und automatisierte Prozesse verwandeln.</p>
                                    <ul className="sp-feature-text mt-30">
                                    <li className="d-flex">
                                        <span className="sp-feature-icon theme-color d-inline-block mr-20"><i className="fal fa-check"></i></span>
                                        <p>Zuverlässigkeit: Sichere und beständige Systeme</p>
                                    </li>
                                    <li className="d-flex">
                                        <span className="sp-feature-icon theme-color d-inline-block mr-20"><i className="fal fa-check"></i></span>
                                        <p>Skalierbarkeit: Wachstum ohne Grenzen</p>
                                    </li>
                                    <li className="d-flex">
                                        <span className="sp-feature-icon theme-color d-inline-block mr-20"><i className="fal fa-check"></i></span>
                                        <p>Sicherheit: Fortschrittlicher Schutz für Ihre Daten</p>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="feature-img img-right-margin mt-35 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="2000">
                                <img className="d-block ml-lg-auto bounce-animate2 img-style" src={IMG} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
