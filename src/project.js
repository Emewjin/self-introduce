const filterIcons = document.querySelectorAll(".tools-img img");
const projectItem = document.querySelectorAll(".project-item");
const filterCloseBtn = document.querySelector('.tools-img__close');
const SCALE = "click-scale"
const OPACITY = "opacity"

function changeClassList(a,b,c){
    filterIcons[a].classList.add(SCALE);
    filterIcons[b].classList.remove(SCALE);
    filterIcons[c].classList.remove(SCALE);
    filterCloseBtn.classList.remove(HIDDEN);
}

function showJsProject(){
    changeClassList(0,1,2);
    projectItem[0].classList.add(OPACITY);
}

function showHtmlProject(){
    changeClassList(1,0,2);
    projectItem[0].classList.remove(OPACITY);
}

function showCssProject(){
    changeClassList(2,0,1);
    projectItem[0].classList.remove(OPACITY);
}

function showAll() {
    filterIcons[0].classList.remove(SCALE);
    filterIcons[1].classList.remove(SCALE);
    filterIcons[2].classList.remove(SCALE);
    projectItem[0].classList.remove(OPACITY);
    filterCloseBtn.classList.add(HIDDEN);
}

filterIcons[0].addEventListener("click", showJsProject);
filterIcons[1].addEventListener("click", showHtmlProject);
filterIcons[2].addEventListener("click", showCssProject);
filterCloseBtn.addEventListener("click", showAll);

const modalOpenBtn = document.querySelector('.project + button');
const modal = document.querySelector('.modal');
const overlayModal = document.querySelector('.modal__overlay');
const modalCloseBtn = modal.querySelector('button');

function closeModal() {
    modal.classList.add(HIDDEN);    
}

function openModal() {
    modal.classList.remove(HIDDEN);
} 

modalOpenBtn.addEventListener('click',openModal);
modalCloseBtn.addEventListener('click',closeModal);
overlayModal.addEventListener('click',closeModal);
