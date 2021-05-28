var
	canvas = document.getElementById('myCanvas') ;
ctx = canvas.getContext("2d");
	
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car_y = 10;

car2_width = 20;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
	
	canvas
var


function add() {
background_imgTag = new Image(); //defining a variable with a new image
background_imgTag.onload = uploadBackground; //setting a function, onloading this variable
background_imgTag.src = background_image; //load image

car1_imgTag = new Image(); //defining a variable with a new image
car1_imgTag.onload = uploadcar1; //setting a function, onloading this variable
car1_imgTag.src = car1_image; //load image
}
function uploadBackground() {
     ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); }


function uploadcar1() {
     ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height); }

window.addEventListener("keydown", my_keydown);


function my_keydown(e)
 { 
    keyPressed = e.keyCode; console.log(keyPressed);

    if(keyPressed == '38') { up(); console.log("up");
 }
    if(keyPressed == '40') { down(); console.log("down"); 
}
    if(keyPressed == '37') { left(); console.log("left");
 }
    if(keyPressed == '39') { right(); console.log("right");
 }}  
    
function car1_up()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();

    }



}

function car1_down()
{
    if(car1_y <=500)
    {
        car1_y +=10;
console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
uploadcar2();

    }



}

function car1_left()
{
    if(car1_x >=0)
    {

        car1_x =car1_x -  10;
console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadBackground();
uploadcar1();
uploadcar2();
    }



}
function car1_down()
{
    if(car1_y <=500)
    {
        car1_y +=10;
console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
upladBackground();
uploadcar1();
uploadcar2();
    }
my_keydown 
    if (car1_x > 700) {
console.log("car1 Won");
dicument.getElementById('game_status').innerHTML = " car 1 Won!!!";        
    }
}



