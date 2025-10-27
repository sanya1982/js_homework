// Створити сторінку, що показує нумерований список пісень:
var playList = [
{
	author: "LED ZEPPELIN",
	song:"STAIRWAY TO HEAVEN"
},
{
	author: "QUEEN",
	song:"BOHEMIAN RHAPSODY"
},
{
	author: "LYNYRD SKYNYRD",
	song:"FREE BIRD"
},
{
	author: "DEEP PURPLE",
	song:"SMOKE ON THE WATER"
},
{
	author: "JIMI HENDRIX",
	song:"ALL ALONG THE WATCHTOWER"
},
{
	author: "AC/DC",
	song:"BACK IN BLACK"
},
{
	author: "QUEEN",
	song:"WE WILL ROCK YOU"
},
{
	author: "METALLICA",
	song:"ENTER SANDMAN"
}
];

const listSongs = document.querySelector('ol');
listSongs.innerHTML = ''
playList.forEach(item => {
	listSongs.innerHTML += `<li>${item.song} (${item.author})</li>`;
})

// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const btnOpen = document.querySelector('.open'),
btnClose = document.querySelector('.close'),
modal = document.querySelector('dialog');
btnOpen.addEventListener("click", function() {
	modal.showModal();
	console.log(modal.open);
});
btnClose.addEventListener("click", function() {
	modal.close();
	console.log(modal.open);
});

// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const trafficLightSwitch = document.querySelector('.toggle'),
trafficLights = document.getElementsByClassName('traffic-lights'),
circle = document.querySelectorAll('.circle')
classes = ['red', 'yellow', 'green'];
circle[0].classList.add(`${classes[0]}`);
let i = 1;
trafficLightSwitch.addEventListener("click", function() {
	if (i > 0 && i < 3) {
		circle[i].classList.add(`${classes[i]}`);
		circle[i - 1].classList.remove(`${classes[i - 1]}`);
		i++;
	}	else {
		circle[0].classList.add(`${classes[0]}`);
		circle[2].classList.remove(`${classes[2]}`);
		i = 1;
		}
	})