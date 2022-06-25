var num1 =Math.floor(Math.random()*6) +1; 
var randomimage = "dice" + num1 + ".png";
var newrmdimg  ="images/"+ randomimage;
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src", newrmdimg);

var num2=Math.floor(Math.random()*6) +1;
var randomimage2 = "dice" + num2 + ".png";
var newrmdimg2  ="images/"+ randomimage2;
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src", newrmdimg2);

if(num1>num2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!!"
}
else if(num1<num2){
    document.querySelector("h1").innerHTML= "Player 2 Wins !! 🚩"
}
else{
    document.querySelector("h1").innerHTML = "Draw!! "
}