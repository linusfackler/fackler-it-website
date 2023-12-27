import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

export const NotFound = () => {
  return (
    <div>
        <Header/>
            <div class="slider-area position-relative">
                <div class="details-page page-height d-flex align-items-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12  d-flex align-items-center justify-content-center">
                                <div class="page-title mt-110 text-center">
                                    <span class="theme-color f-700">Hier gibt's nichts.</span>
                                    <h1 class="text-capitalize f-700 mt-10 mb-20">404 Error</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb justify-content-center bg-transparent">
                                        <li class="breadcrumb-item"><a class="secondary-color3" href="/">Zurück auf die Startseite</a></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
    
  )
}
