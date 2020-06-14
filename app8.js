//Chapter12-13:
//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)

var character=prompt("Enter a character to check whether it is string or no:");
var ch=character.charCodeAt();
if (ch>=65 || ch<=90){
    document.write("<br>The character is uppercase!");
}
else if (ch>=97 || ch<=122){
    document.write("<br>The character is lowercase!");
}

else{
    document.write("<br>The character is number!");
}


//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 

var int1 = +prompt("Enter first integer");
var int2 = +prompt("Enter Second integer");

if(int1>int2){
    document.write("<br>"+int1+" "+"is larger no!");
}
else if(int1<int2){
    document.write("<br>"+int2+" "+"is larger no!");
}
else if(int1===int2){
    document.write("<br>"+int1+" "+"  and  "+int2+" are the same numbers!" );
}


//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 

var num=+prompt("Enter a number to check whether its is positive,negative,or zero");

if(num>0){
    document.write("<br>"+num+" "+"is positive no!");
}
else if(num<0){
    document.write("<br>"+num+" "+"is negative no!");
}
else if(num===0){
    document.write("<br>"+num+" "+"is zero !");
}


//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var a=prompt("Enter a character of lenght 1:");
var character_1=a.toLowerCase();


if(character_1==="a" || character_1==="e"|| character_1==="i" || character_1==="o" || character_1==="u" ){
    document.write("<br>True the character is vowel!");
}
else{
    document.write("<br>False the character is not vowel!");
}




//5. Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.   


var password="2020";

var pass=prompt("Enter your password");

if(pass===""){
    alert("Please Enter your password!");
}
else if(pass===password){
    alert("Correct!The password you entered matches the original password!");
}
else{
    alert("Incorrect Password!");


}


//6. This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; }   

var greeting; 
var hour = 13; 
if (hour < 18){ 
    greeting = "Good day";
    document.write("<br>"+greeting); 
}    
else{ 
    greeting = "Good evening";
    document.write("<br>"+greeting); 

}   


//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
//Implement the following case using if, else & else if statements 

var usertime=+prompt("Enter time in 24hours formate");


if (usertime>=0000 && usertime<1200){
    document.write("<br>GOOD MORNING!"); 
}
else if (usertime>=1200 && usertime<1700){
    document.write("<br>GOOD AFTERNOON!"); 
}
else if (usertime>=1700 && usertime<2100){
    document.write("<br>GOOD EVENING!"); 
}
else if (usertime>=2100 && usertime<2359){
    document.write("<br>GOOD NIGHT!"); 
}
