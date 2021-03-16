const filterIcon = document.querySelectorAll(".tools-img img");
const projectItem = document.querySelectorAll(".project div");
const OPACITY = "opacity-half"
const SCALE = "click-scale"


function showJsProject(){
    this.classList.add(SCALE);
    filterIcon[1].classList.remove(SCALE);
    filterIcon[2].classList.remove(SCALE);
    projectItem[0].classList.add(OPACITY);
}
function showHtmlProject(){
    this.classList.add(SCALE);
    filterIcon[2].classList.remove(SCALE);
    filterIcon[0].classList.remove(SCALE);
    projectItem[0].classList.remove(OPACITY);
}
function showCssProject(){
    this.classList.add(SCALE);
    filterIcon[1].classList.remove(SCALE);
    filterIcon[0].classList.remove(SCALE);
    projectItem[0].classList.remove(OPACITY);
}

filterIcon[0].addEventListener("click", showJsProject);
filterIcon[1].addEventListener("click", showHtmlProject);
filterIcon[2].addEventListener("click", showCssProject);