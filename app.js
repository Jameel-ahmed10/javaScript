// Chapter #1
// task #1

var a=1;
    alert("Error Please Enter a valid Password")


    // task #2

var a="Welcome to JS Land.... \n Happy Coding";
message=+newline;
var lineBreak
alert(a)
    
    // task #3
    var a="Welcome to JS land";
    var b="Happy codding";
    
    alert(a);
    alert(b)


    // task #4

var msg="Hello...I can run JS through my web browser's console"
console.log(msg);


    // Chapter #2
    
    // task #1
    var userName="Jameel Ahmed";
    var myName=19;
    var msg="Hello World";

    alert(userName);
    alert(myName,"Year Old")
    alert(msg)

        // task #2
        var name = "PIZZA"
        var msg = ""
        for (var i = name.length; i >= 1; i--){
            msg += name.slice(0,i) + "\n"
        }
        alert(msg)

        // task #3
        var mail="jameelahmed.karachi@gmail.com";
        alert("my email addess",mail);


        // task #4

        var msg= "I am trying to learn from the Book A smarter\n way to learn javaScript"
        alert(msg);

        // task #5
        var msg=" Yah! I can write HTML content through JavaScript"
        document.write(msg);

        // task #6

        var msg="==========%^^%=========="
        alert(msg);

        // task #7
        var age=15;
        alert("I am",age,"year old");

        var age=1990;
        document.write("My birth year is ", age);

        // chapter #4

        // legal variable
        // 1  HelloWord
        // 2  helloWorld
        // 3  helloworld
        // 4  hello1world
        // 5  helloworld1

        // illegal varriable
        // 1   1helloworld
        // 2  .helloworld
        // 3   ,helloworld
        // 4    Helloworld
        // 5    hello world


        // chapter #5

        // task #1

        adding
        var val1 = 3;
        var val2 = 5;
        var result=val1+val2;
        document.write("Sum of" + val1 + "and" + val2 + "is" +result);

    // task#2


        subtract
       var val1 = 3;
        var val2 = 5;
        var result=val1-val2;
        document.write("Subtract of" + val1 + "and" + val2 + "is" +result);

        Multipication

         var val1 = 3;
        var val2 = 5;
        var result=val1*val2;
        document.write("Multipication of" + val1 + "and" + val2 + "is" +result);


      dividing
         var val1 = 3;
        var val2 = 5;
        var result=val1/val2;
        document.write("Dividing of" + val1 + "and" + val2 + "is" +result);


        // task #4

    var price=600;
    var ticket=5;
    var result=price*ticket
    document.write("Total cost to by" + ticket + "tickets to a movie is" + price + "PKR")


    // task #5

    for(var i=1 ; i<=10 ; i++){
        document.write("4" + "x" + i + "=" + i*4 + "<br>")
    }


        // task #6

    var c=21;
    var f=77;
    document.write((f-32)*5/9 + "C is" + f + "F" +  "<br>");
  
    document.write((c*9/5+32) + "F is" + c + "C");




    // task #7

    var priceItem1=650;
    var quantityItem1=3;
    var totalPrice1= priceItem1*quantityItem1;
    var priceItem2=100;
    var quantityItem2=7;
    var totalPrice2=priceItem2*quantityItem2;
    var shippingCharge=100;
    var totalCost=totalPrice1+totalPrice2+shippingCharge;
    document.write("Price of item 1 is " + priceItem1 + "<br>")
    document.write("Quantity of item 1 is " + quantityItem1 + "<br>")
    document.write("Price of item 2 is " + priceItem2 + "<br>")
    document.write("Quantity of item 2 is " + quantityItem2 + "<br>")
    document.write("Shipping Charges " + shippingCharge +"<br><br>")

    document.write("Total Cost of your order " + totalCost)


    // task #8


    var totalMark=980;
    var obtMark=804;
    var percentage=obtMark/totalMark*100;
    document.write("Total marks : "+ totalMark + "<br>");
    document.write("Marks obtained :" + obtMark+ "<br>");
    document.write("Percentage" + percentage)


    
    
    // task #9

    var usDoller=10;
    var pakRup1=104.80;
    var pakRup=28;
    var saudiRiyal=25;
    var total=saudiRiyal*pakRup;
    var total1=usDoller*pakRup1;
    document.write("Total Currency of PKR is =" + (total1+total))


    // task 11

    var currentYear=2016;
    var birthDay=1992;
    var yourAge=currentYear-birthDay;

    document.write("Current Year :" + currentYear+ "<br>");
    document.write("Birth Year : " + birthDay +  "<br>");
     document.write("your Age is :" + yourAge);



    // task 13

    var favSnack= "chocolate chip";
    var currentAge=15;
    var estimatemaxAge=65;
    var amountsnackDay=3;
    var need=(estimatemaxAge-currentAge)*amountsnackDay;
    document.write("Favourite Snack: " + favSnack +"<br>");
    document.write("Current Age: " + currentAge +"<br>");
    document.write("Estimated Maximum Age: " + estimatemaxAge +"<br>");
    document.write("Amount of snacks per day: " + amountsnackDay +"<br>");
    document.write("You will need" +need + favSnack+"to last you until the ripe old age of "+estimatemaxAge);




    // chapter 6-9

    // task 1


    var i=10;
    document.write("The value of a is :" + i +"<br>"+"<br>")
    document.write("------------------------------- <br>")
    document.write("The value of ++a is :" + ++i +"<br>");
    document.write("Now the value of a is :" + i +"<br>"+"<br>")
    document.write("The value of a++ is :" + i++ +"<br>");
    document.write("The value of a is :" + i +"<br>"+"<br>");
    document.write("The value of --a is :" + --i +"<br>");
    document.write("The value of a is :" + i +"<br>"+"<br>");
    document.write("The value of a-- is :" + i-- +"<br>");
    document.write("The value of a is :" + i +"<br>"+"<br>");
    

    // task 2

    var a=2;
    var b=1;

    var result = --a - --b + ++b + b--;

    --a;
    --a - --b;
    --a - --b + ++b;
    --a - --b + ++b + b--;
    document.write("a = " + a +"<BR>");
    document.write("b = "+ b + "<br>");
    document.write("result = "+ result);


    // task 3

    var a = prompt("Enter the table number");
    for(var i=1 ; i<=10 ; i++){
        document.write(a + "x" + i + "=" + a*i + "<br>");
    }
   
    // task 5
    
    var sub= "English";
    var sub2="Math";
    var sub3="Urdu";
    var totalMark= 100;
    var obtmarkEng= 54;
    var obtmarkMath=54;
    var obtmarkUrdu=48;
    var percentage1= obtmarkEng/totalMark*100;
    var percentage2= obtmarkMath/totalMark*100;
    var percentage3= obtmarkUrdu/totalMark*100;
    var total1= totalMark+totalMark+totalMark;
    var total2 = obtmarkEng+obtmarkMath+obtmarkUrdu;
    var total3 = percentage1+percentage2+percentage3;
    document.write("Subject " + " Total Mark" + " Obtained Mark " + " Percentage" + "<br>");
    document.write(sub + totalMark + obtmarkEng + percentage1 + "<br>");
    document.write(sub2 + totalMark + obtmarkMath + percentage2 + "<br>");
    document.write(sub3 + totalMark + obtmarkUrdu + percentage3 + "<br>");
    document.write(""+ total1+ total2+ total3)


    // Chapter 9 - 11

    // task 1

    var citi = prompt("Enter Your City");
    if(citi==="karachi"){
        alert("Welcome to city of lights")
    }
    else{
        alert("you are not live in karachi")
    }

    // task 2


    var gender=prompt("Enter Your Gender");
    if(gender==="male"){
        document.write("Good Morning Sir!")
    }
    else if(gender==="female"){
        document.write("good morning maam")
    }
    else{
        document.write("incorrect")
    }

    // task 3

    var traffic=prompt("Enter traffic light color");
    if(traffic==="red"){
        document.write("MUST StOP");
    }
    else if(traffic==="yellow"){
        document.write("Ready to move")
    }
    else if(traffic==="green"){
        document.write("move to now")
    }
    else{
        document.write("incorrect")
    }


    // task 4


    var fuel=prompt("Enter Your fuel in liter")
    if(fuel<=0.25){
        document.write("Please refill the fuel in your car")
    }
   

    // task 5

    var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
    alert("car is smaller than cat");
    }
    

