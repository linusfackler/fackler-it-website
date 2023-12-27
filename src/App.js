import './App.css';
import React, { useEffect } from 'react';
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
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
    useEffect(() => {
        Aos.init();
    }, [])
    
    return (
        <>
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
