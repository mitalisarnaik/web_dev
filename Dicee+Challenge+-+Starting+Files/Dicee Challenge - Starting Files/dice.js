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






