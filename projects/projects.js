function homeClick() {
    location.replace("../index.html");
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
