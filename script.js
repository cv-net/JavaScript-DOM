let paragraphOne = document.getElementById('paragraph1');
paragraphOne.textContent = "We are coders!";

let paragraphTwo = document.getElementById('paragraph2');
paragraphTwo.textContent = "Developers for life!";

let img = document.createElement('img');
img.src = "http://static.minitokyo.net/downloads/17/39/54467.jpg";
img.alt = "Rurouni Kenshin";

let container = document.querySelector('.img-container');
container.appendChild(img);

// let paragraphs = document.querySelectorAll('.para');
// paragraphs.style.color = 'red';

// paragraphOne.style.font-size = '40px';

//Add button
let button = document.createElement('button');
button.textContent = "Button";

container.appendChild(button);

//onclick, hide image
button.addEventListener('click', () => {
    img.style.display = 'none';
});
