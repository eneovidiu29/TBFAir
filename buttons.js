document.addEventListener('DOMContentLoaded', function () {
  var turkeyButton = document.getElementById('Tr');
  var italyButton = document.getElementById('It');
  var spainButton = document.getElementById('Sp');
  var turkeyNr = 0;
  var italyNr = 0;
  var spainNr = 0;
  var trBg = 'url(Imagini/offers-page/turkey-flag.png)';
  var itBg = 'url(Imagini/offers-page/italy-flag.jpg)';
  var spBg = 'url(Imagini/offers-page/spain-flag.png)';
  var bgImage = document.getElementById('mainimg');
  var basicPrice = document.getElementById('basicPrice');
  var proPrice = document.getElementById('proPrice');
  var fullPrice = document.getElementById('fullPrice');
  var town = document.getElementById('town');

  function styleChange0(button) {
    button.style.width = '100%';
    button.style.borderRadius = '0';
    button.style.backgroundSize = '100%';
    button.style.backgroundPosition = 'center';
  }

  function styleChange1(button) {
    button.style.width = '33%';
    button.style.borderRadius = '20px';
    button.style.background = '';
    button.style.backgroundSize = '100%';
    button.style.backgroundPosition = 'center';
  }


  function buttonClick(number, button, button1, button2, background) {
    if (number == 0) {
      button1.style.display = 'none';
      button2.style.display = 'none';
      button.style.background = background;
      styleChange0(button);
    } else if (number == 1) {
      button1.style.display = 'block';
      button2.style.display = 'block';
      styleChange1(button);
    }
  }


  function turkeyClick() {
    buttonClick(turkeyNr, turkeyButton, italyButton, spainButton, trBg);
    if (turkeyNr == 0) {
      turkeyNr = 1;
      bgImage.src = "Imagini/offers-page/Turkey.png";
      basicPrice.innerHTML = "150$";
      proPrice.innerHTML = "250$";
      fullPrice.innerHTML = "500$";

      town.innerHTML = "INCLUDED FULL ISTANBUL TOUR";
    }
    else {
      turkeyNr = 0;
      bgImage.src = "Imagini/offers-page/main.png";
      basicPrice.innerHTML = "CLICK COUNTRY FOR PRICE";
      proPrice.innerHTML = "CLICK COUNTRY FOR PRICE";
      fullPrice.innerHTML = "CLICK COUNTRY FOR PRICE";
      town.innerHTML = "INCLUDED FULL TOWN TOUR";
    }
  }

  function italyClick() {
    buttonClick(italyNr, italyButton, turkeyButton, spainButton, itBg);
    if (italyNr == 0) {
      italyNr = 1;
      bgImage.src = "Imagini/offers-page/Italy.png";
      basicPrice.innerHTML = "175$";
      proPrice.innerHTML = "300$";
      fullPrice.innerHTML = "650$";
      town.innerHTML = "INCLUDED FULL ROME TOUR";
    }
    else {
      italyNr = 0;
      bgImage.src = "Imagini/offers-page/main.png";
      basicPrice.innerHTML = "CLICK COUNTRY FOR PRICE";
      proPrice.innerHTML = "CLICK COUNTRY FOR PRICE";
      fullPrice.innerHTML = "CLICK COUNTRY FOR PRICE";
      town.innerHTML = "INCLUDED FULL TOWN TOUR";
    }
  }

  function spainClick() {
    buttonClick(spainNr, spainButton, italyButton, turkeyButton, spBg);
    if (spainNr == 0) {
      spainNr = 1;
      bgImage.src = "Imagini/offers-page/Spain.png";
      basicPrice.innerHTML = "200$";
      proPrice.innerHTML = "350$";
      fullPrice.innerHTML = "750$";
      town.innerHTML = "INCLUDED FULL BARCELONA TOUR";
    }
    else {
      spainNr = 0;
      bgImage.src = "Imagini/offers-page/main.png";
      basicPrice.innerHTML = "CLICK COUNTRY FOR PRICE";
      proPrice.innerHTML = "CLICK COUNTRY FOR PRICE";
      fullPrice.innerHTML = "CLICK COUNTRY FOR PRICE";
      town.innerHTML = "INCLUDED FULL TOWN TOUR";

    }
  }

  // Assuming you want to call the turkeyClick function when the Turkey button is clicked
  turkeyButton.addEventListener('click', turkeyClick);
  italyButton.addEventListener('click', italyClick);
  spainButton.addEventListener('click', spainClick);

});