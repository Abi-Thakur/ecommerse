

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const icons = document.getElementsByClassName("icon");
    const currentScroll = window.scrollY;

    if(currentScroll > 5){
        header.classList.add("header-show");
        for (let icon of icons){
          icon.style.color = "#ffffff";
        }
        
    }
    else{
        header.classList.remove("header-show");
        for(let icon of icons){
            icon.style.color = "#000000"
        }
    }

});