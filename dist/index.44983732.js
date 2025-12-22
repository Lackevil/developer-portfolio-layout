const navigation = document.querySelector(".navigation");
const burgerButton = document.querySelector(".burger");
const body = document.querySelector("#body");
burgerButton.addEventListener("click", ()=>{
    navigation.classList.toggle("active-navigation");
    burgerButton.classList.toggle("active-burger");
    body.classList.toggle("overflow-hidden");
});

//# sourceMappingURL=index.44983732.js.map
