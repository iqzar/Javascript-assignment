//Chapter 17-20:

//1. Declare and initialize an empty multidimensional array. (Array of arrays)  

var multi_array=[[],[],[]];


//2. Declare and initialize a multidimensional array representing the following matrix:  
 
multi_array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i=0;i<multi_array.length;i++){
    document.write("<br>"+multi_array[i]);
}


//3. Write a program to print numeric counting from 1 to 10. 

for( var i=1;i<=10;i++){
    document.write("<br><h2>"+i+"</h2>");
}

//4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user. 

var table=+prompt("Enter a number to show its multiplication table");
var length_table=+prompt("Enter lenght of multiplication table ");
alert(table);
alert(length_table);

document.write("<br><h2>Multiplication Table of "+table+"</h2>");
document.write("<br><h2>Lenght of table:"+length_table+"</h2>");

for( var i=1;i<=length_table;i++){
    document.write("<br>"+table+" * "+i+" = "+table*i);

}


//5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”

var fruits= ["apple", "banana", "mango", "orange", "strawberry"];

for (var i=0;i<fruits.length;i++ ){
    document.write("<br>"+fruits[i]);
}

for (var i=0;i<fruits.length;i++ ){
    document.write("<br>Element at "+i+"is "+fruits[i]);
}


//6. Generate the following series in your browser. See example output. a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
document.write("<h2>Counting:</h2>")
for(var i=1;i<=15;i++){
    document.write(i+",");
}
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
document.write("<h2> Reverse Counting:</h2>")
for(var i=10;i>=1;i--){
    document.write(i+",");
}
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
document.write("<h2>Even:</h2>")
for(var i=0;i<=20;i++){
    if(i%2===0){
        document.write(i+",");
    }
   
}
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
document.write("<h2>Odd:</h2>")
for(var i=1;i<=20;i++){
    if(i%2!==0){
        document.write(i+",");
    }
    
}
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h2>Series:</h2>")
for(var i=2;i<=20;i++){
    if(i%2===0){
        document.write(i+"k,");
    }
    
}


//7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example: 

var A=["cake","apple pie","cookie","chips","patties"];

var order=prompt("Welcome to ABC Bakery,What do you want to order sir/madam");


if(A.includes(order)){
    alert(order+"is available at index "+A.indexOf(order)+" in our bakery.");
}
else{
    alert("We are sorry. "+order+"is not  available in our bakery.");
}

//8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 

var num=[24,53,78,91,12];
document.write("<br><h3>Array items:"+num+"</h3>");


var largest_no=Math.max(...num);
document.write("<br><h3>Largest no is:"+largest_no+"</h3>");






//9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 


var num=[24,53,78,91,12];
document.write("<br><h3>Array items:"+num+"</h3>");


var smallest_no=Math.min(...num);
document.write("<br><h3>Smallest no is:"+smallest_no+"</h3>");

//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("<br><h3>Multiple of 5:</h3>");
for(var i=5;i<=100;i++){
    if(i%5===0){
        document.write(i+",");
    }
   
}