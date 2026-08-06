import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


import noisyBg from '../../assets/images/noisy.webp'
import { heroContent } from '../../../data/heroData.js';
import { cocktailLists, mockTailLists } from '../../../constants/index.js'

const Cocktails = () => {
useGSAP(()=>{
    const paralaxTimeline= gsap.timeline({
        scrollTrigger: {
            trigger: '#cocktails',
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true,
        }
    })
    paralaxTimeline.to('#c-left-leaf',{x: -100,y: 100})
    paralaxTimeline.to('#c-right-leaf',{x: 100,y: 100},'<')
})


return (
    <section id="cocktails" className="noisy" style={{ backgroundImage: `url(${noisyBg})` }}>
    <img src={heroContent.leftLeaf} alt="l-leaf" id="c-left-leaf" />
    <img src={heroContent.rightLeaf} alt="r-leaf" id="c-right-leaf" />
    
    <div className="list">
        <div className="popular">
        <h2>Cocktails Mais Populares</h2>
        <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
            <li key={name}>
                <div className="md:me-28">
                <h3>{name}</h3>
                <p>{country} | {detail}</p>
                <span>{price}</span>
                </div>
            </li>
            ))}
        </ul>
        </div>
        <div className="loved">
        <h2>Drinks Mais Amados</h2>
        <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
            <li key={name}>
                <div className="me-28">
                <h3>{name}</h3>
                <p>{country} | {detail}</p>
                <span>{price}</span>
                </div>
            </li>
            ))}
        </ul>
        </div>
    </div>
    </section>
)
}

export default Cocktails