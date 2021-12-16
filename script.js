window.addEventListener("load", () =>{

var painting = document.getElementById("myCanvas");
var c = painting.getContext("2d");

/*
//x=0 y=0 coordinates
c.moveTo(0,0);
//x=100 y=50 coordinates
c.lineTo(100,50);
//draw line
c.stroke();


// preview how to draw a cline line
//x=0 y=100
c.moveTo(0,100);
//x=100 y=0
c.lineTo(100,0);
c.stroke();

*/

//circle
//draw circle with center click any where in canvas
//radius deffined 40px
//------------------------------------------------

let choseX = 0;
let choseY = 0;
function drawCircle(e){

//draw backgr rectangle with white fill corresponding canvas width and height
c.beginPath();
c.fillStyle = "white";
c.fillRect(0,0,200,200);
c.fill();

//make a click in canvas, and define value of radius


    
	 
	 
	 
	 
	 

 /*   //////////switch for chosen x coordinates gradient
        
        switch (Math.floor(((e.clientX) / 0.5 / 100))){
       
               case 0: choseX = 50; break;
               case 1: choseX = 150; break;
  					
            };  

    ///switch for chosen y coordinates gradient
    
        switch (Math.floor(((e.clientY) / 0.5 / 100))){
       
               case 0: choseY = 50; break;
               case 1: choseY = 150; break;
              
            };
*/

//try if statement
if (e.clientX < 100 && e.clientY < 100){choseX = 50;choseY = 50;}
else if (e.clientX > 100 && e.clientY < 100){choseX = 150;choseY = 50;}
else if (e.clientX < 100 && e.clientY > 100){choseX = 50;choseY = 150;}
else {choseX = 150;choseY = 150;};

let radiusCircle = 40;

c.beginPath();
c.arc(choseX, choseY,radiusCircle,0,2*Math.PI);
c.stroke();



//end coordinates for horizontal line are dependent on clicking x coordinates plus the previously defined rdius.
let xRadEnd = choseX + radiusCircle;

//draw line
c.beginPath();
c.moveTo(choseX,choseY);
c.lineTo(xRadEnd,choseY);
c.stroke();

};

//add event listener for mouseclick or touch screen 
painting.addEventListener("mousedown", drawCircle);


});