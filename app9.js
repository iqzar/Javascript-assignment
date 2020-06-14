//Chaptersfrom14-16:

//1. Declare an empty array using JS literal notation to store student names in future. 

var student_names =[];

//2. Declare an empty array using JS object notation to store student names in future. 

var student_name = new Array();

//3. Declare and initialize a strings array. 
 
var city_names =["Karachi","Islamabad","Lahore","Multan","Hydrabad"];

//4.  Declare and initialize a numbers array.

var Roll_numbers =[101,102,103,104,105];

// 5.  Declare and initialize a boolean array.

// var boolean_array =[True,False];

// 6. Declare and initialize a mixed array. 

var student_details =["Ali",1001,"Karachi","Science"];

//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:  

var Qualifications=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualifications<h1>");
document.write("<h2>1)"+Qualifications[0]+"<h2>");
document.write("<h2>2)"+Qualifications[1]+"<h2>");
document.write("<h2>3)"+Qualifications[2]+"<h2>");
document.write("<h2>4)"+Qualifications[3]+"<h2>");
document.write("<h2>5)"+Qualifications[4]+"<h2>");
document.write("<h2>6)"+Qualifications[5]+"<h2>");
document.write("<h2>7)"+Qualifications[6]+"<h2>");
document.write("<h2>8)"+Qualifications[7]+"<h2>");



    


//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:  
 


student_name=["Ali","Ammar","Sana"];
var score=[234,450,300];
var percentage_1=score[0]/500*100;
var percentage_2=score[1]/500*100;
var percentage_3=score[2]/500*100;

document.write("<br>Score of "+student_name[0]+"  is "+score[0]+" .Percenatge:"+percentage_1+"%");
document.write("<br>Score of "+student_name[1]+"  is "+score[1]+" .Percenatge:"+percentage_2+"%");
document.write("<br>Score of "+student_name[2]+"  is "+score[2]+". Percenatge:"+percentage_3+"%");

//9. Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. c. Add two more color to the beginning of the array. Display the updated array in your browser. d. Delete the first color in the array. Display the updated array in your browser. e. Delete the last color in the array. Display the updated array in your browser. f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then 
//remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.


//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. 
var color=prompt("Enter a color you want to add in list");
var color_list=[];


color_list.unshift(color)
document.write("<br>"+color_list[0]);

//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. 

var color1=prompt("Enter a color you want to add in the end of the list");



color_list.push(color1)
document.write("<br>"+color_list[1]);



//c. Add two more color to the beginning of the array. Display the updated array in your browser. 

color_list.unshift("brown","red");

document.write("<h1>Updated array</h1>");

document.write("<br><h3>"+color_list+"</h3>");


//d. Delete the first color in the array. Display the updated array in your browser. 

color_list.shift();
document.write("<h1>Updated array after Deleting first Color</h1>");

document.write("<br><h3>"+color_list+"</h3>");

//e. Delete the last color in the array. Display the updated array in your browser.
color_list.pop();
document.write("<h1>Updated array after Deleting Last Color</h1>");

document.write("<br><h3>"+color_list+"</h3>");

//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. 

var insert_color=prompt("which color you want to insert in list");
var index_color=+prompt("Tell me place where you wanna add the desied color");

color_list.splice(index_color,index_color-1,insert_color);

document.write("<h1>Updated array after insert new Color</h1>");

document.write("<br><h3>"+color_list+"</h3>");

//g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then 
//remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 

var del_color=+prompt("At which index you want to delete color(s) from the list:");
var ind_del=+prompt("How many colors you want to delele from the list!");
color_list.splice(del_color,index_color);
document.write("<h1>Updated array after removing Colors</h1>");

document.write("<br><h3>"+color_list+"</h3>");



//Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 

var score=[23,45,56,24,34];
document.write("<br><h3>Score of Students:"+score+"</h3>");
var score1=score.sort()

document.write("<br><h3>Ordered Score of Studenrs:"+score1+"</h3>");


//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

var city_names=["Karachi","Lahore","Faisalabad","Hyderabad","Peshawar"];
document.write("<h1>Cities List</h1>")
document.write("<br><h3>"+city_names+"</h3>");
var Selected_cities=city_names.slice(1,4);
document.write("<h1>Selected Cities List</h1>")
document.write("<br><h3>"+Selected_cities+"</h3>");

//12.  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) 
 
var arr =["This","is","my","cat"];
document.write("<br><h1>Array</h1>");
document.write(arr);
var sen=arr.join(" ");

document.write("<br><h1>String</h1>");
document.write("<h3>"+sen+"</h3>");

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 

var devices =["keyboard","mouse","printer","moniter"];
document.write("<h1>Devices:</h1>");
document.write("<h3>"+devices+"</h3>")


document.write("<br><h1>Out:</h1>");
document.write("<h2>"+devices.shift()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices.shift()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices.shift()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices.shift()+"</h2>");


//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
 
var devices_1 =["keyboard","mouse","printer","moniter"];
document.write("<h1>Devices:</h1>");
document.write("<h3>"+devices_1+"</h3>")

document.write("<br><h1>Out:</h1>");
document.write("<h2>"+devices_1.pop()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices_1.pop()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices_1.pop()+"</h2>");

document.write("<h1>Out:</h1>");
document.write("<h2>"+devices_1.pop()+"</h2>"); 

//15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 

var Phone_manufacturers=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
document.write("<h1>Phone_manufacturers<h1>");
document.write("<h2>"+Phone_manufacturers[0]+"<h2>");
document.write("<h2>"+Phone_manufacturers[1]+"<h2>");
document.write("<h2>"+Phone_manufacturers[2]+"<h2>");
document.write("<h2>"+Phone_manufacturers[3]+"<h2>");
document.write("<h2>"+Phone_manufacturers[4]+"<h2>");
document.write("<h2>"+Phone_manufacturers[5]+"<h2>");
