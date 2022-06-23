// Digital clock

let time = document.getElementById("current-time");

setInterval(() =>{
let d = new Date();

var monthNames = ["Jan,", "Feb,", "Mar,", "Apr,", "May,", "Jun,", "Jul,", "Aug,", "Sep,", "Oct,", "Nov,", "Dec,"];
var theMonth = d.getMonth();
var nameOfMonth = monthNames[theMonth];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var theDay = d.getDay();
var nameOfDay = dayNames[theDay];
var theDate = d.getDate();

document.getElementById('day').innerText = nameOfMonth;
document.getElementById('day2').innerText = nameOfDay;
document.getElementById('day3').innerText = theDate;
time.innerHTML = d.toLocaleTimeString();
},1000);


// Positive Integer

function positiveinteger(){
    var userInput = document.getElementById("positiveinteger").value;
    document.getElementById("pi1").innerText = userInput;
    var roundOff = Math.round(userInput);
    document.getElementById("pi2").innerText = roundOff;
    var floor = Math.floor(userInput);
    document.getElementById("pi3").innerText = floor;
    var ceil = Math.ceil(userInput);
    document.getElementById("pi4").innerText = ceil;
}

// Negative Integer

function negativeinteger(){
    var userInput = document.getElementById("negativeinteger").value;
    var negativeInteger = - + userInput;
    document.getElementById("ni1").innerText = negativeInteger;
    var roundOff = Math.round(negativeInteger);
    document.getElementById("ni2").innerText = roundOff;
    var floor = Math.floor(negativeInteger);
    document.getElementById("ni3").innerText = floor;
    var ceil = Math.ceil(negativeInteger);
    document.getElementById("ni4").innerText = ceil;
}

// Positive Floating

function positivefloating(){
    var userInput = document.getElementById("positivefloating").value;
    document.getElementById("pfp1").innerText = userInput;
    var roundOff = Math.round(userInput);
    document.getElementById("pfp2").innerText = roundOff;
    var floor = Math.floor(userInput);
    document.getElementById("pfp3").innerText = floor;
    var ceil = Math.ceil(userInput);
    document.getElementById("pfp4").innerText = ceil;
}

// Negative Floating

function negativefloating(){
    var userInput = document.getElementById("negativefloating").value;
    var negativeInteger = - + userInput;
    document.getElementById("nfp1").innerText = negativeInteger;
    var roundOff = Math.round(negativeInteger);
    document.getElementById("nfp2").innerText = roundOff;
    var floor = Math.floor(negativeInteger);
    document.getElementById("nfp3").innerText = floor;
    var ceil = Math.ceil(negativeInteger);
    document.getElementById("nfp4").innerText = ceil;
}

// Absolute Value

function absolutevalue(){
    var userInput = document.getElementById("avinput").value; 
    document.getElementById("unfav").innerText = userInput;
    var absoluteValue = Math.abs(userInput);
    document.getElementById("unfavr").innerText = absoluteValue;
}

// Dice Function

function dice(){
    var dice = Math.random();
    var randomDice = dice*6 + 1;
    var result = Math.floor(randomDice);
    document.getElementById("dice").innerText = result;
}

// Toss

function toss(){
    var toss = Math.random();
    var result = toss*2 + 1;
    var tossResult = Math.floor(result);
    var h = Head;
    var t = Tails;
    if(tossResult == 1){ 
        document.getElementById("toss").innerText = t ;
    }
    if(tossResult == 2){ 
        document.getElementById("toss").innerText = h ;
    }
}

// One to Hundred

function onetohundred(){
    var dice = Math.random();
    var randomDice = dice*100 + 1;
    var result = Math.floor(randomDice);
    document.getElementById("onetohundred").innerText = result;
}

// User Weight

function userweight(){
    var userInput = document.getElementById("userweight")
    var dice = Math.random();
    var randomDice = dice*1000 + 1;
    var result = Math.floor(randomDice);
    if (userInput >= result){
        document.getElementById("onetohundred").innerText = "Correct";
    }
    if (userInput < result){
        document.getElementById("onetohundred").innerText = "Wrong";
    }
}









// var today = new Date();
// var date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+ today.getDate();
// document.write(date);

// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// document.write(time);


