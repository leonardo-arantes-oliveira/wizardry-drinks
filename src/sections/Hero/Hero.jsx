import {gsap} from "gsap"
import {useGSAP} from "@gsap/react"
import {SplitText} from "gsap/SplitText"


const Hero = () => {

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

},[]);



return (
    <section id="hero" className="noisy">
        <h1 className="title">Magic</h1>
        <img src="../../../public\images\hero-left-leaf.png" className="left-leaf"/>
        <img src="../../../public\images\hero-right-leaf.png" className="right-leaf"/>

        <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>Classico-</p>
                    <p className="subtitle">Uma sensação <br/>a cada gole</p>
                </div>
                <div className="view-cocktails">
                    <p className="subtitle">Cada drink do menu é uma mistura de ingredientes frescos e de qualidade.Feitos para delirar seus sentidos!</p>
                    <a href="#cocktails" className="btn">Ver Drinks</a>
                </div>
            </div>
        </div>
    </section>
)
}

export default Hero