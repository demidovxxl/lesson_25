// Строгий режим 
"use strict"


// Клонирование элемента
// cloneNode - клонирование объекта

/*
const block = document.querySelector('.block');
const blockClone = block.cloneNode();
console.log(blockClone);
*/

// Удаление объекта
/*
const block = document.querySelector('.block');
block.remove();
*/

// ======================== Стили и классы
// className classlist

// className - перезапись класса
/*
const block = document.querySelector('.block');
block.className = "object";
*/

// classList - метод работы с классами
/*
const block = document.querySelector('.block');
*/

// block.classList.add('className'); //добавляем класс
// block.classList.remove(); //удаляет класс
// block.classList.toggle(); //если есть - удалить, если нет - добавить
// block.classList.contains(); //boolen на наличие класса

/*
block.classList.toggle('active');
block.classList.add('active');
if (block.classList.contains('active')) {
	// code
	console.log('Класса есть');
}
if (block.classList.contains('active')) {
	// code
	console.log('Класса нет');
}
*/


// Управление стилями
// style
/*
const block = document.querySelector('.block');
const title = document.querySelector('.block__title');

block.style.opacity = `0.8`;
title.style.fontSize = `40px`;

const totalPadding = 20 + 30;
block.style.paddingTop = `${totalPadding}px`;
block.style.paddingBottom = `${totalPadding}px`;
*/

// Убрать стиль
/*
block.style.paddingBottom = ``;

block.style.cssText = `
	background-color: grey;
	border: 1px solid #000;
`
*/



// Получение стиля (его значения)
// getComputedStyle
/*
const block = document.querySelector('.block');
const blockStyle = getComputedStyle(block);
const paddingTop = parseInt(blockStyle.paddingTop);
const fontSize = parseInt(blockStyle.fontSize);
console.log(paddingTop);
console.log(fontSize);
*/

// // Работа с атрибутами
// const block = document.querySelector('.block');
// // проверка наличия атрибута
// block.hasAttribute('name');
// // получение значения атрибута
// block.getAttribute('name');
// // установка значения атрибута
// block.setAttribute('name');
// // удаление атрибута
// block.removeAttribute('name');



// DATA - атрибуты
// Всегда возвращает строк
// Унарный оператор + переводит в number

/*
const speed = +block.dataset.animationSpeed;
console.log(speed + 100);

// создали атрибут
block.dataset.someAttr = "text";

// получили данные
const save = block.dataset.someAttr;
console.log(save);

// проверка на наличие атрибута
console.log(block.hasAttribute('data-some-attr'));
*/

/*
// Полезные свойства
const block = document.querySelector('.block');

// Получение имени тега
console.log(block.tagName);

// Атрибут hidden
block.hidden = true;
*/

// =========== розмеры и координаты
// Розмеры окна браузера

/*
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);
*/

// розмеры окна браузера
/*
const mainElement = document.documentElement;
const windowClienWidth = mainElement.ClienWidth;
const windowClienHeight = mainElement.ClienHeight;
console.log(windowClienWidth);
console.log(windowClienHeight);
*/


// Количество прокрученных пикселей
// Объект window
/*
const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;
console.log(windowScrollTop);
console.log(windowScrollLeft);
*/

// Прокрутка относительно текущего положения
/*
window.scrollBy(0, 50);
console.log(window.scrollBy);
*/

// scrollTo ({options}) прокрутка на указанные координаты

/*
window.scrollTo({
	top: 1500,
	left: 0,
	behavior: "smooth"
});
*/

// elem.scrollIntoView
// Запускается при клике на объект
/*
const block = document.querySelector('.block-test');

function scrollToBlock() {
	block.scrollIntoView({
		// start, center, end, nearest
		block: "center",
		inline: "nearest"
	});
}
*/

// позиция объекта
// offsetLeft и offsetTop
// offsetParent
// Позиция относительно объекта к которому он запозиционирован
// Относительно relative-объекта

