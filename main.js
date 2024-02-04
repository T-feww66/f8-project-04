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
