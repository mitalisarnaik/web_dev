var randomNumber=Math.floor(Math.random()*6)+1;
var randomdiceimg1="dice"+randomNumber+".png";
var randomimagesrc="images/"+randomdiceimg1;
document.querySelectorAll("img")[0].setAttribute("src",randomimagesrc);

var randomNumber2=Math.floor((Math.random()*6))+1;
var randomdiceimg2="dice"+randomNumber2+".png";
var randomimagesrc2="images/"+randomdiceimg2;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesrc2);

if(randomNumber>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else
{
    document.querySelector("h1").innerHTML="Draw!"
}






// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }