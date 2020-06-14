//Chapter 1

// Write a script to greet your website visitor using JS alert box. 
alert("Welcome to our page");

//2. Write a script to display following message on your web page: 
alert("Error! please enter a valid password");

//3. Write a script to display following message on your web page: (Hint : Use line break):
alert("Welcome to JS Land..\r\n Happy Coding!");


//4. Write a script to display following messages in sequence: 
alert("Welcome to JS Land");


alert("Happy coding\n Prevent this message from creating additional dialogs");



//5. Generate the following message through browser’s developer console:
console.log("Hello i can run JS through my web browser's console");

//6. Make use of alerts in your new/existing HTML & CSS project. 


//7.7. Practice placement of <script></script> element in following sections of your project in exercise 6: a. Head b. Body (before your page’s HTML) 
//c. Body (inside your page’s HTML) d. Body (after your page’s HTML) 

//Chapter 2
//1. Declare a variable called username. 

var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName="Bushra Afsar Ali";

//3.3. Write script to a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box.

var message="Hello World";
alert(message);

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var name = prompt("What is your name?");
alert(name);
var age =prompt("What is your age?");
alert(age);
var course =prompt("Which course have you chosen?");
alert(course);

//5. Write a script to display the following alert using one JS variable: 
var a="PIZZA";


//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

var email="bushrasheikh@gmail.com";
alert("My email address is "+email);

//7.Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 

var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

//8. Write a script to display this in browser through JS 

document.writeIn("Yah! I can write HTML content through Javascript ");


// 9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”  

var b="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(b);


// the end

//Chapter 3

//1. Declare a variable called age & assign to it your age. Show your age in an alert box. 

var age=13;
alert("I am" + age + "years old");


//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 




//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 

var birthYear=1998;
document.writeIn("My birth year is" + birthYear);
document.writeIn("Data type of my declared variable is number");


//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 



// The End

//Chapter 4

//1. Declare 3 variables in one statement. 

var c=23 , d=34 , e= 56;

//2. Declare 5 legal & 5 illegal variable names. 

var my age, h@ , 1a , *book , 12;
var myname , myage , mylast_name , num1, sign$;

//3. Display this in your browser a)  A heading stating “Rules for naming JS variables” b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable c) Variables must begin with a ______, ______ or _____. For example $name, _name or name d) Variable names are case _________ e) Variable names should not be JS _________ 

//Chapter 5

var a = 3;
b = 5;
c = a+b;
alert(c);
//Chapter 5

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 


var a = 5;
var b = 3;
var c =a+b;
alert(c);

//2. Repeat task1 for subtraction, multiplication, division & modulus

var x = 5;
var y = 3;
var z =x-y;
alert(z);

var h = 5;
var i = 3;
var j =h*i;
alert(j);

var k = 5;
var l = 3;
var m =k/l;
alert(m);

//3. Do the following using JS Mathematic Expressions 
//a. Declare a variable.
 
var value1;

//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

value1 = 3;
document.write(value1);

//c. Initialize the variable with some number.

var val=1997;

//d. Show the value of variable in your browser like “Initial value: 5”. 

document.write("Initial value:" + value1);

//e. Increment the variable.

var value2=3;
var value3=value1+value2;

//f. Show the value of variable in your browser like “Value after increment is: 6”.

document.write("Value after increment:" + value3);

//g. Add 7 to the variable.
 
var value4=7;
var new = value3+value4;

//h. Show the value of variable in your browser like “Value after addition is: 13”. 

document.write("Value after addition is:" + new);

//i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”.  

document.write("<br><table><tr><th>Subjects</th><th>Total marks</th><th>Obtained marks</th><th>Percentage</th></tr>""<tr><td>Subject1</td><td>"+Totalmarks+"</td><td>"+Obt1+"</td><td>Percentage</td></tr><tr><td>"+Subject2+"</td><td>"+Totalmarks+"</td><td>"+Obt2+"</td><td>Percentage</td></tr><tr><td>"+Subject3+"</td><td>"+Totalmarks+"</td><td>"+Obt3+"</td><td>Percentage</td></tr></table>")