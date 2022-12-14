

const getData = async () => {

  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const ticker = urlParams.get('ticker')

  if(ticker){
    const cors = "https://cors-anywhere.herokuapp.com/";
    const service = "https://www.fundsexplorer.com.br/funds/";
    const url = cors+service+ticker;
    
    let response = await fetch(url);
    let html = await response.text();
    console.log(html);
    const bdy = new DOMParser().parseFromString(html, 'text/html');
    const info = bdy.getElementById('main-indicators-carousel');
    const dividend = parseFloat(info.getElementsByClassName('carousel-cell')[1].getElementsByTagName('span')[1].innerText.trim().split(' ')[1].replace(',','.'));
    
    document.getElementById('dy').innerHTML = dividend;
  } else {
    document.getElementById('dy').innerHTML = "N/A";
  }
  
}

document.addEventListener("DOMContentLoaded", getData);

