//Square this number

function sqrDis(){
    var num1 = document.getElementById('square-input').value;
    var sqrnum = num1*num1
    console.log("The result of squaring the number is ", sqrnum)
    document.getElementById('solution').innerHTML = "The result of squaring the number is " + sqrnum;
}

//Halving the number

function halfDis(){
    var num2 = document.getElementById('half-input').value;
    var halfnum = num2/2
    console.log("The result of halving the number is ", halfnum)
    document.getElementById('solution').innerHTML = "The result of halving the number is " + halfnum
}

//Percatage of What 

function disWhat(){
    var num3 = document.getElementById('percent1-input').value;
    var num4 = document.getElementById('percent2-input').value;
    var percnum = (num3/num4)*100
    console.log(num3, " is ", percnum, "% of ", num4)
    document.getElementById('solution').innerHTML = num3 + " is " + percnum + "% of " + num4
}

//Circling the bush

function disRound(){
    var num5 = document.getElementById('area-input').value;
    var area = Math.PI*num5*num5
    console.log("The area for a circle with radius ", num5, " is ", area)
    document.getElementById('solution').innerHTML = "The area for a circle with radius " + num5 + " is " + area
    
}