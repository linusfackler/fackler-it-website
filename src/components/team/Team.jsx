import React from 'react'
import RMD from '../../assets/team/raimund.jpeg'
import LKS from '../../assets/team/lukas.jpg'
import LNS from '../../assets/team/linus.jpeg'

export const Team = () => {
  return (
    <div>
        <div id="unser-team"></div>
            <div className="our-team-area about-us-team">
                <div className="bg-no-repeat pt-85" data-aos="fade-up" data-aos-duration="2000">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6  col-lg-7  col-md-9  col-sm-12 col-12">
                                <div className="title text-center">
                                    <span className="theme-color f-700">Fackler IT</span>
                                    <h4 className="f-700 mb-30">Unser Team</h4>
                                        <p>Tech-Enthusiasten, die Code lieber als Kaffee zum Frühstück haben. Wir kombinieren Kreativität mit Expertise – und das immer mit einem Augenzwinkern.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row our-team-wrapper-margin pt-55">
                            <a href="https://www.linkedin.com/in/raimundfackler/" target="_blank" rel="noreferrer" className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="our-team-wrapper position-relative mb-40">
                                    <div className="single-team-img position-relative z-index1">
                                        <img className="w-100" src={RMD} alt=""/>
                                    </div>
                                    <div className="our-team-info transition5 position-absolute left-0 right-0 white-bg pl-25 pt-90 pb-15 pr-25">
                                        <span className="secondary-color">Geschäftsführer</span>
                                        <h3 className="mt-1 f-700">Raimund Fackler</h3>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/lukasfackler/" target="_blank" rel="noreferrer" className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="our-team-wrapper position-relative mb-40">
                                    <div className="single-team-img position-relative z-index1">
                                        <img className="w-100" src={LKS} alt=""/>
                                    </div>
                                    <div className="our-team-info transition5 position-absolute left-0 right-0 white-bg pl-25 pt-90 pb-15 pr-25">
                                        <span className="secondary-color">Finanzvorstand</span>
                                        <h3 className="mt-1 f-700">Lukas Fackler</h3>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/linusfackler/" target="_blank" rel="noreferrer" className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="our-team-wrapper position-relative mb-40">
                                    <div className="single-team-img position-relative z-index1">
                                        <img className="w-100" src={LNS} alt=""/>
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
    </div>
  )
}
