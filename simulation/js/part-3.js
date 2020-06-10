function load3() {

    document.getElementById("load3").disabled = true;
    document.getElementById("diagram").src = "./images/sem.gif";
    document.getElementById("diagram2").onload = function () {
        canvas.width = $("#diagram2").width();
        canvas.height = $("#diagram2").height();
        // console.log(modeVar);
    }
    setTimeout(() => {
        document.getElementById("diagram2").src = "./images/bse.jpg";

    }, 8700);
    document.getElementById("imgblur3").disabled = false;
    document.getElementById("clight3").disabled = false;
    document.getElementById("calBut3").disabled = false;
}

function editImage3() {
    var obj = document.getElementById("diagram2");
    obj.style["filter"] = "contrast(" + document.getElementById("clight3").value + ") blur(" + document.getElementById("imgblur3").value + "px)";
}
function Contrast3() {
    var v = document.getElementById("diagram2");
    v.style["filter"] = "contrast(" + document.getElementById("clight3").value + ") blur(" + document.getElementById("imgblur3").value + "px)";
}

var imgArray = new Array();
var valueArr = new Array();
var pointsArr = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/g1.png';

imgArray[1] = new Image();
imgArray[1].src = 'images/g2.png';

imgArray[2] = new Image();
imgArray[2].src = 'images/g3.png';

imgArray[3] = new Image();
imgArray[3].src = 'images/g4.png';

imgArray[4] = new Image();
imgArray[4].src = 'images/g5.png';

imgArray[5] = new Image();
imgArray[5].src = 'images/g6.png';

imgArray[6] = new Image();
imgArray[6].src = 'images/g7.png';

imgArray[7] = new Image();
imgArray[7].src = 'images/g8.png';

var imgVar; 


function calibrate3() {

    imgVar = Math.floor(Math.random() * 9);
    
    document.getElementById("modeImage").src = imgArray[imgVar].src;
    document.getElementById("modeImage").style.display = "block";

    document.getElementById("imgblur3").disabled = true;
    document.getElementById("clight3").disabled = true;
    // document.getElementById("calBut3").disabled = true;
    document.getElementById("butVerify3").disabled = false;
    document.getElementById("butCheck3").disabled = false;
}
var j = 25;
var k = 0;
function createNewElement() {
    
    var x = document.getElementById("newInputBox").value;
    valueArr[k] = x;
    pointsArr[k] = j;
    k++;
    var txtNewInputBox = document.createElement('div');
    j+=25;


    // Then add the content (a new input box) of the element.
	txtNewInputBox.innerHTML = "<input type='number' style='width: 3rem;' value='' id='newInputBox'><br/> Total Points = "+ j;

    // Finally put it where it is supposed to appear.
    document.getElementById("newElementId").appendChild(txtNewInputBox);
    console.log(valueArr , pointsArr);
}