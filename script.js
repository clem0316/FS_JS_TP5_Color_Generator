let red, green, blue;
const color = [red, green, blue];

const aleatoire = () => {
  const generator = color.map(
    (element) => (element = Math.floor(Math.random() * 255))
  );
  document.body.style.background = `rgb(${generator[0]},${generator[1]}, ${generator[2]})`;
  document.body.style.transition = "1s";
  document.querySelector(
    ".myText"
  ).innerText = `rgb(${generator[0]},${generator[1]}, ${generator[2]})`;
};
aleatoire();

setInterval(aleatoire, 3000);
