function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}
function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  var par = document.createElement('p');
  var text = document.createTextNode('Welcome Holberton!');
  par.appendChild(text);
  document.body.appendChild(par);
  spooky_button = document.createElement('button');
  spooky_button.innerHTML = 'Spooky';
  spooky_button.onclick = function () {
    spooky();
  };
  document.body.appendChild(spooky_button);
  dark_mode_button = document.createElement('button');
  dark_mode_button.innerHTML = 'Dark mode';
  dark_mode_button.onclick = function () {
    darkMode();
  };
  document.body.appendChild(dark_mode_button);
  scream_mode_button = document.createElement('button');
  scream_mode_button.innerHTML = 'Scream mode';
  scream_mode_button.onclick = function () {
    screamMode();
  };
  document.body.appendChild(scream_mode_button);
}
main();