// task 6


var sub1 = +prompt("Enter Eng Mark");
var sub2 = +prompt("Enter Math Marks");
var sub3 = +prompt("Enter Urdu Mark");
var totalMark = +prompt("Enter total Marks");
var obtMark= sub1 + sub2 + sub3;
var percentage = obtMark/totalMark*100;


document.write("Total Marks = "+ totalMark +"<br>");
document.write("Obtained Mark = " + obtMark + "<br>");
document.write("Percentage = " + percentage + "<br>");
if(percentage>=80){
    document.write("Grade : A-one"+ "<br>")
}
else if(percentage>=70){
    document.write("Grade : A"+ "<br>")
}
else if(percentage>=60){
    document.write("Grade : B"+ "<br>")
}
else{
    document.write("Grade : Fail" + "<br>")
}

if(percentage>=80){
    document.write("Remark : Excellent "+ "<br>")
}
else if(percentage>=70){
    document.write("Remark : Good")
}
else if(percentage>=60){
    document.write("Remark : You need to improve")
}
else{
    document.write("Remark : Sorrrry")
}


    // task 7

    var no=6;
    var no1=+prompt("Enter Secret Number");
    if(no===no1){
        alert("Bingo Correct!")
    }
    else if(no1===7){
        alert("Close enough to the correct Answer")
    }
    else if(no1===5){
        alert("Close enough to the correct Answer")
    }
    else{
        alert("incorrect")
    }



    // task  10

    var weather=+prompt("Enter Weather");
    if(weather>40){
        alert("It is too hot outside");
    }
    else if(weather>30){
        alert("The Weather today is Normal.");
    }
    else if (weather>20){
        alert("Today's Weather is cool")
    }
    else if(weather>10){
        alert("OMG! Today weather is so cool.")
    }
    else{
        alert("Please Inser correct weather")
    }


    // task 11

    var val1 = prompt("Enter 1st value")
