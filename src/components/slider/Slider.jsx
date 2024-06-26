import React from 'react'
import IMG from '../../assets/slider/home.png'
import BG from '../../assets/slider/bg.png'

export const Slider = () => {
  return (
    <div>
        <div id="home"></div>
          <div className="slider-area position-relative">
              <div className="single-slider slider-height1 container-wrapper d-flex align-items-center z-index1" style={{ backgroundImage: `url(${BG})` }}>
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12  d-flex align-items-center">
                              <div className="slider-content mt--30 position-relative">
                                  <h1 className="f-700 pb-22" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="150">SOFTWARE.<br/>SERVICE.<br/>SOLUTIONS.</h1>

                                  <h1 className="f-700 theme-color pb-22" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="150">IN 0711.</h1>

                                  <p data-aos="fade-right" data-aos-duration="2000">IT aus Esslingen/Stuttgart</p>
                              </div>
                          </div>
                          <div className="col-xl-6 col-lg-6  col-md-6  col-sm-12 col-12  d-flex align-items-center ">
                              <div className="slider-img1 pl-65 z-index1 position-relative">
                                  <img className="bounce-animate img-style" src={IMG} alt=""/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
