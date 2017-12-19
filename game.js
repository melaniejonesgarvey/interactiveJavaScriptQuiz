/*
 *	Author: Melanie Garvey
 *	Date: 10/20/16
 *	Project Name: Interactive JavaScript Quiz
*/

var username = window.prompt("What is your name?");
window.alert(username + ", lets play a game!"); 
// document.write("Make sure to visit us again in the future for more JavaScript quizzes on a PC near you!")

// This code is for question 1.
function question1() {
	if (document.getElementById("a1").checked) {
		window.alert("You have selected the correct answer!");
	} else {
		window.alert("JavaScript and Java are separate languages.");
	}
}
document.getElementById("b1").addEventListener("click", question1, false);

function question2() {
	var num1 = Number(document.getElementById("n1").value);
	var num2 = Number(document.getElementById("n2").value);
	if (document.getElementById("add").selected) {
		var add = (num1 + num2);
		document.getElementById("a2").innerHTML = username + ", the answer is: " + add;
	} else if (document.getElementById("sub").selected) {
		var sub = (num1 - num2);
		document.getElementById("a2").innerHTML = username + ", the answer is: " + sub;
	} else if (document.getElementById("mult").selected) {
		var mult = (num1 * num2);
		document.getElementById("a2").innerHTML = username + ", the answer is: " + mult;
	} else if (document.getElementById("div").selected) {
		var div = (num1 / num2);
		document.getElementById("a2").innerHTML = username + ", the answer is: " + div;
	} else if (document.getElementById("mod").selected) {
		var mod = (num1 % num2);
		document.getElementById("a2").innerHTML = username + ", the answer is: " + mod;
	}
}
document.getElementById("b2").addEventListener("click", question2, false);

//This code is for question 3.
function question3() {
	var t3 = document.getElementById("t3").value;
	if (t3.length == 0) {
		alert("Please enter an answer in the text box.");
	} else if (t3.length != 0) {
		alert("Everyone has their opinion!");
	}
	console.log(t3);
}
document.getElementById("b3").addEventListener("click", question3, false);

//This code is for question 4.
function question4() {
	var p4color = document.getElementById("p4");
	p4color.style.color = "red";
}	
document.getElementById("b4").addEventListener("click", question4, false);

//This code is for question 5.
function question5() {
	var p5fontSize = document.querySelectorAll(".p5");
	p5fontSize[0].style.fontSize = "2em";
}
document.getElementById("b5").addEventListener("click", question5, false);

//This code is for question 6.
function question6() {
	var count = 1;
	while (count <= 5) {
		window.alert(count);
		count++;
	}
}
document.getElementById("b6").addEventListener("click", question6, false);

// This code is for question 7.
function question7() {
	var text7 = document.getElementById("t7").value;
	switch (text7) {
		case "show":
			alert("Yes but it can also hide HTML elements.");
			break;
		case "hide":
			alert("Yes but it can also show HTML elements.");
			break;
		case "both":
			alert("Correct!");
			break;
	}
}
document.getElementById("b7").addEventListener("click", question7, false);

// This code is for question 8.
function question8() {
	var text8 = ["red", " orange", " yellow", " green", " blue", " indigo", " violet"];
	for (var i = 0; i < 1; i++) {
		window.alert(text8);
	}
}
document.getElementById("b8").addEventListener("click", question8, false);

// This code is for question 9.
function question9() {
	var num3 = Number(document.getElementById("n3").value);
	if (document.getElementById("compoundAdd").selected) {
		var add = (num3 += 5);
		document.getElementById("a9").innerHTML = username + ", the answer is: " + add;
	} else if (document.getElementById("compoundSub").selected) {
		var sub = (num3 -= 5);
		document.getElementById("a9").innerHTML = username + ", the answer is: " + sub;
	} else if (document.getElementById("compoundMult").selected) {
		var mult = (num3 *= 5);
		document.getElementById("a9").innerHTML = username + ", the answer is: " + mult;
	} else if (document.getElementById("compoundDiv").selected) {
		var div = (num3 /= 5);
		document.getElementById("a9").innerHTML = username + ", the answer is: " + div;
	} else if (document.getElementById("compoundMod").selected) {
		var mod = (num3 %= 5);
		document.getElementById("a9").innerHTML = username + ", the answer is: " + mod;
	}
}
document.getElementById("b9").addEventListener("click", question9, false);

//This code is for question 10.
function question10() {
	var count = 5;
	while (count >= 1) {
		window.alert(count);
		count--;
	}
}
document.getElementById("b10").addEventListener("click", question10, false);

//This code is for question 11.
function question11() {
	var num4 = -Number(document.getElementById("n4").value);
	document.getElementById("a11").innerHTML = username + ", the answer is: " + num4;
}
document.getElementById("b11").addEventListener("click", question11, false);

//This code is for question 12.
function question12() {
	var ppt = document.getElementById("ppt");
	var bc = document.getElementById("bc");
	var dl = document.getElementById("dl");
	if ((ppt.checked || bc.checked && dl.checked) || (ppt.checked && bc.checked && dl.checked)) {
		window.alert("You have the proper documents to travel abroad.");
	} else {
		window.alert("You do not have the proper documents to travel abroad.");
	}	
}
document.getElementById("b12").addEventListener("click", question12, false);

//This code is for question 13.
function question13() {
	var count = 10;
	while (count > 4) {
		window.alert(count);
		count--;
	}
}
document.getElementById("b13").addEventListener("click", question13, false);

//This code is for question 14.
function question14() {
	var t14 = document.getElementById("t14").value;
	if (t14 === "Brendan Eich") {
		alert("You are correct.");
	} else if (t14 !== "Brendan Eich") {
		alert("Incorrect. Brendan Eich created JavaScript.");
	}
	console.log(t14);
}
document.getElementById("b14").addEventListener("click", question14, false);

//This code is for question 15.
function question15() {
	var t15 = document.getElementById("t15").value;
	if (!(t15 == "Mocha")) {
		alert("Incorrect. Mocha was the original name of JavaScript.");
	} else if (t15 == "Mocha") {
		alert("Correct.");
	}
	console.log(t15);
}
document.getElementById("b15").addEventListener("click", question15, false);

//This code is for question 16.
function question16() {
	var html = "HTML & ";
	var css = "CSS.";
	if (document.getElementById("a16").checked) {
		window.alert("You have selected the correct answer! " + (html + css));
	} else {
		window.alert("Incorrect. Try " + (html + css));
	}	
}
document.getElementById("b16").addEventListener("click", question16, false);

//This code is for question 17.
function question17() {
	var t17 = document.getElementById("t17").value;
	if (t17 == "JavaScript") {
		alert("Correct. " + (t17 += " programs are embedded within HTML to add dynamic interactivity to web documents."));
	} else if (!(t17 == "JavaScript")) {
		alert("Incorrect. JavaScript programs are embedded within HTML to add dynamic interactivity to web documents.");
	}
	console.log(t17);
}
document.getElementById("b17").addEventListener("click", question17, false);

//This code is to ask users if they are done with the quiz.
function done() {
	var list = document.getElementsByTagName("li");
	for (var i = 0; i < list.length; i++) {
		list[i].style.fontStyle = "italic";
	}
}
document.getElementById("done").addEventListener("click", done, false);

function exit() {
	var congrats = "Congrats on finishing the JavaScript game!";
	document.write(congrats);
	document.write("<p>Have a nice day!</p>");
}
document.getElementById("exit").addEventListener("click", exit, false);





