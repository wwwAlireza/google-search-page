/*
 Coded by alireza
 github.com/wwwAlireza
*/
const input = document.querySelector("#input");
const inputContainer = document.querySelector(".input-container");
const line = document.querySelector(".line");
const closeIcon = document.querySelector(".close-icon");
input.addEventListener("focus", () => {
    inputContainer.style.boxShadow = "0 0 5px -1px rgba(0,0,0,.3)"
})
input.addEventListener("blur", () => {
    inputContainer.removeAttribute("style")
})
input.addEventListener("input", () => {
    if (input.value) {
        closeIcon.style.visibility = "visible";
        line.style.visibility = "visible";
    } else {
        closeIcon.style.visibility = "hidden";
        line.style.visibility = "hidden";
    }
})
document.querySelector(".close-icon").addEventListener("click", () => {
    input.value = "";
    closeIcon.style.visibility = "hidden";
    line.style.visibility = "hidden";
    input.focus();
})