import React from 'react'
import IMG from '../../assets/services/software.png'
import SHAPE from '../../assets/services/shape2.png'

export const Software = () => {
  return (
    <div>
        <div id="software"></div>
        <div className="feature-area">
            <div className="feature-bg bg-no-repeat" data-aos="fade-up" data-aos-duration="1800" data-background={SHAPE}>
                <div className="container">
                    <div className="row align-items-center flex-column-reverse flex-lg-row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pr-10">
                            <div className="feature-img img-left-margin text-center" data-aos="fade-right" data-aos-duration="2000">
                                <img className="d-block bounce-animate2 img-style" src={IMG} alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pl-lg-0 pl-xl-3 mt-10">
                            <div className="feature-content mb-10" data-aos="fade-left" data-aos-duration="2000">
                                <div className="title">
                                    <span className="theme-color f-700">Softwareentwicklung</span>
                                    <h3 className="f-700 pb-30">Flexible Lösungen für jedes Projekt</h3>
                                    <p>Unser Ansatz in der Softwareentwicklung ist so vielseitig wie Ihre Anforderungen. Egal ob...</p>
                                </div>
                                <div className="feature-text mt-30">
                                    <div className="row">
                                        <div className="col-xl-6  col-lg-6 col-md-6  col-sm-6 col-12">
                                            <div className="single-feature-service mb-22">
                                                <div className="feature-ser-heading d-flex align-items-center mb-1">
                                                    <div className="feature-ser-icon d-inline-block text-center mr-15">
                                                        <span className="theme-color d-block">
                                                            <span className="flat-family flaticon-032-monitor"></span>
                                                        </span>
                                                    </div>
                                                    <h6 className="f-700 mb-0">Neuste Technologien</h6>
                                                </div>
                                                <p>Wir integrieren die neuesten technologischen Innovationen in Ihre Projekte</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6  col-lg-6 col-md-6  col-sm-6 col-12">
                                            <div className="single-feature-service mb-22">
                                                <div className="feature-ser-heading d-flex align-items-center mb-1">
                                                    <div className="feature-ser-icon d-inline-block text-center mr-15">
                                                        <span className="theme-color d-block">
                                                            <span className="flat-family flaticon-047-map"></span>
                                                        </span>
                                                    </div>
                                                    <h6 className="f-700 mb-0">Langfristige Projektbetreuung</h6>
                                                </div>
                                                <p>Begleitung über den gesamten Lebenszyklus Ihrer Software</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6  col-lg-6 col-md-6  col-sm-6 col-12">
                                            <div className="single-feature-service mb-22">
                                                <div className="feature-ser-heading d-flex align-items-center mb-1">
                                                    <div className="feature-ser-icon d-inline-block text-center mr-15">
                                                        <span className="theme-color d-block">
                                                            <span className="flat-family flaticon-063-fast-forward"></span>
                                                        </span>
                                                    </div>
                                                    <h6 className="f-700 mb-0">Flexible Kurzprojekte</h6>
                                                </div>
                                                <p>Schnelle Entwicklungszyklen, um dringendste Anforderungen zu erfüllen</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-6  col-lg-6 col-md-6  col-sm-6 col-12">
                                            <div className="single-feature-service mb-22">
                                                <div className="feature-ser-heading d-flex align-items-center mb-1">
                                                    <div className="feature-ser-icon d-inline-block text-center mr-15">
                                                        <span className="theme-color d-block">
                                                            <span className="flat-family flaticon-072-inbox"></span>
                                                        </span>
                                                    </div>
                                                    <h6 className="f-700 mb-0">Bestehende Projekte</h6>
                                                </div>
                                                <p>Unterstützung bei bereits laufenden Projekten</p>
                                            </div>
                                        </div>
                                    </div>
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
