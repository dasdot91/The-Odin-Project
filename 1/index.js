const btn = document.querySelector("#tt")
btn.addEventListener("click", function (e) {
  console.log(e);
  e.target.style.background = "blue";
}); 