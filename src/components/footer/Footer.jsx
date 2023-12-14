import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer> 
            <div className="footer-area primary-bg pt-40">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3  col-lg-4  col-md-6  col-sm-12 col-12 pr-xl-0">
                                <div className="footer-widget f-adress pb-40 mt-25">
                                    <h6 className="text-capitalize f-700 mb-22">Kontakt</h6>
                                    <ul className="footer-address">
                                        <li className="d-flex align-items-start">
                                            <span className="f-icon mr-20 mt-1"><i className="fas fa-map-marker-alt"></i></span> 
                                            <div className="">
                                                Forststr. 13 <br/>73730 Esslingen am Neckar <br/>
                                            </div>  
                                        </li>
                                        <li>
                                            <span className="f-icon mr-20 mt-1"><i className="far fa-envelope"></i></span>
                                            office@fackler-it.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1  col-lg-2  col-md-3  col-sm-6 col-12">
                                <div className="footer-widget f-info pb-30 ml-40 pr-20 mt-25">
                                    <h6 className="text-capitalize f-700 mb-22">Links</h6>
                                    <ul className="footer-info">
                                        <li>
                                            <a href="index.html" className="position-relative d-inline-block mb-2">Home</a>
                                        </li>
                                        <li>
                                            <a href="#impressum" className="position-relative d-inline-block mb-2">Impressum</a>
                                        </li>
                                        <li>
                                            <a href="datenschutz" className="position-relative d-inline-block mb-2">Datenschutz</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12 mb-10">
                                <div className="f-logo text-center text-md-right">
                                    <img src="images/logo/white.svg" alt=""/>
                                    <p className="mb-0 primary-color">© 2023 Fackler IT UG (haftungsbeschränkt)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
