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

//btn
var priceBtnList = document.querySelector(".price-sale__wrap");
var priceBtnItem = document.querySelectorAll(".price-sale__item");
var priceList = document.querySelectorAll(".price__list");
priceBtnItem.forEach((item, index) => {
    let priceLitsItem = priceList[index];
    item.onclick = function () {
        document
            .querySelector(".price-sale__item.active")
            .classList.remove("active");
        document
            .querySelector(".price__list.active")
            .classList.remove("active");

        this.classList.add("active");
        priceLitsItem.classList.add("active");
    };
});

// slider
var reviewList = document.querySelector(".review__list");
var reviewItems = document.querySelectorAll(".review-item");
var prev = document.querySelector(".review__prev");
var next = document.querySelector(".review__next");
var dot = document.querySelectorAll(".review__dot");
var active = 0;
var lenght = reviewItems.length - 1;
next.onclick = function () {
    if (active + 1 > lenght) {
        active = 0;
    } else {
        active++;
    }
    reloadSlider();
};

prev.onclick = function () {
    if (active - 1 < 0) {
        active = lenght;
    } else {
        active--;
    }
    reloadSlider();
};

function reloadSlider() {
    let checkLeft = reviewItems[active].offsetWidth;
    reviewList.style.transform = `translateX(${-checkLeft * active}px)`;
    document.querySelector(".review__dot.active").classList.remove("active");
    dot[active].classList.add("active");
}
