import noisyBg from '../../assets/images/noisy.png'
import {aboutData} from '../../../data/aboutData.js'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { SplitText } from 'gsap/all'
import {ScrollTrigger} from 'gsap/ScrollTrigger.js'

const Sobre = () => {

useGSAP(()=>{
    const aboutSplit = SplitText.create('#about h2,#about p',{tipe:'words',})
    const aboutTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:"#about",
            start:"top center",
            end:"top top",
            scrub:true,
        }
    })
    aboutTimeline.from(aboutSplit.words,{opacity:0,yPercent:100,duration:1,ease:'expo.out',stagger:0.04})
    aboutTimeline.from('.top-grid div,.bottom-grid div',{opacity:0,duration:1,stagger:0.04,ease:'power1.inOut',},'-=0.25')
})

return (
    <div id="about">
        <div className="mb-16 md:px-0 px-5">
            <div className="content">
                <div className="md:col-span-8">
                    <p className="badge">Coquetéis Premium</p>
                    <h2>Do ambiente à bebida  <span className="text-white">—</span> Tudo é impecável</h2>
                </div>
                <div className="sub-content">
                    <p>Nossos coquetéis equilibram técnica e sofisticação, desenhados exclusivamente para elevar os sentidos do seu paladar.</p>
                    <div>
                        <p className="md:text-3xl text-xl font-bold">
                            <span>4.7</span>/5
                        </p>
                        <p className="text-sm text-white-100">Mais de 1.200 experiências únicas.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="top-grid">
            <div className="md:col-span-3">
                <div className="noisy" style={{backgroundImage: `url(${noisyBg})`}}/>
                <img src={aboutData.abt1} alt="grid-img-1" />
            </div>

            <div className="md:col-span-6">
                <div className="noisy" style={{backgroundImage: `url(${noisyBg})`}}/>
                <img src={aboutData.abt2} alt="grid-img-2" />
            </div>

            <div className="md:col-span-3">
                <div className="noisy" style={{backgroundImage: `url(${noisyBg})`}}/>
                <img src={aboutData.abt5} alt="grid-img-3" />
            </div>
        </div>
        <div className="bottom-grid">
            <div className="md:col-span-8">
                <div className="noisy" style={{backgroundImage: `url(${noisyBg})`}}/>
                <img src={aboutData.abt3} alt="grid-img-3" />
            </div>

            <div className="md:col-span-4">
                <div className="noisy" style={{backgroundImage: `url(${noisyBg})`}}/>
                <img src={aboutData.abt4} alt="grid-img-4" />
            </div>
        </div>
    </div>
)
}

export default Sobre