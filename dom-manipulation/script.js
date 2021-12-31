const container = document.querySelector('#container');

const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = 'This is the glorious text-content!';
container.appendChild(redText);

const blueText = document.createElement('h3');
blueText.style.color = 'blue';
blueText.textContent = 'I\’m a blue h3!';
container.appendChild(blueText);

const box = document.createElement('div');
box.setAttribute('style', 'background-color: pink; border-style: solid; border-color: black');

const newText = document.createElement('h1');
newText.textContent = 'I\'m in a div';
box.appendChild(newText);

const moreText = document.createElement('p');
moreText.textContent = 'ME TOO!';
box.appendChild(moreText);

container.appendChild(box);