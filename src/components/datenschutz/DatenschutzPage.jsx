import React from 'react'
import { Header } from '../header/Header'
import { Datenschutz } from './Datenschutz'
import { Footer } from '../footer/Footer'
import { Helmet } from "react-helmet"

export const DatenschutzPage = () => {
  return (
    <div>
        <Helmet>
          <script src="js/jquery.meanmenu.min.js"></script>
          <script src="js/tilt.jquery.min.js"></script>
          <script src="js/main.js"></script>
        </Helmet>
        <Header/>
        <Datenschutz/>
        <Footer/>
    </div>
  )
}
