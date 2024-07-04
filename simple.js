/*       按鈕        */
var bttn = document.getElementsByName("bttn");
var submit = document.querySelector(".submit");
var p1 = document.querySelector(".p-select");
var basemap = document.querySelector(".basemap");
var selectBasemap = document.querySelector(".select-basemap");

for (var i = 0; i < bttn.length; i++) {
  bttn[i].onclick = function() {
    for (var i = 0; i < bttn.length; i++) {
      bttn[i].style.backgroundColor = "hsl(217, 12%, 63%)";
      this.style.backgroundColor = "white";
      p1.innerText = "You selected " + this.innerText + " out of 5";
    }
  }
}

submit.addEventListener("click", function() {
  submit.style.backgroundColor = "white";
  basemap.style.display = "none";
  selectBasemap.style.display = "block";
});