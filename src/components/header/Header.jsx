import React from 'react'

export const Header = () => {
    
    function handleClick(event) {
        event.preventDefault();
    }

    return (
        <div>
            <header>
            <div id="header-sticky" className="transparent-header header-area">
                <div className="header">
                    <div className="container">
                        <div className="row align-items-center justify-content-between position-relative">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6">
                                <div className="logo">
                                    <a href="index.html" className="d-block"><img src="images/logo/logo.svg"/></a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-1 col-sm-1 col-1 d-none d-lg-flex justify-content-end position-static">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul className="d-block">
                                            <li className="full-mega-menu-position"><a className="active" href="#hallo">Home</a></li>
                                            <li><a href="#service">Service</a></li>
                                            <li><a href="#unser-team">Über Uns</a></li>
                                            <li><a href="#kontakt">Kontakt</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-4  col-lg-4 col-md-6 col-sm-6 col-4 pl-lg-0 pl-xl-3">
                                <div className="header-right d-flex align-items-center justify-content-lg-between justify-content-end">
                                    <div className="d-block d-lg-none pl-20">
                                        <a className="mobile-menubar theme-color" onClick={handleClick}><i className="far fa-bars"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="side-mobile-menu white-bg pt-10 pb-30 pl-35 pr-30 pb-100">
            <div className="d-fle justify-content-between w-100">
                <div className="close-icon d-inline-block float-right clear-both mt-15 mb-10">
                    <a onClick={handleClick}><span className="icon-clear theme-color"><i className="fa fa-times"></i></span></a>
                </div>
            </div>
            <div className="mobile-menu mt-10 w-100"></div>
            <ul className="social-link pt-50 clear-both">
                <li className="d-inline-block">
                    <a className="linked-in-color text-center d-inline-block transition-3" href="https://www.linkedin.com/company/fackler-it/"><i className="fab fa-linkedin-in"></i></a>
                </li>
            </ul>
        </div>
        <div className="body-overlay"></div>
        </div>
    )
}
