import {useRef} from "react"
import {useMediaQuery} from "react-responsive"
import {gsap} from "gsap"
import {useGSAP} from "@gsap/react"
import {SplitText} from "gsap/SplitText"

import { heroContent } from '../../../data/heroData.js';


const Hero = () => {
const videoRef = useRef();
const isMobile = useMediaQuery({maxWidth: 768 });


useGSAP(() => {
const heroSplit = new SplitText('.title',{type:'chars,words'})
const paragraphSplit = new SplitText('.subtitle',{type:'lines'})
heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'))



gsap.from(heroSplit.chars,{
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.05,
});
gsap.from(paragraphSplit.lines,{
    opacity: 0,
    yPercent: 100,
    duration: 1.7,
    ease: 'expo.out',
    stagger: 0.06,
    delay: 1,
});
gsap.timeline({
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    }
})
.to('.right-leaf',{y: 200},0)
.to('.left-leaf',{y: -200},0)


const startValue = isMobile ? 'top 50%' : 'center 60%'
const endValue = isMobile ? '120% top' : 'bottom top'


const setupVideoAnimation = () => {
gsap.timeline({
    scrollTrigger: {
    trigger: videoRef.current,
    start: startValue,
    end: endValue,
    scrub: 1,
    pin: true,
    }
}).to(videoRef.current, {
    currentTime: videoRef.current.duration,
    ease: 'none'
})
}


if (videoRef.current.readyState >= 1) {
setupVideoAnimation()
} else {
videoRef.current.onloadedmetadata = setupVideoAnimation
}


},[]);



return (
<>
    <section id="hero" className="noisy">
        <h1 className="title">Magic</h1>
        <img src={heroContent.leftLeaf} className="left-leaf" />
        <img src={heroContent.rightLeaf} className="right-leaf" />

        <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>Classico-Delirante-Espetacular</p>
                    <p className="subtitle">Uma sensação <br/>a cada gole</p>
                </div>
                <div className="view-cocktails">
                    <p className="subtitle">Cada drink do menu é uma mistura de ingredientes frescos e de qualidade.Feitos para delirar seus sentidos!</p>
                    <a href="#cocktails" className="btn">Ver Drinks</a>
                </div>
            </div>
        </div>
    </section>
    <div className="video absolute inset-0">
        <video ref={videoRef} src={heroContent.heroVideo} muted playsInline preload="auto">
        </video>
    </div>
</>
)
}

export default Hero