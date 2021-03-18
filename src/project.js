const filterIcons = document.querySelectorAll(".tools-img img");
const projectItem = document.querySelectorAll(".project div");
const OPACITY = "opacity-half"
const SCALE = "click-scale"

function changeClassList(a,b,c){
    filterIcons[a].classList.add(SCALE);
    filterIcons[b].classList.remove(SCALE);
    filterIcons[c].classList.remove(SCALE);
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

filterIcons[0].addEventListener("click", showJsProject);
filterIcons[1].addEventListener("click", showHtmlProject);
filterIcons[2].addEventListener("click", showCssProject);