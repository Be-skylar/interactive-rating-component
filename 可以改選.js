/*       按鈕        */
var bttn = document.getElementsByName("bttn");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");
var submit = document.querySelector(".submit");
var p1 = document.querySelector(".p-select");
var basemap = document.querySelector(".basemap");
var selectBasemap = document.querySelector(".select-basemap");

//設定每一顆按鈕「點擊事件」(for是因為可以重複執行，直到false)
for (var i = 0; i < bttn.length; i++) {
  //設定每顆按鈕onclick事件處理器
  bttn[i].onclick = function() {
    //當按鈕被點擊時，設定「顏色更動」
    //每換按另一顆按紐時，即執行此迴圈
    for (var i = 0; i < bttn.length; i++) {
      bttn[i].style.backgroundColor = "hsl(217, 12%, 63%)";
      this.style.backgroundColor = "white";
    }
  }
}
//結論：兩個for迴圈被賦予的任務不同
btn1.addEventListener("click", function() {
  function btn1_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn1_link(1);
});
btn2.addEventListener("click", function() {
  function btn2_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn2_link(2);
});
btn3.addEventListener("click", function() {
  function btn3_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn3_link(3);
});
btn4.addEventListener("click", function() {
  function btn4_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn4_link(4);
});
btn5.addEventListener("click", function() {
  function btn5_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn5_link(5);
});

submit.addEventListener("click", function() {
  submit.style.backgroundColor = "white";
  is_clicked = true;//可有可無(改變初始狀態)
  basemap.style.display = "none";
  selectBasemap.style.display = "block";
});
