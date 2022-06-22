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
    var dice = [1, 2, 3, 4, 5, 6];
    var randomDice = Math.random(dice);
    var result = Math.trunc(randomDice);
    document.getElementById("dice").innerText = result;
}











// var today = new Date();
// var date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+ today.getDate();
// document.write(date);

// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// document.write(time);


