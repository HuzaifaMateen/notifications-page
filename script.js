let notification = document.querySelector(".number");
let icon = document.querySelector(".fa");
let btn = document.querySelector(".btn");
let angela = document.querySelector(".angela-icon");
let jacob = document.querySelector(".jacob-icon");
let markColor = document.querySelector(".mark");
let angelaColor = document.querySelector(".angela");
let jacobColor = document.querySelector(".jacob");
btn.addEventListener("click", function(){
    notification.classList.toggle("active-span");
    icon.classList.toggle("active-circle");
    angela.classList.toggle("active-circle");
    jacob.classList.toggle("active-circle");
    markColor.classList.toggle("active-mark");
    angelaColor.classList.toggle("active-angela");
    jacobColor.classList.toggle("active-jacob");
})