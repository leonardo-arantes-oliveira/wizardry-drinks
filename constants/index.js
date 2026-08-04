//import logo
import wizardryLogo from '../src/assets/images/logo.svg';

// Importação de Perfis
import profile1 from '../src/assets/images/profile1.png';
import profile2 from '../src/assets/images/profile2.png';
import profile3 from '../src/assets/images/profile3.png';
import profile4 from '../src/assets/images/profile4.png';

// Importação de Ícones de Redes Sociais
import instaIcon from '../src/assets/images/insta.png';
import xIcon from '../src/assets/images/x.png';
import fbIcon from '../src/assets/images/fb.png';

// Importação das Imagens do Slider/Drinks
import drink1 from '../src/assets/images/drink1.png';
import drink2 from '../src/assets/images/drink2.png';
import drink3 from '../src/assets/images/drink3.png';
import drink4 from '../src/assets/images/drink4.png';


const logo = {wizardryLogo};

const navLinks = [
{
    id: "cocktails",
    title: "Drinks",
},
{
    id: "about",
    title: "Sobre Nós",
},
{
    id: "work",
    title: "A Arte",
},
{
    id: "contact",
    title: "Contato",
},
];

const cocktailLists = [
{
    name: "Caipirinha Cachaça Artesanal",
    country: "BR",
    detail: "Garrafa",
    price: "R$ 28",
},
{
    name: "Gin Tônica de Frutas Vermelhas",
    country: "BR",
    detail: "Garrafa",
    price: "R$ 38",
},
{
    name: "Cerveja IPA Artesanal",
    country: "BR",
    detail: "500 ml",
    price: "R$ 24",
},
{
    name: "Chopp Puro Malte",
    country: "BR",
    detail: "600 ml",
    price: "R$ 18",
},
];

const mockTailLists = [
{
    name: "Soda Italiana de Maçã Verde",
    country: "BR",
    detail: "Garrafa",
    price: "R$ 18",
},
{
    name: "Pink Lemonade com Maracujá",
    country: "BR",
    detail: "Garrafa",
    price: "R$ 20",
},
{
    name: "Coquetel Tropico Sem Álcool",
    country: "BR",
    detail: "500 ml",
    price: "R$ 22",
},
{
    name: "Refresco de Lavanda e Limão",
    country: "BR",
    detail: "600 ml",
    price: "R$ 20",
},
];

const profileLists = [
{
    imgPath: profile1,
},
{
    imgPath: profile2,
},
{
    imgPath: profile3,
},
{
    imgPath: profile4,
},
];

const featureLists = [
"Misturas perfeitamente equilibradas",
"Finalização impecável",
"Trincando de gelado, sempre",
"Batido e misturado por especialistas",
];

const goodLists = [
"Ingredientes selecionados à mão",
"Técnicas exclusivas da casa",
"A arte da coquetelaria em ação",
"Sabores frescos e macerados na hora",
];

const storeInfo = {
heading: "Onde Nos Encontrar",
address: "Av. Paulista, 1500 - Bela Vista, São Paulo - SP, 01310-200",
contact: {
    phone: "(11) 98765-4321",
    email: "contato@jsmcocktail.com.br",
},
};

const openingHours = [
{ day: "Seg–Qui", time: "11:00 – 00:00" },
{ day: "Sex", time: "11:00 – 02:00" },
{ day: "Sáb", time: "09:00 – 02:00" },
{ day: "Dom", time: "09:00 – 01:00" },
];

const socials = [
{
    name: "Instagram",
    icon: instaIcon,
    url: "#",
},
{
    name: "X (Twitter)",
    icon: xIcon,
    url: "#",
},
{
    name: "Facebook",
    icon: fbIcon,
    url: "#",
},
];

const sliderLists = [
{
    id: 1,
    name: "Mojito Tradicional",
    image: drink1,
    title: "Ingredientes Simples, Sabor Marcante",
    description:
    "Feito com rum, hortelã fresca, limão e água com gás, o Mojito é leve e refrescante. O drink perfeito para noites quentes de Verão.",
},
{
    id: 2,
    name: "Mojito de Framboesa",
    image: drink2,
    title: "Um Clássico Cítrico que Nunca Falha",
    description:
    "Uma variação vibrante que combina o azedinho da framboesa com a refrescância da hortelã e do limão. Sempre leve, equilibrado e marcante.",
},
{
    id: 3,
    name: "Violet Breeze",
    image: drink3,
    title: "Combinação Exclusiva e Marcante",
    description:
    "Uma criação autoral com notas florais e cítricas, equilibrando xarope artesanal e destilados premium para uma experiência única.",
},
{
    id: 4,
    name: "Mojito Curaçau Blue",
    image: drink4,
    title: "Feito com Cuidado, Servido com Paixão",
    description:
    "Cada drink é preparado com ingredientes frescos e a dedicação de entregar o copo perfeito, seja para comemorar ou relaxar.",
},
];

export {
navLinks,
cocktailLists,
mockTailLists,
profileLists,
featureLists,
goodLists,
openingHours,
storeInfo,
socials,
sliderLists,
logo,
};