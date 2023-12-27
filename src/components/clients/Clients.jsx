import React from 'react'

import C1 from '../../assets/clients/infosys.png'
import C2 from '../../assets/clients/wipro.png'
import C3 from '../../assets/clients/Mercedes-Benz-Logo.png'
import C4 from '../../assets/clients/to.svg'
import C5 from '../../assets/clients/streetside.png'
import C6 from '../../assets/clients/cellent.png'

export const Clients = () => {
  return (
    <div>
        <div className="brand-area brand-height over-hidden">
              <div className="container">
                  <div className="row">
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                          <div className="row align-items-center justify-content-center">
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src={C1} alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src={C2} alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src={C3} alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src={C4} alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src={C5} alt=""/>
                                  </div>
                              </div>
                              <div className="col-xl-2  col-lg-2  col-md-4  col-sm-4 col-6 text-center">
                                  <div className="single-brand mb-40 d-block text-center">
                                      <img className="d-inline-block" src={C6} alt=""/>
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
