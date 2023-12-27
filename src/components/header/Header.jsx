import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom'
import LOGO from '../../assets/logo/logo.svg'

export const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 2);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header id="header-sticky" className={`${isSticky ? 'sticky-menu' : ''}`}>
                <div id="header-sticky" className="transparent-header header-area">
                    <div className="header">
                        <div className="container">
                            <div className="row align-items-center justify-content-between position-relative">
                                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-5 col-6">
                                    <div className="logo">
                                        {isHomePage ? (
                                            <Link to="home" smooth={true} duration={800} className="link d-block"><img src={LOGO} alt=""/></Link>
                                            ) : (
                                            <a href="/" className="link d-block"><img src={LOGO} alt=""/></a>
                                        )}
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-1 col-sm-1 col-1 d-none d-lg-flex justify-content-end position-static">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            {isHomePage ? (
                                            <ul className="d-block">
                                                <li className="full-mega-menu-position"><Link to="home" smooth={true} duration={800} className="link active">Home</Link></li>
                                                <li><Link to="service" smooth={true} duration={800} offset={60} className='link'>Service</Link></li>
                                                <li><Link to="unser-team" smooth={true} duration={800} className='link'>Über Uns</Link></li>
                                                <li><Link to="kontakt" smooth={true} duration={800} offset={-70} className='link'>Kontakt</Link></li>
                                            </ul>
                                            ) : (
                                            <ul className="d-block">
                                                <li className="full-mega-menu-position"><a href="./" className="link">Home</a></li>
                                                <li><a href="./" className='link link-service'>Service</a></li>
                                                <li><a href="./" className='link link-team'>Über Uns</a></li>
                                                <li><a href="./" className='link link-kontakt'>Kontakt</a></li>
                                            </ul>
                                            )}
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-4  col-lg-4 col-md-6 col-sm-6 col-4 pl-lg-0 pl-xl-3">
                                    <div className="header-right d-flex align-items-center justify-content-lg-between justify-content-end">
                                        <div className="d-block d-lg-none pl-20">
                                            <a className="mobile-menubar theme-color" onClick={toggleMobileMenu}><i className="far fa-bars"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        <div className={`side-mobile-menu white-bg pt-10 pb-30 pl-35 pr-30 pb-100 ${isMobileMenuOpen ? 'open-menubar' : ''}`}>
            <div className="d-fle justify-content-between w-100">
                <div className="close-icon d-inline-block float-right clear-both mt-15 mb-10">
                    <a><span className="icon-clear theme-color" onClick={closeMobileMenu}><i className="fa fa-times"></i></span></a>
                </div>
            </div>
            <div className="mobile-menu-style mt-10 w-100">
                {isHomePage ? (
                    <ul className="d-block">
                        <li className="full-mega-menu-position"><Link to="home" smooth={true} duration={800} className="link active" onClick={closeMobileMenu}>Home</Link></li>
                        <li><Link to="service" smooth={true} duration={800} offset={500} className='link' onClick={closeMobileMenu}>Service</Link></li>
                        <li><Link to="unser-team" smooth={true} duration={800} className='link' onClick={closeMobileMenu}>Über Uns</Link></li>
                        <li><Link to="kontakt" smooth={true} duration={800} offset={-70} className='link' onClick={closeMobileMenu}>Kontakt</Link></li>
                    </ul>
                ) : (
                    <ul className="d-block">
                        <li className="full-mega-menu-position"><a href="/" className="link active" onClick={closeMobileMenu}>Home</a></li>
                        <li><a href="/" className='link' onClick={closeMobileMenu}>Service</a></li>
                        <li><a href="/" className='link' onClick={closeMobileMenu}>Über Uns</a></li>
                        <li><a href="/" className='link' onClick={closeMobileMenu}>Kontakt</a></li>
                    </ul>
                    )}
            </div>
            <ul className="social-link pt-50 clear-both">
                <li className="d-inline-block">
                    <a className="linked-in-color text-center d-inline-block transition-3" href="https://www.linkedin.com/company/fackler-it/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </li>
            </ul>
        </div>
        <div className={`body-overlay ${isMobileMenuOpen ? 'opened' : ''}`} onClick={closeMobileMenu}></div>
        </div>
    )
}