import React from 'react'
import IMG from '../../assets/services/cloud.png'

export const Cloud = () => {
  return (
    <div>
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
                                                <a className="btn btn-link black-color f-700 border-0 d-block text-left rounded-0 position-relative" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Warum ist Cloud Computing oft kostengünstiger als herkömmliche Vor-Ort-Lösungen?
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
                                                <a className="btn btn-link black-color f-700 border-0 d-block text-left rounded-0 position-relative collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
                                                <a className="btn btn-link black-color f-700 border-0 d-block text-left rounded-0 position-relative collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
                            <img className="d-block bounce-animate2" src={IMG} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
