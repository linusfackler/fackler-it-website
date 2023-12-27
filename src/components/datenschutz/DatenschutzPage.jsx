import React from 'react'
import { Header } from '../header/Header'
import { Datenschutz } from './Datenschutz'
import { Footer } from '../footer/Footer'
import ScrollToTop from '../other/ScrollToTop'

export const DatenschutzPage = () => {
  return (
    <div>
        <ScrollToTop/>
        <Header/>
        <Datenschutz/>
        <Footer/>
    </div>
  )
}
