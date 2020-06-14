//Chapter 5
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.   

var num1= 4;
var num2= 5;

var num=num1+num2;
document.write("Sum of "+" "+ num1 +"  and  " + num2 +"  is " + num);

//2. Repeat task1 for subtraction, multiplication, division & modulus. 

var num4=num1/num2;
var num5=num1*num2;
var num6=num1-num2;
var num7=num1%num2;
document.write("<br>Division of "+ num1 +"  and " + num2 +"  is " + num4);
document.write("<br>Subtraction of "+ num1 +" and " + num2 +"  is  " + num6);
document.write("<br>Multiplication of "+ num1 +" and " + num2 +"  is  " + num5);
document.write("<br>Modulus of  "+ num1 +" and " + num2 +" is " + num7);

//3. Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value 

//after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”.  
  
var number;
document.write("<br>Value after variable declaration is "+ number);
number=7;
document.write("<br>Initial Value is "+ number);
var number1=++number;
document.write("<br> Value after increment is "+ number1);
var number1=number1+7;
document.write("<br> Value after addition is "+ number1);
var number2=number1--;
document.write("<br> Value after decrement is "+ number2);
var rem = number2%3;
document.write("<br> The remainder "+ rem);

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie

var unit_cost = 600;
var total_cost= unit_cost * 5;
document.write("<br> Total cost to buy 5 ticketd to a movie is "+ total_cost);

//5.  Write a script to display multiplication table of any number in your browser

var n=3;
for( var i=1;i<=10;i++){
    document.write("<br>"+n+" * "+i+" = "+n*i);
}



//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 

var cltemp=40;
var fartemp=(cltemp*9/5)+32;
var tempfar=80;
var tempcl=(tempfar-32)*5/9;

document.write("<br>" + cltemp+ "  is "+ fartemp);
document.write("<br>" + tempfar+ "  is "+ tempcl);

//7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges 
//compute the total cost & show the receipt in your browser

var price1=650;
var qty1=3;
var price2=100;
var qty2=7;
var t1=price1*qty1;
var t2=price2*qty2;
var total=t1+t2;

document.write("<h1>Shipping Cart</h1>");
document.write("<br> Price of item 1 is "+price1);
document.write("<br> Quantity of item 1 is "+ qty1);
document.write("<br> Price of item 2 is "+price2);
document.write("<br> Quantity item 2 is "+qty2);

document.write("<br> Total cost of your order is "+total);


//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

var total_marks=980;
var obtained_marks=804;
var percentage=(obtained_marks/total_marks)*100;
document.write("<h1>Mark Sheet</h1>");
document.write("<br> Total Marks is: "+total_marks);
document.write("<br> Obtained Marks is: "+obtained_marks);
document.write("<br> Percentage is: "+percentage+"%");


//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

var us_rate=104.80;
var saudi_rate=28
var pak1=us_rate*10;
var pak2=saudi_rate*28;
var pkr=pak1+pak2;
document.write("<h1>Currency in PKR</h1>");
document.write("<br> Total currency in PKR "+pkr);

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression 

var numm = 10;
var sol = 10+5*10/12;
document.write("<br> the result is "+sol);

//11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
//Output them to the screen like so: “They are either NN or NN years old”.  

var current_year=2020;
var birth_year=1997;
var age=current_year-birth_year;

document.write("<h1>Age Calculator</h1>");
document.write("<br> Current year: "+current_year);
document.write("<br> Birth year: "+birth_year);
document.write("<br> Your Age is: "+age);


//12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. 
//b. Calculate the circumference based on the radius, and output “The circumference is NN”.

var radius=4;
var pi=3.142;
var area=pi*radius**2;
var circumference=2*pi*radius;


document.write("<h1>The Geometrizer</h1>");
document.write("<br> Radius of circle: "+radius);
document.write("<br> the circumeference is : "+circumference);
document.write("<br> the area is : "+area);



//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 

var fvt_snack="lays"
var currentage=22;
var maxage=70;
var per_day=2;
var qty=(maxage-currentage)*2;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br>Favourite Snacks: "+fvt_snack);
document.write("<br> the Current age is: "+currentage);
document.write("<br> Estimated Maximum Age is  : "+maxage);
document.write("<br>Amount Of Snacks per day: "+qty);
document.write("<br> You will need "+qty+ "  of "+fvt_snack+" to last you until the ripe old age of "+maxage);







