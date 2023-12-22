import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Helmet } from "react-helmet"
import { Header } from './components/header/Header';
import { Slider } from './components/slider/Slider';
import { Clients } from './components/clients/Clients';
import { Solution } from './components/services/Solution';
import { Overview } from './components/services/Overview'
import { Software } from './components/services/Software';
import { Team } from './components/team/Team'
import { Cloud } from './components/services/Cloud';
import { Infrastructure } from './components/services/Infrastructure'
import { AI } from './components/services/AI'
import { Appdev } from './components/services/Appdev';
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Preloader } from './components/other/Preloader';
import { Scrolltop } from './components/other/Scrolltop'

import '../src/css/all-animations.css'
import '../src/css/animate.css'
import '../src/css/aos.css'
import '../src/css/bootstrap.min.css'
import '../src/css/default.css'
// import '../src/css/flaticon.css'
// import '../src/css/fontawesome-all.min.css'
import '../src/css/jquery.fancybox.min.css'
// import '../src/css/leaflet.css'
import '../src/css/meanmenu.css'
import '../src/css/responsive.css'
import '../src/css/slick.css'
import '../src/css/style.css'

function App() {
    function handleClick(event) {
        event.preventDefault();
      }

    // useEffect(() => {
    //     // AOS initialization
    //     if (window.AOS) {
    //         window.AOS.init({});
    //         console.log('AOS Initialized');
    //     }
    //     return () => {
    //     if (window.AOS) {
    //         window.AOS.refresh();
    //     }
    //     };
    // }, []);
  
    return (
        <>
            <Helmet>
                <script src="js/main.js"></script>
            </Helmet>
            <Preloader />
        
            <Header />

            <main>
                <Slider />
                <Clients />
                <Solution />
                <Overview />
                <Software />
                <Team />
                <Cloud />
                <Infrastructure />
                <AI />
                <Appdev />
                <Contact />
            </main>

            <Footer />

            <Scrolltop />
        </>
    );
}

export default App;
