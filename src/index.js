/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from './lazy';

const urlBase = 'https://randomfox.ca/images/';
const image = '2.jpg';
const alt = 'zorrito';

//crear una imagen
const maximun = 123;
const minimun = 1;
const appNode = document.getElementById('foxs');
const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun;
const cleanImages = () => {
  console.log(appNode.childNodes);

  [...appNode.childNodes].forEach((child) => {
    child.remove();
  });
};
const createImageNode = (num) => {
  const container = document.createElement('div');
  container.className = 'p-4';

  const image = document.createElement('img');
  image.className = 'mx-auto';
  image.width = '320';
  image.dataset.src = `${urlBase}${num}.jpg`;
  image.alt = alt;

  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'bg-gray-300 img-wrapper';
  imageWrapper.style.minHeight = '100px';
  imageWrapper.style.display = 'inline-block';

  imageWrapper.appendChild(image);

  container.appendChild(imageWrapper);
  appendedImages++;
  printLog();
  return container;
};

const addButton = document.querySelector('#addImageButton');
const cleanButton = document.querySelector('#cleanButton');
addButton.className = 'css-button-arrow--rose';
cleanButton.className = 'css-button-sliding-to-left--red';
cleanButton.addEventListener('click',cleanImages );
const addImage = () => {
  const newImage = createImageNode(random());
  appNode.append(newImage);
  registerImage(newImage);
};
addButton.addEventListener('click', addImage);
