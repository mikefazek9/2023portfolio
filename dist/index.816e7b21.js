var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById("menu");
var blue = document.getElementById("green-container");
icon.addEventListener("click", function() {
    icon1.classList.toggle("a");
    icon2.classList.toggle("c");
    icon3.classList.toggle("b");
    nav.classList.toggle("show");
    blue.classList.toggle("slide");
});

//# sourceMappingURL=index.816e7b21.js.map
