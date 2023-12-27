import React from 'react'
import { Header } from '../header/Header'
import { Impressum } from './Impressum'
import { Footer } from '../footer/Footer'
import ScrollToTop from '../other/ScrollToTop'

export const ImpressumPage = () => {
  return (
    <div>
        <ScrollToTop/>
        <Header/>
        <Impressum/>
        <Footer/>
    </div>
  )
}