var val2 = prompt("Enter 2nd value")
var sign = prompt("enter Operator")
document.write(val1 + sign + val2)
if(sign === "+"){
    alert((+val1)+(+val2));
}
else if(sign=== "-"){
    alert(val1-val2);
}
else if(sign==="*"){
    alert(val1*val2);
}
else if(sign === "/"){
    alert(val1/val2);
}

// ======Chapter 21 - 25===========

// ======Chapter 21 - 25===========task 1

var firstName =  prompt("Enter Your First Name");
var lastName =  prompt("Enter Your Last Name");
var fullName = firstName  +" "+ lastName;

document.write(fullName);


// ======Chapter 21 - 25=========== task 2

var mobileModel = prompt("Enter Your favorite Mobile Model");
var samsung = "Length of String : 28";
document.write( "My favorite mobile is " + mobileModel+ samsung)


// ======Chapter 21 - 25===========task 3
 var name = "Pakistani";
document.write("String : " + name+"<br>")
 document.write("Index of n :"+name.indexOf("n"))


// ======Chapter 21 - 25===========task 4

var string = "Hello World";
document.write("String : " +string +"<br>");
document.write ("Last Index of I : "+ name.indexof("l"));

// ======Chapter 21 - 25===========task 5
var name = "Pakistani";
document.write("String : " + name+"<br>")
 document.write("Index of 3 :"+name.indexOf("i"))

// ======Chapter 21 - 25=========== task 7

var city = "hyderabad";
var res = city.replaceAll('hyderabad','islamabad');
document.write("City :" + city + "<Br>") 
document.write("after Replace " + res)

// ======Chapter 21 - 25===========task 8;

var msg = "Ali and Sami are the Best Friends. They play cricket and football togethers";
var msg1= msg.replaceAll('and', '&')
document.write(msg1)


// ======Chapter 21 - 25=========== task 9

