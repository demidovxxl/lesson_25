"use strict"

let searchForm = document.forms[0];
let searchInput = searchForm.search;

const searchButton = document.querySelector('.form__button');
const counterForm = document.querySelector('.form__counter')
const inputMax = searchInput.getAttribute('maxlength');
const txtCounter = document.querySelector('.form__counter span')

function menuActive() {
	searchForm.classList.add('_active');
	searchInput.classList.add('_active');
	searchButton.classList.add('_active');
	counterForm.classList.add('_active');
}

function menuInactive() {
	searchForm.classList.remove('_active');
	searchInput.classList.remove('_active');
	searchButton.classList.remove('_active');
	counterForm.classList.remove('_active');
	searchInput.value = "";
}

document.addEventListener("click", function (event) {
	if (event.target.closest('.form__button')) {
		menuActive();
	}
	if (!event.target.closest('.form__block')) {
		menuInactive();
	}
})

searchInput.addEventListener("input", txtSetCounter)

function txtSetCounter() {
	const txtCounterResult = inputMax - searchInput.value.length;
	txtCounter.innerHTML = txtCounterResult;
}

document.addEventListener("keyup", function (event) {
	if (event.code === "Escape") {
		menuInactive();
	}
})