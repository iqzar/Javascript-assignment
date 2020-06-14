//Chapter 6:
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:   

var a=10;
document.write("<h1>Result</h1>" );
document.write("<br> The value of a is : " +a);
document.write("<br>...........................") ;

var b= ++a;
document.write("<br><br> The value of ++a is: "+b);
document.write("<br>Now the value of a is: "+a);


var c= ++a;
document.write("<br><br>Now the value of ++a is: "+b);
document.write("<br>Now the value of a is: "+c);

var c= --a;
document.write("<br><br>Now the value of --a is: "+b);
document.write("<br>Now the value of a is: "+c);

var d= b--;
document.write("<br><br>Now the value of a-- is: "+d);
document.write("<br>Now the value of a is: "+b);

//2. What will be the output in variables a, b & result after execution of the following script:
 //var a = 2, b = 1; var result = --a - --b + ++b + b--;
//Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
--a;
document.write("<br> the value of a is: "+a);
document.write("<br> the value of b is: "+b);
document.write("<br> value of result is: "+result);
document.write("<br>...........................") ;
--a - --b;
document.write("<br> the value of a is: "+a);
document.write("<br> the value of b is: "+b);
document.write("<br> value of result is: "+result);
document.write("<br>...........................") ;
--a - --b + ++b;
document.write("<br> the value of a is: "+a);
document.write("<br> the value of b is: "+b);
document.write("<br> value of result is: "+result);
document.write("<br>...........................") ;
--a - --b + ++b + b--;
document.write("<br> the value of a is: "+a);
document.write("<br> the value of b is: "+b);
document.write("<br> value of result is: "+result);
document.write("<br>...........................") ;


 




//3. Write a program that takes input a name from user & greet the user. 

var name = prompt("What is your name?");
alert(name + "  Welcome to ur page");

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.  

var num = prompt("Give number which table you want to display");
var n=Number(num);
if(num ===""){
        
    for( var i=1;i<=10;i++){
    document.write("<br>"+5+" * "+i+" = "+5*i);
   
    }
}
else {
    for( var s=1;s<=10;s++){
        document.write("<br>"+ n+" * "+s+" = "+ n*s);
    
    }    
}


//6. Take a) Take three subjects name from user and store them in 3 different variables. 

var Subject1 = prompt("Give name of a subject");
var Subject2 = prompt("Give name of a subject");
var Subject3 = prompt("Give name of a subject");


//b) Total marks for each subject is 100, store it in another variable. 

var Totalmarks=100;

//c) Take obtained marks for first subject from user and stored it in different variable. 

var Obt1 = +prompt("Give obtained marks of a subject1");

//d) Take obtained marks for remaining 2 subjects from user and store them in variables.

var Obt2 = +prompt("Give obtained marks of a subject2");
var Obt3 = +prompt("Give obtained marks of a subject3");

 //e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)  

var totalobt =Obt1+Obt2+Obt3;
var per=totalobt/300*100;
var sub1_per=Obt1/Totalmarks*100;
var sub2_per=Obt2/Totalmarks*100;
var sub3_per=Obt3/Totalmarks*100;

document.write("<br><table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+Subject1+"</td><td>"+Totalmarks+"</td><td>"+Obt1+"</td><td>"+sub1_per+"%</td></tr><tr><td>"+Subject2+"</td><td>"+Totalmarks+"</td><td>"+Obt2+"</td><td>"+sub2_per+"%</td></tr><tr><td>"+Subject3+"</td><td>"+Totalmarks+"</td><td>"+Obt3+"</td><td>"+sub3_per+"%</td></tr><tr><td></td><td>"+300+"</td><td>"+totalobt+"</td><td>"+per+"%</td></tr>")