var num = "472";
var string =num.toString();
document.write("Value : " + num +"<br>");
document.write("Type : number"+"<br>");
document.write("Value : " +string+"<br>")
document.write("Type : "  +"String")



// ======Chapter 21 - 25=========== task 10

var input=prompt("Enter Your Text");
var upperCase = input.toUpperCase();
document.write("User Input :" + input +"<br>")
document.write( "UpperCase : "+upperCase)


// ======Chapter 21 - 25===========task 11

var input=prompt("Enter Your Text");

var firstChar = input.splice(0,1);
firstchar= firstChar.toUpperCase();
var otherChar = city.splice(1)
otherChar = otherChar.toLowerCase();
var input = firstChar+otherChar;
document.write(input)


// ======Chapter 21 - 25=========== task 12
var num = 35.36;
var string =num.toString();
document.write(num)


// ======Chapter 21 - 25===========task 13

var char = prompt("Please Enter your name");
var ch = char.charCodeAt(0);
for ( ch  = 0 ; ch < char.length; ch++){
    if(ch==33 || ch== 44){
        document.write("please enter a volid username .dont use '!'");
        break;
    }
    else{
        document.write('Your username is valid thanks')
    }
}

 

// ======Chapter 21 - 25===========task 15


function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Z, a-z, 0-9]/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}




// ======Chapter 21 - 25=========== task 16

var university = "University of Karachi";
var result = universiry.split(" ");
document.write(university);




// ======Chapter 21 - 25=========== task 17
var user = "Pakistan";
var result = user.charAt(7);
document.write("User Input :" + user +"<br>");
document.write("Last Character of input:" + result)




// =========chapter 26 - 30===========


// =========chapter 26 - 30=========== task 1

var number = 3.45214;
var roundOfValue = Math.floor(number);
var ceil= Math.ceil(number);
document.write("Number :"+ number + "<br>")
document.write("round of value :" +roundOfValue + "<br>")
document.write("floor Value :" + roundOfValue + "<br>")
document.write("ceil value :" + ceil)



// =========chapter 26 - 30===========task 2


var number = -2.673;
var roundOfValue = Math.floor(number);
var ceil= Math.ceil(number);
document.write("Number :"+ number + "<br>")
document.write("round of value :" +roundOfValue + "<br>")
document.write("floor Value :" + roundOfValue + "<br>")
document.write("ceil value :" + ceil)



// =========chapter 26 - 30=========== task 3


var val1= Math.abs(-4);
var val2 =Math.abs(4);
document.write(val1);
document.write(val2);



// =========chapter 26 - 30=========== task 6


var random=  Math.floor((Math.random() * 100) + 1);
document.write(random)

// =========chapter 26 - 30=========== task 7
var weight = prompt("Enter Your Age in Kilogram");


// =========chapter 26 - 30=========== task 8


var secratNo = 3;
var input = +prompt("Enter Your Number");
if(secratNo===input){
    alert("Congratulation")
}
else{
    alert("Try Again")
}


// ========Chapter 31 - 34=========
// ========Chapter 31 - 34========= task 1


var time = new Date();
document.write(time)


// ========Chapter 31 - 34========= task 2


var time = new Date()
var time1 = time.getMonth();
document.write("current month :" +time1)




// ========Chapter 31 - 34=========task 3

var day=  new Date()
var day1 = day.getDay();
document.write("Today is  " + day1)



// ========Chapter 31 - 34========= task 4

var input = prompt("Enter Day");
if(input === "sunday"){
    alert("it's fun day")
}
else if(input === "saturday"){
    alert("its fun day")
}
else{
    alert("none")
}



// ========Chapter 31 - 34=========task 5


var input = prompt("enter date");
if(input < 16){
    alert("first fifteen day of month")
}
else{
    alert("last day of the month")
}



// ========Chapter 31 - 34========= task 6

var dob = new Date("jan 1970")
var dobmili =  dob.getTime();
var today =  new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var acuage = Math.floor(diff/(1000*60*60*24*30))
document.write(accuage);


// ========Chapter 31 - 34=========task  13

