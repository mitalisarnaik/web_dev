
/*Call function*/
// var person={introduction:function(city,country){return this.firstname+" "+this.lastname+" lives in "+city+", "+country}};
// var person1={
//     firstname:"Mitali",
//     lastname:"Sarnaik"
// }
// alert(person.introduction.call(person1,"Pune","Maharashtra"));



/*Arrow Function*/
// const x=(a,b)=>{return a+b};
// alert(x(5,6));



/*bind Function*/
// var person={
//     firstname:"Mitali",
//     lastname:"Sarnaik",
//     fullname:function(){return this.firstname+" "+this.lastname;}
// }

// var member={
//     firstname:"Shaunak",
//     lastname:"Sarnaik"
// }

// var fullname=person.fullname.bind(member);
// alert(fullname());



/*Callback Function*/
// function mydisplayer(something)
// {
//     document.getElementById("demo").innerHTML=something;
// }
// function calculate(n1,n2,myCallback)
// {
//     let sum=n1+n2;
//     myCallback(sum);
// }
// calculate(5,6,mydisplayer);


/*Asynchronous Function*/
// setTimeout(display,3000);
// var display=()=>{return "hello"}
// function actual(){
//     var x=display();
//     document.getElementById("demo").innerHTML=x;
// }



// setTimeout(display,3000);
// function display(){
//     document.getElementById("demo").innerHTML="It changed ";
// }


/*Promise Function*/
// function display(something)
// {
//     document.getElementById("demo").innerHTML=something;
// }
// let mypromise=new Promise(function(accept,reject){
// let x=2;
// if(x==0)
// {
//     accept("Ok");
// }
// else
// {
//     reject("Error");
// }
// });
// mypromise.then(
//     function(value){display(value);},
//     function(value){display(value);}
// );



/*Map Function*/
// var arr=[1,2,3,4];
// arr=arr.map(multiply);
// document.getElementById("demo").innerHTML=arr;
// function multiply(value,index,array)
// {
//     return value*2;
// }



/*Filter Function*/
// var arr=[4,9,0,5];
// arr=arr.filter(lesser);
// document.getElementById("demo").innerHTML=arr;
// function lesser(value,index,array)
// {
//     return value<6;
// }


/*Reduce Function*/
// var numbers=[2,4,3,1];
// numbers=numbers.reduce(mulitply);
// document.getElementById("demo").innerHTML=numbers;
// function mulitply(product,value,index,array)
// {
//     return product*value;
// }


/*Every Function*/
// var numbers=[5,10,15,20];
// numbers=numbers.every(over);
// document.getElementById("demo").innerHTML=numbers;
// function over(value,index,array)
// {
//     return value>=10;
// }


//with Function
// var months=["Jan","Feb","Mar"];
// var monthsnew=months.with(2,"March");
// document.getElementById("demo").innerHTML=monthsnew;
