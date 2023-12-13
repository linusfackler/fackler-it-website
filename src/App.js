import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  function handleClick(event) {
    event.preventDefault();
  }

  useEffect(() => {
    // AOS initialization
    if (window.AOS) {
      window.AOS.init({
        // settings, if any
      });
      console.log('AOS Initialized');
    }

    // Optional: to handle cleanup
    return () => {
      if (window.AOS) {
        window.AOS.refresh();
      }
    };
  }, []);
  
  return (
    <div>
      {/* ====== preloader=============================================*/}
      <div id="preloader">
          <div id="loading">
              <div id="loading-center">
                  <div id="loading-center-absolute">
                      <div className="object" id="object_one"></div>
                      <div className="object" id="object_two"></div>
                      <div className="object" id="object_three"></div>
                  </div>
              </div>
          </div>
      </div>

      {/* ====== header-area-start======================================= */}
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
      {/* header-area-end */}

      {/* ====== header extra info start================================== */}
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
      {/* header extra info end */}


      <main>
          {/* ======slider-area-start=========================================== */}
          <div id="hallo"></div>
          <div className="slider-area position-relative">
              <div className="single-slider slider-height1 container-wrapper d-flex align-items-center z-index1" data-background="../public/images/slider/home1-slider-bg.png">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12  d-flex align-items-center">
                              <div className="slider-content mt--30 position-relative">
                                  <h1 className="f-700 pb-22" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="150">SOFTWARE.<br/>SERVICE.<br/>SOLUTIONS.<br/>KI.</h1>

                                  <h1 className="f-700 theme-color pb-22" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="150">IN 0711.</h1>

                                  <p data-aos="fade-right" data-aos-duration="2000">IT direkt aus Esslingen/Stuttgart</p>
                              </div>
                          </div>
                          <div className="col-xl-6 col-lg-6  col-md-6  col-sm-12 col-12  d-flex align-items-center ">
                              <div className="slider-img1 mt-25 pl-65 z-index1 position-relative">
                                  <img className="bounce-animate img-style" src="images/slider/home.png" alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* slider-area-end */}

          {/* ====== brand-area-start=============================================== */}
          <div className="brand-area brand-height over-hidden">
              <div className="container">
                  <div className="row">
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                          <div className="row align-items-center justify-content-center">
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src="images/brand/infosys.png" alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src="images/brand/wipro.png" alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src="images/brand/daimler.png" alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src="images/brand/to.svg" alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src="images/brand/streetside.png" alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src="images/brand/cellent.png" alt=""/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* brand-area-end */}

          {/* ====== Solution Architektur =========================================== */}
          <div id="solution"></div>
          <div className="about-area mt-75 mb-80">
              <div className="container">
                  <div className="row align-items-center  flex-column-reverse flex-lg-row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-img img-left-margin text-center" data-aos="fade-right" data-aos-duration="2000">
                              <img className="d-block bounce-animate2 img-style" src="images/about/architektur.png" alt=""/>
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
                                      <a href="about-us.html" className="btn theme-bg text-capitalize f-18 f-700">Get Started</a>
                                      <div id="service"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Solution Architektur */}

          {/* ====== Service ==================================== */}
          <div className="service-area over-hidden">
              <div className="container">
                  <div className="row test1">
                      <a href="#solution" className="col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                          <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up">
                              <div className="ser-icon d-inline-block text-center mb-20 transition5">
                                  <img src="images/icon/solution.png" alt=""/>
                              </div>
                              <div className="service-text">
                                  <h6 className="f-700 mb-22">Solution Architektur</h6>
                                  <p>Intelligente IT-Architekturen, perfekt abgestimmt auf Ihre Geschäftsziele.</p>
                              </div>
                          </div>
                      </a>
                      <a href="#software"  className="col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                          <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                              <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                  <img src="images/icon/code.png" alt=""/>
                              </div>
                              <div className="service-text">
                                  <h6 className="f-700 mb-22">Softwareentwicklung</h6>
                                  <p>Innovative und effiziente Lösungen für alle Ihre Softwareprojekte.</p>
                              </div>
                          </div>
                      </a>
                      <a href="#cloud"  className="col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                          <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                              <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                  <img src="images/icon/cloud.png" alt=""/>
                              </div>
                              <div className="service-text">
                                  <h6 className="f-700 mb-22">Cloud-Lösungen</h6>
                                  <p>Maximieren Sie Flexibilität mit unseren maßgeschneiderten Cloud-Services.</p>
                              </div>
                          </div>
                      </a>
                      <a href="#it-infrastruktur"  className="col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                          <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
                              <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                  <img src="images/icon/infrastructure.png" alt=""/>
                              </div>
                              <div className="service-text">
                                  <h6 className="f-700 mb-22">IT Infrastruktur</h6>
                                  <p>Zuverlässige, starke und sichere Grundlagen für Ihren digitalen Erfolg.</p>
                              </div>
                          </div>
                      </a>
                      <a href="#ki"  className="col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                          <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                              <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                  <img src="images/icon/ai.png" alt=""/>
                              </div>
                              <div className="service-text">
                                  <h6 className="f-700 mb-22">Künstliche Intelligenz</h6>
                                  <p>Integration von KI/ML Algorithmen für Arbeitsoptimierung.</p>
                              </div>
                          </div>
                      </a>
                      <a href="#app-dev"  className="col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12">
                          <div className="single-service-content transition5 mt-10 secondary-border01 pl-50 pt-55 pb-35 pr-50 mb-35 mt-30 tilt" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                              <div className="ser-icon d-inline-block text-center mb-20  transition5">
                                  <img src="images/icon/app-dev.png" alt=""/>
                              </div>
                              <div className="service-text">
                                  <h6 className="f-700 mb-22">Mobile/Web Dev</h6>
                                  <p>Erreichbarkeit auf jeder Platform, von Browser bis Handy.</p>
                              </div>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
          {/* Service */}

          {/* ====== Softwareentwicklung =========================================== */}
          <div id="software"></div>
          <div className="feature-area">
              <div className="feature-bg bg-no-repeat" data-aos="fade-up" data-aos-duration="1800" data-background="images/feature/home1-feature-bg.png">
                  <div className="container">
                      <div className="row align-items-center flex-column-reverse flex-lg-row">
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pr-10">
                              <div className="feature-img img-left-margin text-center" data-aos="fade-right" data-aos-duration="2000">
                                  <img className="d-block bounce-animate2 img-style" src="images/feature/software.png" alt=""/>
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
          {/* Softwareentwicklung */}

          {/* ====== Unser Team =========================================== */}
          <div id="unser-team"></div>
          <div className="our-team-area about-us-team">
              <div className="bg-no-repeat pt-85" data-aos="fade-up" data-aos-duration="2000">
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-xl-6  col-lg-7  col-md-9  col-sm-12 col-12">
                              <div className="title text-center">
                                  <span className="theme-color f-700">Triff die Facklers</span>
                                  <h4 className="f-700 mb-30">Unser Team</h4>
                                      <p>Eine bunte Truppe von Tech-Enthusiasten, die Code lieber als Kaffee zum Frühstück haben. Wir kombinieren Kreativität mit Expertise – und das immer mit einem Augenzwinkern.</p>
                              </div>
                          </div>
                      </div>
                      <div className="row our-team-wrapper-margin pt-55">
                          <a href="https://www.linkedin.com/in/raimundfackler/" target="_blank" className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                              <div className="our-team-wrapper position-relative mb-40">
                                  <div className="single-team-img position-relative z-index1">
                                      <img className="w-100" src="images/team/raimund.jpeg" alt=""/>
                                  </div>
                                  <div className="our-team-info transition5 position-absolute left-0 right-0 white-bg pl-25 pt-90 pb-15 pr-25">
                                      <span className="secondary-color">Geschäftsführer</span>
                                      <h3 className="mt-1 f-700">Raimund Fackler</h3>
                                  </div>
                              </div>
                          </a>
                          <a href="https://www.linkedin.com/in/lukasfackler/" target="_blank" className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                              <div className="our-team-wrapper position-relative mb-40">
                                  <div className="single-team-img position-relative z-index1">
                                      <img className="w-100" src="images/team/lukas.jpg" alt=""/>
                                  </div>
                                  <div className="our-team-info transition5 position-absolute left-0 right-0 white-bg pl-25 pt-90 pb-15 pr-25">
                                      <span className="secondary-color">Finanzvorstand</span>
                                      <h3 className="mt-1 f-700">Lukas Fackler</h3>
                                  </div>
                              </div>
                          </a>
                          <a href="https://www.linkedin.com/in/linusfackler/" target="_blank" className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                              <div className="our-team-wrapper position-relative mb-40">
                                  <div className="single-team-img position-relative z-index1">
                                      <img className="w-100" src="images/team/linus.jpeg" alt=""/>
                                  </div>
                                  <div className="our-team-info transition5 position-absolute left-0 right-0 white-bg pl-25 pt-90 pb-15 pr-25">
                                      <span className="secondary-color">Projektleiter</span>
                                      <h3 className="mt-1 f-700">Linus Fackler</h3>
                                  </div>
                              </div>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          {/* Unser Team */}

          {/* ====== Cloud Lösungen ============================================ */}
          <div id="cloud"></div>
          <div className="faq-area pt-130 mb-70 over-hidden">
              <div className="container">
                  <div className="row mt-10">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="faq-content mb-50" data-aos="fade-right" data-aos-duration="2000">
                              <div className="title">
                                  <span className="theme-color f-700">Cloud-Lösungen</span>
                                  <h3 className="f-700 pb-30">Flexibilität und Effizienz in der Cloud</h3>
                                  <p>Nutzen Sie die volle Kraft der Cloud-Technologie für mehr Agilität und Skalierbarkeit in Ihrem Unternehmen.</p>
                              </div>
                              <div className="faq-wrapper mt-40">
                                  <div className="accordion" id="accordionExample">
                                      <div className="card border-0">
                                          <div className="card-header card-header-top rounded-0 bg-transparent p-0" id="headingOne">
                                              <h6 className="mb-0">
                                                  <a href="#" className="btn btn-link black-color f-700 border-0 d-block text-left rounded-0 position-relative" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                      Warum ist Cloud Computing oft kostengünstiger als herkömmliche Vor-Ort-Lösungen?"
                                                  </a>
                                              </h6>
                                          </div>
                                          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                              <div className="card-body">
                                                  <p className="m-0">Cloud Computing reduziert Investitionen in teure Hardware und Wartung. Sie zahlen nur für die Ressourcen, die Sie tatsächlich nutzen, was zu einer effizienteren Kostenstruktur führt und Ihnen ermöglicht, Budgets flexibler zu planen.</p>
                                              </div>
                                          </div>
                                      </div>
      
                                      <div className="card border-0">
                                          <div className="card-header bg-transparent p-0" id="headingTwo">
                                              <h6 className="mb-0">
                                                  <a href="#" className="btn btn-link black-color f-700 border-0 d-block text-left rounded-0 position-relative collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                      Warum ist Cloud Computing skalierbarer?
                                                  </a>
                                              </h6>
                                          </div>
      
                                          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                              <div className="card-body">
                                                  <p className="m-0">Cloud Computing ermöglicht es, Ressourcen wie Speicherplatz und Rechenleistung je nach Bedarf flexibel zu erhöhen oder zu reduzieren, ohne physische Hardware erweitern zu müssen.</p>
                                              </div>
                                          </div>
                                      </div>
      
                                      <div className="card card-header-end border-0">
                                          <div className="card-header bg-transparent p-0" id="headingThree">
                                              <h6 className="mb-0">
                                                  <a href="#" className="btn btn-link black-color f-700 border-0 d-block text-left rounded-0 position-relative collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                      Wie verbessert Cloud Computing die Datensicherheit?
                                                  </a>
                                              </h6>
                                          </div>
      
                                          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                              <div className="card-body">
                                                  <p className="m-0">Durch fortgeschrittene Verschlüsselungsmethoden und regelmäßige Sicherheitsupdates schützt Cloud Computing Ihre Daten effektiver vor Cyberangriffen und Datenverlust.</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 col-12 pr-10">
                          <div className="faq-img img-right-margin text-center"  data-aos="fade-left" data-aos-duration="2000">
                              <img className="d-block bounce-animate2" src="images/feature/cloud.png" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Cloud Lösungen */}

          {/* ====== IT-Infrastruktur =========================================== */}
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
          {/* IT-Infrastruktur */}

          {/* ====== Künstliche Intelligenz ================================================= */}
          <div id="ki"></div>
          <div className="sp-feature-area over-hidden">
              <div className="sp-feature-bg feature-bg bg-no-repeat pb-95" data-aos="fade-up" data-aos-duration="1800" data-background="images/feature/home1-sp-feature-bg.png">
                  <div className="container">
                      <div className="row align-items-center mt-10">
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                              <div className="sp-feature-content pr-xl-2 mb-10 mt-45" data-aos="fade-right" data-aos-duration="2000">
                                  <div className="title">
                                      <span className="theme-color f-700">Künstliche Intelligenz</span>
                                      <h3 className="f-700 pb-30">Starke Grundlagen für Ihren digitalen Erfolg</h3>
                                      <p>Tauchen Sie ein in die Welt der Künstlichen Intelligenz mit unseren maßgeschneiderten Lösungen, die Ihre Daten in wertvolle Einblicke und automatisierte Prozesse verwandeln.
                                          TODO: Liste mit LLM, Automatisierung, ...
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                              <div className="feature-img img-right-margin mt-35 d-flex justify-content-center" data-aos="fade-left" data-aos-duration="2000">
                                  <img className="d-block ml-lg-auto bounce-animate2 img-style" src="images/feature/ki.png" alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Künstliche Intelligenz */}

          {/* ====== app-dev =========================================== */}
          <div id="app-dev"></div>
          <div className="about-area mt-75 mb-80">
              <div className="container">
                  <div className="row align-items-center  flex-column-reverse flex-lg-row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-img img-left-margin text-center" data-aos="fade-right" data-aos-duration="2000">
                              <img className="d-block bounce-animate2 img-style" src="images/feature/app-dev.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="about-content mb-50 mt-10" data-aos="fade-left" data-aos-duration="2000"> 
                              <div className="title">
                                  <span className="theme-color f-700">Mobile/Web Development</span>
                                  <h3 className="f-700">Ihre digitale Präsenz, neu definiert</h3>
                              </div>
                              <div className="about-text mt-55 ">
                                  <h6 className="f-400 mb-30">Wir entwickeln benutzerfreundliche und innovative mobile und Web-Anwendungen, die nicht nur ansprechend aussehen, sondern auch nahtlos funktionieren – für ein optimales Nutzererlebnis auf jedem Gerät.</h6>
                                  <div className="feature-text mt-30">
                                      <div className="row">
                                          <div className="col-xl-6  col-lg-6 col-md-6  col-sm-6 col-12">
                                              <div className="single-feature-service mb-22">
                                                  <div className="feature-ser-heading d-flex align-items-center mb-1">
                                                      <div className="mobile-dev-icon d-inline-block text-center mb-10 transition5">
                                                          <img src="images/icon/apple.png" alt=""/>
                                                      </div>
                                                      <h6 className="f-700 mb-0">iOS App Entwicklung</h6>
                                                  </div>
                                                  <p>Elegante, benutzerfreundliche iOS-Apps, die begeistern.</p>
                                              </div>
                                          </div>
                                          <div className="col-xl-6  col-lg-6 col-md-6  col-sm-6 col-12">
                                              <div className="single-feature-service mb-22">
                                                  <div className="feature-ser-heading d-flex align-items-center mb-1">
                                                      <div className="mobile-dev-icon d-inline-block text-center mb-10 transition5">
                                                          <img src="images/icon/android2.png" alt=""/>
                                                      </div>
                                                      <h6 className="f-700 mb-0">Android Entwicklung</h6>
                                                  </div>
                                                  <p>Innovative, intuitive Android-Apps, optimiert für Performance.</p>
                                              </div>
                                          </div>
                                          <div className="col-xl-6  col-lg-6 col-md-6  col-sm-6 col-12">
                                              <div className="single-feature-service mb-22">
                                                  <div className="feature-ser-heading d-flex align-items-center mb-1">
                                                      <div className="mobile-dev-icon d-inline-block text-center mb-10 transition5">
                                                          <img src="images/icon/cross-platform.png" alt=""/>
                                                      </div>
                                                      <h6 className="f-700 mb-0">Cross-Platform Apps</h6>
                                                  </div>
                                                  <p>Nahtlose Konvertierung zwischen Android und iOS.</p>
                                              </div>
                                          </div>
                                          <div className="col-xl-6  col-lg-6 col-md-6  col-sm-6 col-12">
                                              <div className="single-feature-service mb-22">
                                                  <div className="feature-ser-heading d-flex align-items-center mb-1">
                                                      <div className="mobile-dev-icon d-inline-block text-center mb-6 transition5">
                                                          <img src="images/icon/react.png" alt=""/>
                                                      </div>
                                                      <h6 className="f-700 mb-0">Webentwicklung</h6>
                                                  </div>
                                                  <p>Moderne Web-Lösungen, die Ihre digitale Präsenz stärken.</p>
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
          {/* app-dev */}

          {/* ====== Kontakt ============================================ */}
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
                              <img className="d-block bounce-animate2" src="images/feature/kontakt.png" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Kontakt */}
      
      </main>

      {/* ====== Footer ============================================ */}
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

      {/* <!-- back top button */}
      <div id="scroll" className="scroll-up position-relative z-index11">
          <div className="top text-center"><span className="white-color theme-bg"><i className="fa fa-arrow-alt-up"></i></span></div>
      </div>
  </div>
  );
}

export default App;
