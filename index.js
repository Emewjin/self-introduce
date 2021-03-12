const favImgDog = document.querySelector('.js-fav-two');
const favImgDrama = document.querySelector('.js-fav-one');
const favoriteItem = document.querySelectorAll('.favorite');
const HIDDEN="hidden";

function showDramaImg(){
favImgDog.classList.add(HIDDEN);
favImgDrama.classList.remove(HIDDEN);
}

function showDogImg(){
favImgDrama.classList.add(HIDDEN);
favImgDog.classList.remove(HIDDEN);
}

favoriteItem[1].addEventListener("click", showDramaImg);
favoriteItem[2].addEventListener("click", showDogImg);