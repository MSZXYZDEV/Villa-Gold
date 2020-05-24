import logo from '../public/img/villa.png';
import chains from '../public/img/chains.jpg';
import earrings from '../public/img/earrings.jpg';
import pendants from '../public/img/pendants.jpg';
import necklaces from '../public/img/necklaces.jpg';
import ringsN from '../public/img/ringsN.jpg';
import ringsC from '../public/img/ringsC.jpg';
import avuesta from '../public/img/auvesta.jpg';
import koliber from '../public/img/koliber.png';
export default () => {
    const navlogo = document.querySelector(".nav__logo--img");
    const chainss = document.querySelector('.container__img--chains');
    const earringss = document.querySelector('.container__img--earrings');
    const pendantss = document.querySelector('.container__img--pendants');
    const necklacess = document.querySelector('.container__img--necklaces');
    const ringsNN = document.querySelector('.container__img--ringsN');
    const ringsCC = document.querySelector('.container__img--ringsC');
    const kolibers = document.querySelector('.partners__koliber--img');
    const auvestas = document.querySelector('.partners__auvesta--img');
    navlogo.src = logo;
    chainss.src = chains;
    earringss.src = earrings;
    pendantss.src = pandants;
    necklacess.src = necklaces;
    ringsNN.src = ringsN;
    ringsCC.src = ringsC;
    auvestas.src = avuesta;
    kolibers.src = koliber;
}