/*       按鈕        */
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");
var submit = document.querySelector(".submit");
var p1 = document.querySelector(".p-select");
var basemap = document.querySelector(".basemap");
var selectBasemap = document.querySelector(".select-basemap");

/*const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const style = document.querySelector(".style");*/

/*為何不能直接寫？selectBasemap.style.dispaly = "none";*/
btn1.addEventListener("click", function() {
  btn1.style.backgroundColor = "white";
  /*btn1.style.hover = "white";
  btn2.style.hover = "hsl(25, 97%, 53%)";
  btn3.style.hover = "hsl(25, 97%, 53%)";
  btn4.style.hover = "hsl(25, 97%, 53%)";
  btn5.style.hover = "hsl(25, 97%, 53%)";
  style.innerHTML = `
  .btn1:hover{
    background-color: white;
  }
  `;*/
  function btn1_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn1_link(1);
});
/*使用append將css中class的一些屬性附加至JS */
//新增筆記區
btn2.addEventListener("click", function() {
  btn2.style.backgroundColor = "white";
  
  /*btn1.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn3.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn4.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn5.style.backgroundColor = "hsl(217, 12%, 63%)";
  style.innerHTML = `
  .btn2:hover{
    background-color: hsl(25, 97%, 53%);
  }
  `;*/
  function btn2_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn2_link(2);
});
btn3.addEventListener("click", function() {
  btn3.style.backgroundColor = "white";
  /*btn1.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn2.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn4.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn5.style.backgroundColor = "hsl(217, 12%, 63%)";
  style.innerHTML = `
  .btn3:hover{
    background-color: hsl(25, 97%, 53%);
  }
  `;*/
  function btn3_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn3_link(3);
});
btn4.addEventListener("click", function() {
  btn4.style.backgroundColor = "white";
  /*btn1.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn2.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn3.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn5.style.backgroundColor = "hsl(217, 12%, 63%)";
  style.innerHTML = `
  .btn4:hover{
    background-color: hsl(25, 97%, 53%);
  }
  `;*/
  function btn4_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn4_link(4);
});
btn5.addEventListener("click", function() {
  btn5.style.backgroundColor = "white";
  /*btn1.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn2.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn3.style.backgroundColor = "hsl(217, 12%, 63%)";
  btn4.style.backgroundColor = "hsl(217, 12%, 63%)";*/
  function btn5_link(number) {
    p1.innerHTML = "You selected " + number + " out of 5";
  }
  btn5_link(5);
});
submit.addEventListener("click", function() {
  submit.style.backgroundColor = "white";
  is_clicked = true;//改變初始狀態
  basemap.style.display = "none";
  selectBasemap.style.display = "block";
});
//document.head.append(style);

/*               單選1               
var obj = document.getElementsByName("radiotype");
var type = ''
for (vari = 0; i < obj.length; i++) {
  if (obj[i].checked) {
    type = obj[i].value;
  }
}
console.log(type)*/