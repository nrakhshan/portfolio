const snacktime = document.getElementById("snack");
const fugitive = document.getElementById("fugitive");
const legaseed = document.getElementById("legaseed");
const mapper = document.getElementById("mapper");

snacktime.addEventListener("click", snackClick, false);
fugitive.addEventListener("click", fallClick, false);
legaseed.addEventListener("click", seedClick, false);
mapper.addEventListener("click", mapClick, false);

function homeClick() {
    window.scrollTo(0, 0);
}

function menuClick(){
    const navBar = document.getElementById("navBar");
    const hidden = navBar.classList.contains("hidden");

    if (hidden) {
        navBar.style.animationName = "show";
        navBar.classList.remove("hidden");
    }
    else{
        navBar.style.animationName = "hide";
        setTimeout(hideNav, 1000);
    }
}

function hideNav() {
    document.getElementById("navBar").classList.add("hidden");
}

function snackClick(){
    location.replace("./projects/snacktime.html");
}

function fallClick(){
    location.replace("./projects/fugitive.html");
}

function seedClick(){
    location.replace("./projects/legaseed.html");
}

function mapClick(){
    location.replace("./projects/beacon.html");
}