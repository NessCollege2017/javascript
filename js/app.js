// console.log("Hello!"); 

// // Scripting language:
// //not type safe.
// //Interpreted client side (browser)

// //dynamic types 
// var x = 10;
// x = "Hello, World"

// console.log(x);

// //Type Script --> compiles to javascript.

// //possible types:
// //Numbers
// var x = 10;
// x = 10.01;
// x = -1;


// // String:
// var name = "Tomer";
// name = 'Tomer';


// //Boolean:
// var isIndependenceDay = true;
// isIndependenceDay = false;

// //Arrays:
// var numbers = [1, 2, "Lord Business" ,3, 4, 5];

// var food = new Array();//dynamic list
// food[0] = "Apple";
// food[1] = "Noughet";
// food[2] = "Oreo";

// food.push('Marshemello');

// console.log(food.length);

// var letters = "ABCDEFG".split('');
// //array.splice(index, howManyItemsToRemove, item1, ....., itemX)
// //array.splice(index, deleteCount)

// //insert a index()
// letters.splice(2, 0, "_");

// //remove at index:
// letters.splice(2, 1);

// //Never Ever do this: 
// //Must declare a variable before we use it:!!!
// n = 100; //

// // Objects...
// //like json:

// //alerts:
// // alert('Hello, World');


// //var free = confirm("Are you Free yet?");
// //console.log(free);

// //prompt:

// // prompt("Whats your Name?");
// // var name = prompt("Whats your name", "Moshe")


// var age = prompt('Whats Your Age?', '21');

// //convert the result to a Number (rounded to Int)
// age = parseInt(age); //NaN


// age = Number(age)

// console.log(age);


// //test if the age is larger than 21? 
// if(age > 21 ){
//     console.log("OK!")
// }else{
//     console.log("Too Young, Try again later :)");
// }


// var rand = Math.random(); // 0 inclusive ,1 exclusive (0..<1)
// //Math.floor()
// Math.floor( Math.random() * 10 )

// var pow = Math.pow(3, 2);

// var sqrt = Math.sqrt(pow);



// //16

// var letters = "0123456789ABCDEF".split('');



// var color = '#';
// //generate a random hex color
// for(var i = 0; i< 6; i++){
//     var randIndex = Math.floor(Math.random() * letters.length);
//     color += letters[randIndex];
// }

// // Element Style:
// document.body.style.background = color;






//String functions:
var helloArray = 'Hello'.split('');

var letters = 'abcdefg';
//indexOf(search)
console.log(letters.indexOf('ef'));

//length
console.log(letters.length);


letters.substr(0, 2); //startIndex, length;


letters.substring(1, 3); //startIndex, endIndex;


var greet = "CSS Rocks";
greet = greet.replace("CSS", "JS");

greet = greet.toLowerCase().toUpperCase();

//charAt
greet.charAt(2);


/*
//Time and date functions:

//millis since 1970 epoch time:
document.writeln(Date.now());

//Fri Sep 01 2017 11:06:07 GMT+0300 (Jerusalem Daylight Time)
document.writeln('<br>' + new Date())

//Fri Sep 01 2017 11:06:07 GMT+0300 (Jerusalem Daylight Time)
document.writeln('<br>' + new Date(1504253122482))

//Fri Sep 01 2017 00:00:00 GMT+0300 (Jerusalem Daylight Time) 
document.writeln('<br>' + new Date("9/1/2017"));

//Sun Oct 01 2017 13:20:11 GMT+0300 (Jerusalem Daylight Time)
document.writeln('<br>' + new Date(2017, 9, 1, 13, 20, 11))



*/



//js can modify the document. Window -> Document (model object)
//Document Object model (DOM)
//elemnet id="myH1

//<h1 id="myH1" class="text-center">Welcome Back</h1>
document.getElementById('myH1');

//"Welcome Back"
document.getElementById('myH1').innerHTML;

//Welcome Back!
document.getElementById('myH1').innerHTML += "!";


//js can effect the dom:
//innerHTML is the preferable method...

/*
function add(x, y){
    return x + y;
}
*/

var hex = '0123456789ABCDEF'.split('');

function getRandomColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)];
    }
    return color;
}


function onBtnClicked(element) {
    var e = document.getElementById('colorsDiv');

    var l = 100;
    for (var i = 0; i < 20; i++) {
        var c = 'hsl(0, 100%,' + l + '%)';
        l -= 5;

        var color = getRandomColor();
        var str = '<button class="btn btn-block" style="background:' + c + '">' + c + '</button>'
        e.innerHTML += (str + '<br>');
    }
}

var animal = ["cat", "dog", "fox", "hedgehog", "cat", "dog", "fox", "hedgehog"]

for (var i = 0; i < animal.length; i++) {
    animal[i] = "images/" + animal[i] + '.jpg';
}
/*
Array(4)0: "images/cat.jpg"1: "images/dog.jpg"2: "images/fox.jpg"3: "images/hedgehog.jpg"length: 4__proto__: Array(0)
*/

function rand(max) {
    return Math.floor(Math.random() * max);
}


function addMemoryCars() {

    var count = 4;
    var e = ''
    for (var row = 0; row < 2; row++) {
        e += '<tr>'
        for (var i = 0; i < count; i++) {
            var img = animal.splice(0, 1);
            e += '<td><img class="img-rounded" src="' + img + '"></td>';
        }
        e += '</tr>'
    }
    document.getElementById('animals').innerHTML+=e;
}

addMemoryCars();