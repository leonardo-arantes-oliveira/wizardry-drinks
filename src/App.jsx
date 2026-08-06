import React from 'react'

//gsap imports
import { gsap } from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText);

import { lazy } from 'react';

//components imports



import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Cocktails from './sections/Cocktails/Cocktails.jsx'
import Sobre from './sections/Sobre/Sobre.jsx'
import Art from './sections/Art/Art.jsx';
import Menu from './sections/Menu/Menu.jsx';
import Contato from './sections/Contato/Contato.jsx';

const App = () => {
return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
            <Sobre/>
            <Art/>
            <Menu/>
            <Contato/>
        </main>
)
}

export default App