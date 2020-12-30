let paragraphOne = document.getElementById('paragraph1');
paragraphOne.textContent = "We are coders!";

let paragraphTwo = document.getElementById('paragraph2');
paragraphTwo.textContent = "Developers for life!";

let img = document.createElement('img');
img.src = "http://static.minitokyo.net/downloads/17/39/54467.jpg";
img.alt = "Rurouni Kenshin";
let container = document.querySelector('.img-container');
container.appendChild(img);

