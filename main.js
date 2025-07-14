var sliderCounter = 0;
var sliderContent = [
  "Programmatrice",
  "Web Designer",
  "Front End Developer",
  "UI/UX Designer",
];
var sliderValue = document.querySelector("#sliderValue");

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  // Applica il colore random a tutta la frase
  sliderValue.style.color = getRandomColor();

  // Aggiorna il contenuto del testo
  sliderValue.innerHTML = sliderContent[sliderCounter];

  sliderCounter++;
}

slide();
setInterval(slide, 2000);