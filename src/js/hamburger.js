export default () => {
const navigation = document.querySelector('.nav__links');
const hamburger = document.querySelector('.nav__hamburger');
const wh = window.innerWidth;
const burgerbtn = document.createElement("button");
function checkwidth () {
    if(wh <= 600) {
        navigation.classList.remove(".nav__links");
        navigation.innerHTML -= navigation;
        burgerbtn.setAttribute('class', 'nav__Btnhamburger--Open');
        burgerbtn.innerHTML = 'open menu';
        hamburger.appendChild(burgerbtn);
        return checkbutton();
    }
}
function checkbutton() {
    if(burgerbtn != null) {
    const burgerOpen = document.querySelector('.nav__Btnhamburger--Open');
    burgerOpen.addEventListener('click', () => {
        burgerOpen.classList.remove('.nav__Btnhamburger--Open');
        burgerOpen.setAttribute('class', 'nav__Btnhamburger--Close');
        burgerbtn.innerHTML = 'close menu';
        hamburger.appendChild(burgerbtn);
        if(burgerOpen != null) {
            const burgerBtnClose = document.querySelector('.nav__Btnhamburger--Close');
            burgerBtnClose.addEventListener('click', () => {
                burgerBtnClose.classList.remove('.nav__Btnhamburger--Close');
                burgerbtn.setAttribute('class', 'nav__Btnhamburger--Open');
                burgerbtn.innerHTML = 'open menu';
                return checkwidth();
            })
        }
    })
}
}
checkwidth();
}