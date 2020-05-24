export default () => {
    let view = document.querySelector('.view__actualyPrize');
    let url = 'http://api.nbp.pl/api/cenyzlota';
    async function getPrize() {
      let response = await fetch(url);
      let json = await response.json();
      return json[0].cena;
    }
    async function viewPrize() {
      let goldPrize = await getPrize();
        view.innerHTML = `Aktualna cena złota: ${goldPrize}`;
    }
    viewPrize();
}