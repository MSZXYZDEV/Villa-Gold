import gold from '../public/img/gold.gif';
import diamond from '../public/img/diamond.jpg';
import ringsDiamond from '../public/img/ringsDiamond.jpeg';
import weddingRingsDiamond from '../public/img/weddingRingsDiamond.jpg';
export default () => {
const img = document.querySelector('.slider__imgs');
const txt = document.querySelector('.slider__txt');
const imgs = [
    {
        img: gold,
        text: 'Złoto inwestycyjne'
    },
    {
        img: diamond,
        text: 'Diamenty inwestycyjne'
    },
    {
        img: ringsDiamond,
        text: 'Pierścionki diamentowe'
    },
    {
        img: weddingRingsDiamond,
        text: 'Obrączki diamentowe'
    }
];
const time = 5000;
let active = 0;
const changeSlide = () => {
    active++;
    if (active === imgs.length) {
        active = 0;
    }
    img.src = imgs[active].img;
    txt.textContent = imgs[active].text;
    }
setInterval(changeSlide, time);
}