var input = prompt("Enter your age");
var input2 = 2020 - input;
document.write("your age is :" + input+ "<br>")
document.write("Your birth year is : " + input2)


// ========Chapter 31 - 34========= task 14

var customerName = prompt("Enter Your Name");
var month = prompt("current month");
var number = prompt("No of unit");
var charg = prompt("charge per unit");
var netBill =number*charg;
var latePayment = 350;
var grossAmount = netBill+latePayment;
document.write("Customer Name : " +customerName +"<br>")
document.write("Month" + month  +"<br>")
document.write("Number of Unit : " + number +"<br>")
document.write("Charge Per Unit :" +charg +"<br>")
document.write("Net Amount Payable (with due Date) :"+ netBill +"<br>")
document.write("Late Payment surecharge : "+ latePayment +"<br>")
document.write("Gross amount payable (after due date) :"+ grossAmount)



// ========== chapter 35 - 38============
//========== chapter 35 - 38============ task 1

var today =  new Date();
document.write(today);


//========== chapter 35 - 38============task 2

var firstName = "jameel";
var lastName = "ahmed";
var fullName = firstName+lastName;
document.write(fullName)


//========== chapter 35 - 38============ task 3

var no1= +prompt("Enter value 1");
var no2 =+prompt("Enter value 2");
var sum = no1+no2;
document.write("sum of two value is : " + sum)


//========== chapter 35 - 38============task 4

var val1 = prompt("Enter 1st value")
var val2 = prompt("Enter 2nd value")
var sign = prompt("enter Operator")
document.write(val1 + sign + val2)
if(sign === "+"){
    alert((+val1)+(+val2));
}
else if(sign=== "-"){
    alert(val1-val2);
}
else if(sign==="*"){
    alert(val1*val2);
}
else if(sign === "/"){
    alert(val1/val2);
}



//========== chapter 35 - 38============task 5

//parameter
function one(){
  
}
//arguments
one()


//========== chapter 35 - 38============ task 6

function add(b,a){
    alert(b+a);
}
add(5,4)


//========== chapter 35 - 38============ task 7
  
var startValue = +prompt("enter start value");
var lastValue = +prompt("enter last value")
function add(a){
    for (a = startValue ; a <= lastValue ; a++ )
    document.write(a+"<br>")
}
add();

//========== chapter 35 - 38============ task 9

var width = +prompt("Enter width");
var height= +prompt("Enter height");
var area = width*height;
function area1(){
    document.write(area)
}
area1();


//========== chapter 35 - 38============ task 10

var word = prompt("Enter Your word");
var check = "";
function call(){
for (var i = word.length -1 ; i >=0 ; i--){
    check += word[i]
}
if(word === check){
    document.write(word + " is a palindrome word")
}
}
call();


//========== chapter 35 - 38============ task 11

function titleCase(word) {
    var splitStr = word.toLowerCase().split("the quick brown fox");
  
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr.length[i] < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase();
      }
  document.write(splitStr)
    }
  
    return word;
  }
  titleCase();   


// ========== chapter 38 - 42 ============ task 1


// function power(a , b);

// {
// 	var no1,no2,result;
// 	document.write("Enter two numbers for base and exponent: ");
// 	scanf("%d %d",&no1,&no2);

// 	result=power(no1,no2);
// 	printf("\nThe Result of %d^%d is : %d",no1,no2,result);
// 	}
// int power(int x,int y)
// {
// 	int val,i;
// 	val=1;
// 	for(i=1;i<=y;i++)
// 	{
// 		val=val*x;
// 	}
// 	return val;
// }



// ========== chapter 38 - 42 ============ task 2
function leapYear(year){
    var years;
    years = document.write("Enter year");
    if (years=2012){
      alert("leap year")
    }
    else if(years=2016){
        alert("leap year")
    }
    else if(years=2020){
        alert("leap year")
    }
    else{
      alert("not a leap year")
    }
  leapYear();
 }



// ========== chapter 38 - 42 ============ task 3

class Test 
// { 
//     static float findArea(float a, float b, float c) 
//     { 
       
