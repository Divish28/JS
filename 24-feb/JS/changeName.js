const button = document.querySelector('button');
const para = document.querySelector('P');

button.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}