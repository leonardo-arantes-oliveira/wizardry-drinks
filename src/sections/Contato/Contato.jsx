import React from 'react'
import {cLeafs,contato,lugar} from '../../../data/dataContato'
import {openingHours} from '../../../constants/index'
import { socials } from '../../../constants/index'
import gsap from 'gsap'
import {SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'



const Contato = () => {
useGSAP(()=>{
    const splitFTitle = SplitText.create('#contact h2',{type:'chars'})

    const timelineFooter = gsap.timeline({
        scrollTrigger:{
            trigger:'#contact',
            start:'top center',
            end:'bottom top',
        },
        ease:'power1.inOut'
    })
    timelineFooter
    .from(splitFTitle.chars,{opacity:0,yPercent:100,stagger:0.02,})
    .from('#contact h3',{opacity:0,yPercent:100,stagger:0.02,})
    .from('#contact p',{opacity:0,yPercent:100,stagger:0.02,})
    .from('#f-left-leaf',{y:-50,duration:1,ease:'power1.inOut'})
    .from('#f-right-leaf',{y:-50,duration:1,ease:'power1.inOut'},'<')
})
return (
    <footer id='contact'>
        <img src={cLeafs.cLeftLeaf} alt="left-leaf" id='f-left-leaf' />
        <img src={cLeafs.cRightLeaf} alt="right-leaf" id='f-right-leaf' />
        <div className='content'>
            <h2>Onde nos encontrar</h2>
            <div>
                <h3>Visite Nosso Bar</h3>
                <p>{lugar.endereco}</p>
            </div>
            <div>
                <h3>Contate nos</h3>
                <p>{contato.telefone}</p>
                <p>{contato.gmail}</p>
            </div>
            <div>
                <h3>Aberto Todos Os Dias</h3>
                {openingHours.map((time)=>(
                    <p key={time.day}>
                        {time.day} : {time.time}
                    </p>
                ))}
            </div>
            <div>
                <h3>
                    Redes Sociais
                </h3>
                <div className='flex-center gap-5'>
                    {socials.map((social)=>
                    (
                        <a key={social.name}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={social.name}>
                            <img src={social.icon} alt="icone-rede-social" className='w-8 h-8' />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
)
}

export default Contato