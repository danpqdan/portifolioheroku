class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';
        this.closeClass = 'desactive';
        this.handleClick = this.handleClick.bind(this);
    }


    animateLinks() {
        this.navLinks.forEach((link, index) => {
            console.log(index, "animatedLinks")
            link.style.animation
                ? (link.style.animation = ``)
                : (link.style.animation = `navLinkFade 1s ease forwards 0.3s`)
                if(this.navLinks == "click"){
                    this.navLinks.classList.click(this.desactive)
                    console.log("")
                }
        });
    }

    closeAnimateLinks() {
        this.navLinks.forEach((link, index) => {
            console.log(index, "animatedLinks")
            link.style.animation
                ? (link.style.animation = ``)
                : (link.style.animation = `navLinkfadeOff 1s ease forwards 0.3s`)
        });
    }

    handleClick() {
        console.log(this, "handleclick")
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);

        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavBar.init();
