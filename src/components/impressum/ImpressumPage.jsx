import React from 'react'
import { Header } from '../header/Header'
import { Impressum } from './Impressum'
import { Footer } from '../footer/Footer'
import { Helmet } from "react-helmet"

export const ImpressumPage = () => {
  return (
    <div>
        <Helmet>
          <script type="text/babel" src="js/main.js"></script>
        </Helmet>
        <Header/>
        <Impressum/>
        <Footer/>
    </div>
  )
}