/*
const block = document.querySelector('.block-test');

console.log(block.offsetParent);

console.log(block.offsetTop);
console.log(block.offsetLeft);
*/

// Глобальные размеры
// offsetWidth offsetHeight

/*
const block = document.querySelector('.block-test');
console.log(block.offsetWidth);
console.log(block.offsetHeight);
*/

// Координаты объекта
// clientX/clientY
// pageX/pageY

// Координаты относительно окна браузера
// getBoundingClientRect

/*
const block = document.querySelector('.block-test');
console.log(block.getBoundingClientRect().top);
*/

// Получение объекта по координатах
// document.elementFromPoint(x, y);

/*
const elem = document.elementFromPoint(100, 0);
console.log(elem);
*/


// ====================================================== События

// const link = document.querySelector('.link');

// функция, которая исполняется по клику
/*
link.onclick = function () {
	// код
	console.log('123');
}
*/

// elem/document.addEventListener("имя события, функция (()=>{code}), options")

/*
link.addEventListener("click", linkAction);
function linkAction(event) {
}
*/

/*
link.addEventListener("click", () => {
	console.log('123');
});
*/

// Отмена события, после того, как она нам не нужна
// removeEventListener
/*
link.removeEventListener("click", () => {
	console.log('123');
});
*/

/*
link.addEventListener("click", linkAction);
function linkAction(event) {
	console.log('123');
	link.removeEventListener("click", linkAction);
}
*/

/*
const options = {
	"capture": false,
	"once": true,
	"passive": false
}

link.addEventListener("click", linkAction);
function linkAction(event) {
	console.log('123');
}
*/

// Дествие по умолчанию

/*
const link = document.querySelector('.link');

link.addEventListener("click", linkAction);
function linkAction(event) {
	if (link.dataset.google === "false") {
		console.log('123');
		// отключаем действие по умолчанию
		event.preventDefault();
	}
}
*/

// События для множеств элементов

/*
const links = document.querySelectoAll('.link');

links.forEach(link => {
	link.addEventListener("click", linkAction);
	function linkAction(event) {
		if (link.dataset.google === "false") {
			console.log('123');
			// отключаем действие по умолчанию
			event.preventDefault();
		}
	}
});
*/

// Один глобальный слушатель на всю страницу.
// Слушает конкретное событие

/*
document.addEventListener('click', action);

function linkAction(event) {
	const targetItem = event.target;
	if (targetItem.closest('.link')) {
		console.log('Это Link');
		event.preventDefault();
	}
	if (targetItem.closest('.button')) {
		console.log('Это button');
		event.preventDefault();
	}
	console.log('Click');
}
*/

// Основные события мыши
/*
click, mouseenter, mouseleave

mouseenter - наведение мыши (hover)
*/

/*
const mouseBlock = document.querySelector('.mouse');

mouseBlock.addEventListener("mouseenter", mouseAction);
mouseBlock.addEventListener("mouseleave", mouseAction);
mouseBlock.addEventListener("mousemove", mouseAction);

const ball = document.querySelector('.mouse-ball')

function mouseAction(event) {
	if (event.type === "mouseenter") {
		console.log(event.pageY);
	}
	if (event.type === "mouseleave") {
		console.log(event.pageY);
	}
	if (event.type === "mousemove") {
		ball.style.cssText = `
		left:${event.pageX}px;
		top:${event.pageY}px;
		`;
		console.log(event.pageY);
		console.log(event.pageX);
	}
}


window.addEventListener("scroll", wScroll);

function wScroll(e) {
	console.log(mouseBlock.getBoundingClientRect().top);
}
*/

// Загрузка
/*
Браузер полностью загрузит страницу, когда загрузится html
и построено DOM-дерево.
*/


window.addEventListener("DOMContentLoaded ", domLoaded);
function domLoaded(e) {

}

// Это событие, когда на странице загружено абсолютно все
window.addEventListener("Load ", pageLoaded);
function pageLoaded(e) {
	document.documentElement.classList.add('loaded');

}