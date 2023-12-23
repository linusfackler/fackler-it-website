import React from 'react'
import { Header } from '../header/Header'
import { Impressum } from './Impressum'
import { Footer } from '../footer/Footer'
import { Helmet } from "react-helmet"

export const ImpressumPage = () => {
  return (
    <div>
        <Helmet>
          <script src="js/jquery.meanmenu.min.js"></script>
          <script src="js/tilt.jquery.min.js"></script>
          <script src="js/main.js"></script>
        </Helmet>
        <Header/>
        <Impressum/>
        <Footer/>
    </div>
  )
}
