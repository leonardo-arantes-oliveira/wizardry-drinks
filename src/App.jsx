import React from 'react'

//gsap imports
import { gsap } from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText);


//components imports
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Cocktails from './sections/Cocktails/Cocktails.jsx'


const App = () => {
return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />
        </main>
)
}

export default App