const menuLinks = document.querySelectorAll('.nav-list a[href^="#"]');

function getDistanceFromtheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}


function nativeScroll(getDistanceFromtheTop) {
    window.scroll({
        top: getDistanceFromtheTop,
        behavior: "smooth",
    })
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromtheTop = getDistanceFromtheTop(event.target) - -10;

    nativeScroll(distanceFromtheTop);
}

function closeNav(event) {
    if (event = "click") {
        document.querySelector(".nav-list").classList.remove("active");
        const mobile = document.querySelector(".mobile-menu")
        const li = document.querySelector(".nav-list li")
        mobile.classList.remove("active");
        if (".mobile-menu" == "click") {
            document.querySelector(".mobile-menu").classList.add("active");
            console.log("teste")
        } else {
            console.log("teste 2")
        }
    }

}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
    link.addEventListener("click", closeNav);
    console.log("clicou")
});
