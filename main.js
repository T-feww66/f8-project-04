var navLIst = document.querySelector(".navbar__list");
var listItem = document.querySelectorAll(".navbar__item");

listItem.forEach((item) => {
    item.onclick = function () {
        document
            .querySelector(".navbar__item.active")
            .classList.remove("active");
        this.classList.add("active");
    };
});

var listAbout = document.querySelector(".about__list");
var itemAbout = document.querySelectorAll(".about__item");
var infoItems = document.querySelectorAll(".about__info-item");
itemAbout.forEach((item, index) => {
    let infoItem = infoItems[index];
    item.onclick = function () {
        document
            .querySelector(".about__item.active")
            .classList.remove("active");
        document
            .querySelector(".about__info-item.active")
            .classList.remove("active");

            
        this.classList.add("active");
        infoItem.classList.add("active");
    };
});
