let lastScroll = 0;

window.addEventListener("scroll", function () {
    const navBar = document.getElementById("navbar-row");
    const icons = document.getElementsByClassName("icon");
    const currentScroll = window.scrollY;

    if (currentScroll >= lastScroll && currentScroll > 500) {
        // Scrolling down
        navBar.classList.add("navbar-hide");
        navBar.classList.remove("navbar-show");
    }else if(currentScroll == 0){
        navBar.classList.remove("navbar-show");
        navBar.classList.remove("navbar-hide")
        for(let icon of icons){
            icon.style.color = "#000000"
        }
    }   
    else{
        navBar.classList.add("navbar-show");
        navBar.classList.remove("navbar-hide")
        for(let icon of icons){
            icon.style.color = "#ffffff"
        }
        
    }

    lastScroll = currentScroll;
});