//         if (a < 0 || b < 0 || c <0 || (a+b <= c) || 
//             a+c <=b || b+c <=a) 
//         { 
//             System.out.println("Not a valid triangle"); 
//             System.exit(0); 
//         } 
//         float s = (a+b+c)/2; 
//         return (float)Math.sqrt(s*(s-a)*(s-b)*(s-c)); 
//     } 
          

//     public static void main(String[] args)  
//     { 
//         float a = 3.0f; 
//         float b = 4.0f; 
//         float c = 5.0f; 
      
//         System.out.println("Area is " + findArea(a, b, c)); 
//     } 
// } 

// ========== chapter 38 - 42 ============ task 6
function disemvowel(string){

  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };

  let result = "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iure mollitia, quia ";

  for (let i = 0; i < string.length; i++) {
    let letter = string[i].toLowerCase();
    if (!vowels[letter]) {
      result += string[i];
    }
  };
  return result;
};



// ========== chapter 38 - 42 ============ task 7

function countOccurrences() {
  var str = " “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui ";
  var count = 0;

  switch (str) {
      case 'a':
          count++;
      case 'A':
          count++
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
          return 1;
      default:
          return 0;
  }
}

countOccurrences();


// ========== chapter 43 - 48 ============ task 1

function showAlert() {
  var myText = "Hellow world";
  alert (myText);
}

// ========== chapter 43 - 48 ============ task 2

function toggleClock() {
    var mobile = document.getElementById('mobile');

    var displaySetting = mobile.style.display;
    var mobileButton = document.getElementById('mobileButton');

    if (displaySetting == 'block') {
    
      mobile.style.display = 'none';
      mobileButton.innerHTML = 'Show clock';
    }
    else {

      mobile.style.display = 'block';
      mobileButton.innerHTML = 'Hide clock';
    }
  }

// ========== chapter 43 - 48 ============ task 3

    function SomeDeleteRowFunction(o) {
     
     var p=o.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }

// ========== chapter 43 - 48 ============ task 4

let currentElem = null;

table.onmouseover = function(event) {

  if (currentElem) return;

  let target = event.target.closest('td');

  if (!target) return;

  if (!table.contains(target)) return;


  currentElem = target;
  onEnter(currentElem);
};
table.onmouseout = function(event) {

  if (!currentElem) return;
  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;
    relatedTarget = relatedTarget.parentNode;
  }
  onLeave(currentElem);
  currentElem = null;
};
function onEnter(elem) {
  elem.style.background = 'pink';
  text.value += `over -> ${currentElem.tagName}.${currentElem.className}\n`;
  text.scrollTop = 1e6;
}
function onLeave(elem) {
  elem.style.background = '';
  text.value += `out <- ${elem.tagName}.${elem.className}\n`;
  text.scrollTop = 1e6;
}


// ========== chapter 43 - 48 ============ task 5


var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};




// ========== chapter 49 - 52 ============ task 1
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }



// ========== chapter 49 - 52 ============ task 2

function readMore(){
    var text = document.getElementById('text').innerHTML;
    var paragraph = document.getElementById('para')
    paragraph.innerHTML = text
}


// ========== chapter 49 - 52 ============ task 3


function addRow() {
    var empTab = document.getElementById('empTable');

    var rowCnt = empTab.rows.length;   
    var tr = empTab.insertRow(rowCnt); 
    tr = empTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) {
        var td = document.createElement('td');         
        td = tr.insertCell(c);

        if (c == 0) { 
            var button = document.createElement('input');

        
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

          
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        }
        else {
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');

            td.appendChild(ele);
        }
    }
}


// ========== chapter 52 - 57 ============ task 2

function incr(){
    var para1 = document.getElementById("para1")
    var css = window.getComputedStyle(para1,null).getPropertyValue("font-size")
    para1.style.fontsize = parseInt(css)+10+"px"
}

function decr(){
    var para1 = document.getElementById("para1")
    var css = window.getComputedStyle(para1,null).getPropertyValue("font-size")
    para1.style.fontsize = parseInt(css)-10+"px"
}
