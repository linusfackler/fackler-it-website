import React from 'react'

export const Infrastructure = () => {
  return (
    <div>
        <div id="it-infrastruktur"></div>
        <div className="feature-area">
            <div className="feature-bg bg-no-repeat" data-aos="fade-up" data-aos-duration="1800" data-background="images/feature/home1-feature-bg.png">
                <div className="container">
                    <div className="row align-items-center flex-column-reverse flex-lg-row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pr-10">
                            <div className="feature-img img-left-margin text-center" data-aos="fade-right" data-aos-duration="2000">
                                <img className="d-block bounce-animate2 img-style" src="images/feature/infrastructure.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pl-lg-0 pl-xl-3 mt-10">
                            <div className="feature-content mb-10" data-aos="fade-left" data-aos-duration="2000">
                                <div className="title">
                                    <span className="theme-color f-700">IT-Infrastruktur</span>
                                    <h3 className="f-700 pb-30">Starke Grundlagen für Ihren digitalen Erfolg</h3>
                                    <p>Wir ermöglichen eine solide IT Infrastruktur für Sie, um in der digitalen Welt erfolgreich zu sein. Diese beinhalten:</p>
                                </div>
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
                </div>
            </div>
        </div>
    </div>
  )
}
