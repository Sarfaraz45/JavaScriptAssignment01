//1.    Write a program to take “city” name as input from user. If user enters
//    “Karachi”, welcome the user like this: “Welcome to city of lights”


// var cityName = prompt("Enter city Name");

// if(cityName=="Karachi"){
//     console.log("Welcome to city of lights  " + cityName)
// }
// else{
//     console.log("Choose city of Lights")
// }

//2-
// var signalColor = prompt("Input Color Name");
// if(signalColor == "Red" || signalColor == "red") {
//     console.log("Must Stop")
// }
// else if (signalColor == "Yellow" || signalColor == "yellow"){
//     console.log("Ready to Move")
// }
// else if(signalColor =="Green" || signalColor == "green"){
//     console.log("Move Now")
// }
// else{
//     console.log("Challan by Traffice Police")
// }


// a- 
// var a = 4
//  if(++a === 5){
//      alert("Given condition for variable a is true")
//  }
//  //Yes

//b-
// var b = 82;
// if(b++===83){
//     alert("given condition for variable b is true")
// }
//No

//c-
// var c = 12
// if(c++ === 13){     
//     alert("Condition 1 is True")                //false
// }           
// if(c===13){
//     alert("condition 2 is true")                //true
// }     
// if(++c<14){
//     alert("Condition 3 is true")
// }                                               //false

// if(c === 14){
//     alert("conditoin 4 is true")            //true
// }

// var materialCost = 20000
// var laborCost = 2000
// var totalCost = materialCost + laborCost
// if(totalCost === laborCost + materialCost){
//     alert("The cost eqauls")
// }                                                   //True


// if(true){
//     alert("True")
// }


// if(false){
//     alert("False");
// }                           //false

// if("car" < "cat"){
//     alert("car is smaller than cat")
// }                       //true


// var mathMarks = prompt("Enter Math Marks")
//     mathMarks  = parseInt(mathMarks)
// var compMarks   = prompt("Enter Computer Marks")
//     compMarks = parseInt(compMarks)
// var bioMarks    = prompt("Enter Bio Marks")
//     bioMarks = parseInt(bioMarks)


// var totalMarks = 300
// var obtainedMarks = mathMarks + compMarks + bioMarks

// var obtainedPercentage = obtainedMarks/totalMarks*100



// document.write("Total Marks = " + totalMarks)
// document.write("<br>")
// document.write("Obtained Marks = " + obtainedMarks)
// document.write("<br>")
// document.write("Percentage Obtained = " + obtainedPercentage + "%")
// document.write("<br>")
// if(obtainedPercentage>=80){
//     document.write("Grade : A-One")
//     document.write("<br>")
//     document.write("Remarks: Excellent")
// }

// else if(obtainedPercentage>=70){
//     document.write("Grade : A")
//     document.write("<br>")
//     document.write("Remarks: Good")
// }

// else if(obtainedPercentage>=60){
//     document.write("Grade : B")
//     document.write("<br>")
//     document.write("Remarks: You need to improve")
// }

// else if (obtainedPercentage<60){
//     document.write("Grade : Fail")
//     document.write("<br>")
//     document.write("Remarks: Sorry")
// }
// else{
//     document.write("Enter valid Marks")
// }



//5- Guess Game

// var storeVal = 4;
// var userGuess = prompt("Enter your Guess")
// userGuess=parseInt(userGuess)
// if (userGuess==storeVal){
//     document.write("Bingo! Correct Answer")
// }
// else if (userGuess==++storeVal){
//     document.write("Close enough to correct Answer")
// }
// else{
//     document.write("Better Luck Next Time")
// }




//even and Odd

// var userInput = prompt("Enter Number")
// userInput = parseInt(userInput)

// if(userInput % 2 == 0){
//     document.write("Number is even")
// }
// else if(userInput % 2 != 0){
//     document.write("Number is Odd")
// }

//7---

// var firstNum    = prompt("Enter First Number")
// var operation = prompt("Enter operation Type")
// var secondNum   = prompt("Enter Second Value")

// firstNum = parseInt(firstNum)
// secondNum = parseInt(secondNum)

// var addition    = firstNum + secondNum
// var multiplication = firstNum * secondNum
// var subtraction = firstNum - secondNum
// var division = firstNum / secondNum
// var modulus = firstNum % secondNum

// if (operation == '+') {
//     document.write("Plus = " + addition)
// }
// else if(operation == '*'){
//     document.write("Multiplication = " + multiplication)
// }
// else if(operation == '-'){
//     document.write("Subtraction = " + subtraction)
// }

// else if(operation == '/'){
//     document.write("Division = " + division)
// }
// else if(operation == '%'){
//     document.write("Modulus = " + modulus)
// }

// else{
//     document.write("Enter Valid Type")
// }


//8-------------------------

// var userInput = parseInt(prompt("Enter number!")) 
// if(userInput >= 1){
//     document.write("Number is Positive")
// }
// else if(userInput < 0){
//     document.write("Number is Negative")
// }
// else if(userInput ==0){
//     document.write("You have entered 0")
// }
// else{
//     document.write("Enter Number only!!!")
// }


// var character = prompt("Enter character")
// if (character.length>1){
//     alert("Enter only one character")
// }
//     else if(character=="a" || character=="e" || character=="i" || character == "o" || character=="u" ||character=="A" || character=="E" || character=="I" || character == "O" || character=="U"){
//         alert("You entered vowel")
//     }
//     else alert("You entered constant")


// 10
// var cPwd = "Hello1"
// var userPassword = prompt("Enter Password")

// if (userPassword==""){
//     console.log("Please enter Password!")
// }
// else if(userPassword ===cPwd){
//     console.log("Correct! The Password you entered matches the original password")
// }
// else{
//     console.log("Incorrect Password!!")
// }




var userInput   = prompt("Enter time you arrived")

if(userInput>=0000 && userInput <1200){
    console.log("Good Morning!")
}
else if(userInput>=1200 && userInput < 1700){
    console.log("Good Afternoon!")
}
else if(userInput>=1700 && userInput < 2100){
    console.log("Good Night!")
}
else if(userInput>=2100 && time <= 2359){
    console.log("Good Night!")
}
else{
    console.log("Enter Your correct Time!")
}