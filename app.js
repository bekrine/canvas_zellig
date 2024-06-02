const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;


canvas.width = canvasWidth;
canvas.height = canvasHeight;
const squareX = 300


let numberSquareXaxes = Math.ceil(canvasWidth/300)
let numberSquareYaxes = Math.ceil(canvasHeight/300)

let arraySquaresY = Array.from({length:numberSquareYaxes},(_,i)=>i)
let arraySquaresX = Array.from({length:numberSquareXaxes},(_,i)=>i)
arraySquaresY.forEach((item,indexY)=>{
  arraySquaresX.forEach((item,indexX)=>{
    sqrs(indexX,indexY)
  
  })
})

  // First

function drawBars(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter+squareX,yCenter);
   context.lineTo(xCenter+(squareX-40), yCenter+(squareX-260));
    context.lineTo(xCenter+(squareX-40), yCenter+(squareX-40));
    context.lineTo(xCenter+(squareX-260), yCenter+(squareX-40));
   context.lineTo(xCenter, yCenter+squareX);
  context.stroke();
}
function drawBarsright(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter,yCenter);
   context.lineTo(xCenter+(squareX-260), yCenter+(squareX-260));
     context.lineTo(xCenter+(squareX-260), yCenter+(squareX-40));
     context.lineTo(xCenter+(squareX-40), yCenter+(squareX-40));
      context.lineTo(xCenter+squareX, yCenter+squareX);
  context.stroke();
}
function drawBarsBottomleft(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter,yCenter);
  context.lineTo(xCenter+(squareX-260), yCenter+(squareX-260));
   context.lineTo(xCenter+(squareX-40), yCenter+(squareX-260));
   context.lineTo(xCenter+(squareX-40), yCenter+(squareX-40));
     context.lineTo(xCenter+squareX, yCenter+squareX);
  context.stroke();
}
function drawBarsBottomRight(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter+squareX,yCenter);
  context.lineTo(xCenter+(squareX-40), yCenter+(squareX-260));
   context.lineTo(xCenter+(squareX-260), yCenter+(squareX-260));
   context.lineTo(xCenter+(squareX-260), yCenter+(squareX-40));
     context.lineTo(xCenter, yCenter+squareX);
  context.stroke();
}
// seconde
function drawStars(xCenter,yCenter) {
  context.beginPath();
  context.moveTo((xCenter+squareX),yCenter+(squareX-80));
  context.lineTo(xCenter+(squareX-80), yCenter);
   context.lineTo(xCenter+(squareX - 120),yCenter+(squareX-260));
     context.lineTo(xCenter+(squareX-260), yCenter+(squareX-260));
    context.lineTo(xCenter+(squareX-260), yCenter+(squareX-120));
    context.lineTo(xCenter,yCenter+(squareX-95));
   context.lineTo(xCenter+(squareX-80), yCenter+squareX );
  context.stroke();
}
function drawStarsRight(xCenter,yCenter) {
  context.beginPath();
  context.moveTo(xCenter,yCenter+(squareX-80));
  context.lineTo(xCenter+(squareX-220), yCenter);
  context.lineTo(xCenter+(squareX - 180),yCenter+(squareX-260));
    context.lineTo(xCenter+(squareX-40), yCenter+(squareX-260));
     context.lineTo(xCenter+(squareX-40), yCenter+(squareX-120));
    context.lineTo(xCenter+squareX,yCenter+(squareX-95));
    context.lineTo(xCenter+(squareX-220), yCenter+squareX );
  context.stroke();
}
function drawStarsBottomLeft(xCenter,yCenter) {
  context.beginPath();
  context.moveTo(xCenter+(squareX-80),yCenter);
  context.lineTo(xCenter, yCenter+(squareX-220));
   context.lineTo(xCenter+(squareX - 260),yCenter+(squareX-180));
     context.lineTo(xCenter+(squareX-260), yCenter+(squareX-40));
      context.lineTo(xCenter+(squareX-100), yCenter+(squareX-40));
    context.lineTo(xCenter+(squareX - 80),yCenter+squareX);
     context.lineTo(xCenter+squareX, yCenter+(squareX-180 ));
  context.stroke();
}
function drawStarsBottomRight(xCenter,yCenter) {
  context.beginPath();
  context.moveTo(xCenter+(squareX-220),yCenter);
  context.lineTo(xCenter+squareX, yCenter+(squareX-220));
    context.lineTo(xCenter+(squareX - 40),yCenter+(squareX-180));
     context.lineTo(xCenter+(squareX-40), yCenter+(squareX-40));
    context.lineTo(xCenter+(squareX-180), yCenter+(squareX-40));
     context.lineTo(xCenter+(squareX - 220),yCenter+squareX);
    context.lineTo(xCenter, yCenter+(squareX-180 ));
  context.stroke();
}
// theerd
function TopLines(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter+squareX,yCenter+(squareX -80));
  context.lineTo(xCenter+(squareX-20), yCenter+(squareX-60));
   context.lineTo(xCenter, yCenter+(squareX-240));
  context.stroke();
}
function TopLinesRight(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter,yCenter+(squareX- 80));
  context.lineTo(xCenter+(squareX-280), yCenter+(squareX-60));
  context.lineTo(xCenter+squareX, yCenter+(squareX-240));
  context.stroke();
}
function TopLinesBottomLeft(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter+(squareX-90),yCenter);
  context.lineTo(xCenter+(squareX-70), yCenter+(squareX-280));
  context.lineTo(xCenter+(squareX-210), yCenter+squareX);
  context.stroke();
}
function TopLinesBottomRight(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter+(squareX-210),yCenter);
  context.lineTo(xCenter+(squareX-230), yCenter+(squareX-280));
 context.lineTo(xCenter+(squareX-90), yCenter+squareX);
  context.stroke();
}
// last

function bottomLines(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter+(squareX - 90),yCenter+squareX);
  context.lineTo(xCenter+(squareX - 70), yCenter+(squareX - 20));
   context.lineTo(xCenter+(squareX - 210), yCenter);
  context.stroke();
}

function bottomLinesRight(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter+(squareX - 210),yCenter+squareX);
  context.lineTo(xCenter+(squareX - 230), yCenter+(squareX - 20));
   context.lineTo(xCenter+(squareX - 90), yCenter);
  context.stroke();
}
 
function bottomLinesBottomLeft(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter+squareX,yCenter+(squareX - 220));
  context.lineTo(xCenter+(squareX - 20), yCenter+(squareX - 250));
  context.lineTo(xCenter, yCenter+(squareX - 90));
  context.stroke();
}
function bottomLinesBottomRight(xCenter,yCenter){
  context.beginPath();
  context.moveTo(xCenter,yCenter+(squareX - 220));
  context.lineTo(xCenter+(squareX - 270), yCenter+(squareX - 250));
   context.lineTo(xCenter+squareX, yCenter+(squareX - 90));
  context.stroke();
}
 


function drawShapeTopLaft(indexX,indexY){
  drawBars(indexX * squareX,indexY * squareX)
  drawStars(indexX * squareX,indexY * squareX)
  TopLines(indexX * squareX,indexY * squareX)
  bottomLines(indexX * squareX,indexY * squareX)
}
function drawShapeTopRight(indexX,indexY){
  drawBarsright(indexX * squareX,indexY * squareX)
  drawStarsRight(indexX * squareX,indexY * squareX)
  TopLinesRight(indexX * squareX,indexY * squareX)
  bottomLinesRight(indexX * squareX,indexY * squareX)
}

function drawShapeBottomleft(indexX,indexY){
  drawBarsBottomleft(indexX * squareX,indexY * squareX)
  drawStarsBottomLeft(indexX * squareX,indexY * squareX)
  TopLinesBottomLeft(indexX * squareX,indexY * squareX)
  bottomLinesBottomLeft(indexX * squareX,indexY * squareX)
}
function drawShapeBottomRight(indexX,indexY){
  drawBarsBottomRight(indexX * squareX,indexY * squareX)
  drawStarsBottomRight(indexX * squareX,indexY * squareX)
  TopLinesBottomRight(indexX * squareX,indexY * squareX)
  bottomLinesBottomRight(indexX * squareX,indexY * squareX)
}

function sqrs(indexX,indexY,){
  context.save();
  context.strokeRect((indexX*300),(indexY*300), 300,300);
  
  if((!(indexX % 2 )) && !(indexY % 2) ){
    drawShapeTopLaft(indexX,indexY)
  }
   if(indexX % 2  && !(indexY % 2)  ){
      drawShapeTopRight(indexX,indexY)
  } if((!(indexX % 2 )) && indexY % 2){
    drawShapeBottomleft(indexX,indexY)
  }
   if(indexX % 2  && indexY % 2){
    drawShapeBottomRight(indexX,indexY)
  
  }
  context.restore();

}

// function drawForhtdquare(){
//   context.save();
//   // context.translate((canvasWidth/2)+150,(canvasHeight/2)+150);
//   context.strokeRect(canvasWidth/2-300, canvasHeight/2-300, 300,300);
//   drawLines4()
//    drawStar4()
//   drawTopLine4()
//    drawBottomLine4()
//   context.restore();
// }
// function drawTheerdquare(){
//   context.save();
//   // context.translate((canvasWidth/2)+150,(canvasHeight/2)+150);
//   context.strokeRect(canvasWidth/2, canvasHeight/2-300, 300,300);
//   drawLines3()
//   drawStar3()
//   drawTopLine3()
//   drawBottomLine3()
//   context.restore();
// }
// function drawfirstsquare(){
//   context.save();
//   // context.translate((canvasWidth/2)+150,(canvasHeight/2)+150);
//   context.strokeRect(canvasWidth/2, canvasHeight/2, 300,300);
//   drawLines()
//   drawStar()
//   drawTopLine()
//   drawBottomLine()
//   context.restore();
// }

// function drawSocendSquare(){
//   context.save();
//   // context.translate((canvasWidth/2)+150,(canvasHeight/2)+150);
//   // context.rotate((90 * Math.PI) / 180)
//   context.strokeRect(canvasWidth/2-300, canvasHeight/2, 300,300);
//   drawLines2()
//   drawStar2()
//   drawTopLine2()
//   drawBottomLine2()
//   context.restore();
// }
// function test(){
//   context.save();
//   // context.translate((canvasWidth/2)+150,(canvasHeight/2)+150);
//   // context.rotate((90 * Math.PI) / 180)
//   context.strokeRect(canvasWidth/2-600, canvasHeight/2, 300,300);
//   drawLinesT()
//    drawStarT()
//    drawTopLineT()
//    drawBottomLineT()
//   context.restore();
// }

// function draw(){
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   drawfirstsquare()
//   drawSocendSquare()
//   drawTheerdquare()
//   drawForhtdquare()
//   test()
// }

// draw()


// function drawBottomLineT() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-600,canvasHeight/2+80);
//   context.lineTo(canvasWidth/2-590, canvasHeight/2+60);
//   context.lineTo(canvasWidth/2-300, canvasHeight/2+230);
//   context.stroke();
// }
// function drawBottomLine3() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2,canvasHeight/2-80);
//   context.lineTo(canvasWidth/2+10, canvasHeight/2-60);
//   context.lineTo(canvasWidth/2+300, canvasHeight/2-230);
//   context.stroke();
// }
// function drawBottomLine() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2,canvasHeight/2+80);
//   context.lineTo(canvasWidth/2+10, canvasHeight/2+60);
//   context.lineTo(canvasWidth/2+300, canvasHeight/2+230);
//   context.stroke();
// }
//   function drawBottomLine4() {
//     context.beginPath();
//     context.moveTo(canvasWidth/2,canvasHeight/2-80);
//     context.lineTo(canvasWidth/2-10, canvasHeight/2-60);
//     context.lineTo(canvasWidth/2-300, canvasHeight/2-230);
//     context.stroke();
//   }
// function drawBottomLine2() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2,canvasHeight/2+80);
//   context.lineTo(canvasWidth/2-10, canvasHeight/2+60);
//   context.lineTo(canvasWidth/2-300, canvasHeight/2+230);
//   context.stroke();
// }

// function drawTopLineT() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-520,canvasHeight/2);
//   context.lineTo(canvasWidth/2-540, canvasHeight/2+10);
//   context.lineTo(canvasWidth/2-370, canvasHeight/2+300);
//   context.stroke();
// }
// function drawTopLine3() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2+80,canvasHeight/2);
//   context.lineTo(canvasWidth/2+60, canvasHeight/2-10);
//   context.lineTo(canvasWidth/2+230, canvasHeight/2-300);
//   context.stroke();
// }
// function drawTopLine() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2+80,canvasHeight/2);
//   context.lineTo(canvasWidth/2+60, canvasHeight/2+10);
//   context.lineTo(canvasWidth/2+230, canvasHeight/2+300);
//   context.stroke();
// }
// function drawTopLine4() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-80,canvasHeight/2);
//   context.lineTo(canvasWidth/2-60, canvasHeight/2-10);
//   context.lineTo(canvasWidth/2-230, canvasHeight/2-300);
//   context.stroke();
// }
// function drawTopLine2() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-80,canvasHeight/2);
//   context.lineTo(canvasWidth/2-60, canvasHeight/2+10);
//   context.lineTo(canvasWidth/2-230, canvasHeight/2+300);
//   context.stroke();
// }
// function drawLinesT() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-300,canvasHeight/2);
//   context.lineTo(canvasWidth/2-325, canvasHeight/2+40);
//    context.lineTo(canvasWidth/2-560, canvasHeight/2+40);
//    context.lineTo(canvasWidth/2-560, canvasHeight/2+285);
//    context.lineTo(canvasWidth/2-600, canvasHeight/2+300);
//   context.stroke();
// }
// function drawLines() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2+300,canvasHeight/2);
//   context.lineTo(canvasWidth/2+285, canvasHeight/2+40);
//   context.lineTo(canvasWidth/2+40, canvasHeight/2+40);
//   context.lineTo(canvasWidth/2+40, canvasHeight/2+285);
//   context.lineTo(canvasWidth/2, canvasHeight/2+300);
//   context.stroke();
// }
// function drawLines2() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-300,canvasHeight/2);
//   context.lineTo(canvasWidth/2-285, canvasHeight/2+40);
//    context.lineTo(canvasWidth/2-40, canvasHeight/2+40);
//    context.lineTo(canvasWidth/2-40, canvasHeight/2+285);
//    context.lineTo(canvasWidth/2, canvasHeight/2+300);
//   context.stroke();
// }
// function drawLines4() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-300,canvasHeight/2);
//   context.lineTo(canvasWidth/2-285, canvasHeight/2-40);
//    context.lineTo(canvasWidth/2-40, canvasHeight/2-40);
//    context.lineTo(canvasWidth/2-40, canvasHeight/2-285);
//    context.lineTo(canvasWidth/2, canvasHeight/2-300);
//   context.stroke();
// }
// function drawLines3() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2+300,canvasHeight/2);
//   context.lineTo(canvasWidth/2+285, canvasHeight/2-40);
//    context.lineTo(canvasWidth/2+40, canvasHeight/2-40);
//    context.lineTo(canvasWidth/2+40, canvasHeight/2-285);
//    context.lineTo(canvasWidth/2, canvasHeight/2-300);
//   context.stroke();
// }

// function drawStarT() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-580,canvasHeight/2);
//   context.lineTo(canvasWidth/2-300, canvasHeight/2+80);
//    context.lineTo(canvasWidth/2-360, canvasHeight/2+100);
//    context.lineTo(canvasWidth/2-360, canvasHeight/2+260);
//    context.lineTo(canvasWidth/2-490, canvasHeight/2+260);
//    context.lineTo(canvasWidth/2-520, canvasHeight/2+300);
//   context.lineTo(canvasWidth/2-600, canvasHeight/2+80);
//   context.stroke();
// }
// function drawStar3() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2+80,canvasHeight/2);
//   context.lineTo(canvasWidth/2+300, canvasHeight/2-80);
//   context.lineTo(canvasWidth/2+260, canvasHeight/2-100);
//   context.lineTo(canvasWidth/2+260, canvasHeight/2-260);
//   context.lineTo(canvasWidth/2+110, canvasHeight/2-260);
//   context.lineTo(canvasWidth/2+80, canvasHeight/2-300);
//   context.lineTo(canvasWidth/2, canvasHeight/2-80);
//   context.stroke();
// }

// function drawStar() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2+80,canvasHeight/2);
//   context.lineTo(canvasWidth/2+300, canvasHeight/2+80);
//   context.lineTo(canvasWidth/2+260, canvasHeight/2+100);
//   context.lineTo(canvasWidth/2+260, canvasHeight/2+260);
//   context.lineTo(canvasWidth/2+110, canvasHeight/2+260);
//   context.lineTo(canvasWidth/2+80, canvasHeight/2+300);
//   context.lineTo(canvasWidth/2, canvasHeight/2+80);
//   context.stroke();
// }
// function drawStar4() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-80,canvasHeight/2);
//   context.lineTo(canvasWidth/2-300, canvasHeight/2-80);
//   context.lineTo(canvasWidth/2-260, canvasHeight/2-100);
//   context.lineTo(canvasWidth/2-260, canvasHeight/2-260);
//   context.lineTo(canvasWidth/2-110, canvasHeight/2-260);
//   context.lineTo(canvasWidth/2-80, canvasHeight/2-300);
//   context.lineTo(canvasWidth/2, canvasHeight/2-80);
//   context.stroke();
// }
// function drawStar2() {
//   context.beginPath();
//   context.moveTo(canvasWidth/2-80,canvasHeight/2);
//   context.lineTo(canvasWidth/2-300, canvasHeight/2+80);
//   context.lineTo(canvasWidth/2-260, canvasHeight/2+100);
//   context.lineTo(canvasWidth/2-260, canvasHeight/2+260);
//   context.lineTo(canvasWidth/2-110, canvasHeight/2+260);
//   context.lineTo(canvasWidth/2-80, canvasHeight/2+300);
//   context.lineTo(canvasWidth/2, canvasHeight/2+80);
//   context.stroke();
// }


// function drawTriangleRightBottomRight(){
//     context.beginPath();
//     context.moveTo(xTriangleCenter+210, yTriangleCenter);
//     context.lineTo(xTriangleCenter+210, yTriangleCenter+210);
//     context.lineTo(xTriangleCenter, yTriangleCenter);
//     context.lineTo(xTriangleCenter+210, yTriangleCenter);
//     context.stroke();
//   }
// function drawTriangleRightBottomLeft(){
//   context.beginPath();
//   context.moveTo(xTriangleCenter, yTriangleCenter);
//   context.lineTo(xTriangleCenter, yTriangleCenter+210);
//   context.lineTo(xTriangleCenter+210, yTriangleCenter+210);
//   context.lineTo(xTriangleCenter, yTriangleCenter);
//   context.stroke();
//   }
// function drawTriangleLeftBottomLeft(){
//   context.beginPath();
//   context.moveTo(xTriangleCenter, yTriangleCenter);
//   context.lineTo(xTriangleCenter-210,yTriangleCenter+210);
//   context.lineTo(xTriangleCenter,yTriangleCenter+210);
//   context.lineTo(xTriangleCenter,yTriangleCenter);
//   context.stroke();
//   }
// function drawTriangleLeftBottomRight(){
//   context.beginPath();
//   context.moveTo(xTriangleCenter, yTriangleCenter);
//   context.lineTo(xTriangleCenter-210, yTriangleCenter);
//   context.lineTo(xTriangleCenter-210, yTriangleCenter+210);
//   context.lineTo(xTriangleCenter, yTriangleCenter);
//   context.stroke();
//   }

// function outLeftLne(){
//   drawLine(xTriangleCenter+(210 * 0.6667),yTriangleCenter,xTriangleCenter+(210 * 0.6667),yTriangleCenter+(210 * 0.6667));
// }
// function outLeftLne1(){
//   drawLine(xTriangleCenter,yTriangleCenter+(210 * 0.6667),xTriangleCenter+(210 * 0.6667),yTriangleCenter+(210 * 0.6667));
// }
// function outLeftLne2(){
//   drawLine(xTriangleCenter,yTriangleCenter+(210 * 0.6667),xTriangleCenter-(210 * 0.6667),yTriangleCenter+(210 * 0.6667));
// }


// function dawnLine(){
  
//   drawLine(xTriangleCenter+20 ,yTriangleCenter+20,xTriangleCenter+(210 * 0.6667),yTriangleCenter+20);
//   drawLine(xTriangleCenter+34 ,yTriangleCenter+34,xTriangleCenter+(210 * 0.6667),yTriangleCenter+34);

// }
// function dawnLine1(){
  
//   drawLine(xTriangleCenter+20,yTriangleCenter+20,xTriangleCenter+20 ,yTriangleCenter+(210 * 0.6667));
//  drawLine(xTriangleCenter+34,yTriangleCenter+34,xTriangleCenter+34 ,yTriangleCenter+(210 * 0.6667));

// }
// function dawnLine2(){
  
//   drawLine(xTriangleCenter-20,yTriangleCenter+20,xTriangleCenter-20,yTriangleCenter+(210 * 0.6667));
//  drawLine(xTriangleCenter-34 ,yTriangleCenter+34,xTriangleCenter-34,yTriangleCenter+(210 * 0.6667));

// }



// function theerdLine(){
//   drawLine(xTriangleCenter+(210 * 0.6667),yTriangleCenter+64,xTriangleCenter+50,yTriangleCenter);
//   drawLine(xTriangleCenter+(210 * 0.6667),yTriangleCenter+78,xTriangleCenter+36,yTriangleCenter);
// }
// function theerdLine1(){
//   drawLine(xTriangleCenter,yTriangleCenter+50,xTriangleCenter+64,yTriangleCenter+(210 * 0.6667));
//   drawLine(xTriangleCenter,yTriangleCenter+36,xTriangleCenter+78,yTriangleCenter+(210 * 0.6667),);
// }
// function theerdLine2(){
//   drawLine(xTriangleCenter,yTriangleCenter+50,xTriangleCenter-64,yTriangleCenter+(210 * 0.6667));
//    drawLine(xTriangleCenter,yTriangleCenter+36,xTriangleCenter-78,yTriangleCenter+(210 * 0.6667),);
// }



// function forthLine(){
//   drawLine(xTriangleCenter+(210 * 0.6667)-10,yTriangleCenter,xTriangleCenter+(210 * 0.6667)-30,yTriangleCenter+(210 * 0.6667)-30 );
//   drawLine(xTriangleCenter+(210 * 0.6667)-24,yTriangleCenter,xTriangleCenter+(210 * 0.6667)-44,yTriangleCenter+(210 * 0.6667)-44 );
// }
// function forthLine1(){
//   drawLine(xTriangleCenter,yTriangleCenter+(210 * 0.6667)-10 ,xTriangleCenter+(210 * 0.6667)-30,yTriangleCenter+(210 * 0.6667)-30);
//    drawLine(xTriangleCenter,yTriangleCenter+(210 * 0.6667)-24,xTriangleCenter+(210 * 0.6667)-44,yTriangleCenter+(210 * 0.6667)-44 );
// }
// function forthLine2(){
//   drawLine(xTriangleCenter,yTriangleCenter+(210 * 0.6667)-10 ,xTriangleCenter-(210 * 0.6667)-30,yTriangleCenter+(210 * 0.6667)-30);
//    drawLine(xTriangleCenter,yTriangleCenter+(210 * 0.6667)-24,xTriangleCenter-(210 * 0.6667)-44,yTriangleCenter+(210 * 0.6667)-44 );
// }

// function lastLine(){
//   drawLine(xTriangleCenter+(210 * 0.6667),yTriangleCenter+74,xTriangleCenter+(210 * 0.6667)-30,yTriangleCenter+(210 * 0.6667)-30 );
//   drawLine(xTriangleCenter+(210 * 0.6667),yTriangleCenter+64,xTriangleCenter+(210 * 0.6667)-44,yTriangleCenter+(210 * 0.6667)-44 );
// }
// function lastLine1(){
//   drawLine(xTriangleCenter+(210 * 0.6667)-30,yTriangleCenter+(210 * 0.6667)-30,xTriangleCenter+74,yTriangleCenter+(210 * 0.6667) );
//   drawLine(xTriangleCenter+(210 * 0.6667)-44,yTriangleCenter+(210 * 0.6667)-44, xTriangleCenter+64,yTriangleCenter+(210 * 0.6667));
//   // drawLine(xTriangleCenter+(210 * 0.6667),yTriangleCenter+64,xTriangleCenter+(210 * 0.6667)-44,yTriangleCenter+(210 * 0.6667)-44 );
// }

// function roundedLine(){

//   context.beginPath();
//   context.strokeStyle = "red";
//   context.moveTo(xTriangleCenter+40, yTriangleCenter);
//   context.arcTo(xTriangleCenter+20, yTriangleCenter, xTriangleCenter+20, yTriangleCenter+20, 20);
//   context.stroke();
// }
// function roundeedLine2(){

//   context.beginPath();
//   context.strokeStyle = "red";
//   context.moveTo(xTriangleCenter+20, yTriangleCenter);
//   context.arcTo(xTriangleCenter+10, yTriangleCenter, xTriangleCenter+10, yTriangleCenter+10, 10);
//   context.stroke();
// }
// function roundedLine3(){

//   context.beginPath();
//   context.strokeStyle = "red";
//   context.moveTo(xTriangleCenter, yTriangleCenter+40);
//   context.arcTo(xTriangleCenter, yTriangleCenter+20, xTriangleCenter+20, yTriangleCenter+20, 20);
//   context.stroke();
// }
// function roundeedLine4(){

//   context.beginPath();
//   context.strokeStyle = "red";
//   context.moveTo(xTriangleCenter, yTriangleCenter+20);
//   context.arcTo(xTriangleCenter, yTriangleCenter+10, xTriangleCenter+10, yTriangleCenter+10, 10);
//   context.stroke();
// }

// outLeftLne()
// dawnLine()
// theerdLine()
// forthLine()
// lastLine()
// roundedLine()
// roundeedLine2()
// drawTriangleRightBottomRight()

// outLeftLne1()
// dawnLine1()
// theerdLine1()
// forthLine1()
// lastLine1()
// roundedLine3()
// roundeedLine4()
// drawTriangleRightBottomLeft()

// outLeftLne2()
// dawnLine2()
//  theerdLine2()
//  forthLine2()
// lastLine2()
// roundedLine5()
// roundeedLine6()
// drawTriangleLeftBottomLeft()

// outLeftLne()
// drawTriangleLeftBottomRight()


// drawLine(xTriangleCenter,yTriangleCenter,xTriangleCenter,yTriangleCenter-(triangleWidthHeight/2))
// drawLine(xTriangleCenter,yTriangleCenter,xTriangleCenter,yTriangleCenter+(triangleWidthHeight/2))
// drawLine(xTriangleCenter,yTriangleCenter,xTriangleCenter-(triangleWidthHeight/2),yTriangleCenter)
// drawLine(xTriangleCenter,yTriangleCenter,xTriangleCenter+(triangleWidthHeight/2),yTriangleCenter)


// drawLine(xTriangleCenter,yTriangleCenter,xTriangleCenter+(triangleWidthHeight/2),yTriangleCenter+(triangleWidthHeight/2))
// drawLine(xTriangleCenter,yTriangleCenter,xTriangleCenter-(triangleWidthHeight/2),yTriangleCenter-(triangleWidthHeight/2))
// drawLine(xTriangleCenter,yTriangleCenter,xTriangleCenter+(triangleWidthHeight/2),yTriangleCenter-(triangleWidthHeight/2))
// drawLine(xTriangleCenter,yTriangleCenter,xTriangleCenter-(triangleWidthHeight/2),yTriangleCenter+(triangleWidthHeight/2))




// context.strokeRect(xTriangleCenter-(triangleWidthHeight/2),yTriangleCenter-(triangleWidthHeight/2),triangleWidthHeight,triangleWidthHeight);
























// const radius = 300;
// const xCircleCenter = Math.ceil(canvasWidth / 2);
// const yCircleCenter = Math.ceil(canvasHeight / 2);
// let rectAngleCoordinate = []

// let hexagonCoordinate2 = []
// let lineCenter = []




// context.beginPath()
// context.arc(xCircleCenter,yCircleCenter,raduis/1.5,0,2*Math.PI,false)
// context.stroke()

// context.beginPath()
// context.arc(xCircleCenter,yCircleCenter,raduis/3,0,2*Math.PI,false)
// context.stroke()



// function degreesToRadians(degrees) {
//     return degrees * (Math.PI / 180);
//   }

//   function calculateNewPosition(xCenter, yCenter, angle, radius) {
//     const radianAngle = degreesToRadians(angle);
//     const xPosition = xCenter + (radius * Math.cos(radianAngle));
//     const yPosition = yCenter + (radius * Math.sin(radianAngle));
//     return { xPosition, yPosition };
//   }


//   function drawDivideCircle(xCircleCenter, yCircleCenter, angle, radius) {
//     const position = calculateNewPosition(xCircleCenter, yCircleCenter, angle, radius);
//     rectAngleCoordinate.push(position)
//     drawLine(xCircleCenter, yCircleCenter, position.xPosition, position.yPosition);
//   }

 
//   const angles = [0, 30, 60, 90, 120, 150, 180, 210,240,270,300,330];
//   angles.forEach(angle=>{
//       drawDivideCircle(xCircleCenter, yCircleCenter, angle, radius);
//   })

//   drawLine(rectAngleCoordinate[2].xPosition,rectAngleCoordinate[2].yPosition,rectAngleCoordinate[5].xPosition,rectAngleCoordinate[5].yPosition)
//   drawLine(rectAngleCoordinate[5].xPosition,rectAngleCoordinate[5].yPosition,rectAngleCoordinate[8].xPosition,rectAngleCoordinate[8].yPosition)
//   drawLine(rectAngleCoordinate[8].xPosition,rectAngleCoordinate[8].yPosition,rectAngleCoordinate[11].xPosition,rectAngleCoordinate[11].yPosition)
//   drawLine(rectAngleCoordinate[11].xPosition,rectAngleCoordinate[11].yPosition,rectAngleCoordinate[2].xPosition,rectAngleCoordinate[2].yPosition)
  
//   for (let i = 0; i < rectAngleCoordinate.length; i++) {
//       if(i >= 9){
//         let c =Math.abs((i+3)-rectAngleCoordinate.length)
//         drawLine(rectAngleCoordinate[i].xPosition,rectAngleCoordinate[i].yPosition,rectAngleCoordinate[c].xPosition,rectAngleCoordinate[c].yPosition)
//     }else{
//         drawLine(rectAngleCoordinate[i].xPosition,rectAngleCoordinate[i].yPosition,rectAngleCoordinate[i+3].xPosition,rectAngleCoordinate[i+3].yPosition)
//     }
  
//   }





// function drawLinestest(){
//     context.beginPath();
//     context.moveTo(xCircleCenter-radius,yCircleCenter);
//     context.lineTo(xCircleCenter-radius+20, yCircleCenter - (radius/5));
//     context.lineTo(xCircleCenter+radius-30, yCircleCenter - (radius/5));
//     context.lineTo(xCircleCenter+radius, yCircleCenter );
//     context.lineTo(xCircleCenter+radius-30, yCircleCenter + (radius/5));
//     context.lineTo(xCircleCenter-radius+20, yCircleCenter + (radius/5));
//     context.lineTo(xCircleCenter-radius, yCircleCenter );
//     context.stroke();
// }


// drawLinestest()






//   context.beginPath();
//   context.arc(xCircleCenter, yCircleCenter, radius, 0, 2 * Math.PI, false);
//   context.stroke();

// function star(raduis,angle1,angel2){
//     // let xPosition
//     // let yPosition
//     // xPosition = xCenter +( raduis * angle1 )
//     // yPosition = yCenter +( raduis * angel2 )
    
//     drawLine(595,510,695,410)
//     drawLine(695,410,595,310)
//      drawLine(595,310,495,410)
//      drawLine(495,410,595,510)
//      //
     
// }
// star()

// function createCircleLine(xAngel,yAngel,isCalc){
//     let newPosition6 = calculeOfPosiitonX(yCircleCenter,xCircleCenter,xAngel,yAngel,raduis)
//     // drawLine(xCircleCenter,yCircleCenter,newPosition6.xPosition,newPosition6.yPosition,isCalc)
// }

// const lineCute = Math.sqrt(2)/2

// const xAngleValue1=1/2
// const yAngleValue1=Math.sqrt(3)/2

// const yAngleValue2=1/2
// const xAngleValue2=Math.sqrt(3)/2




// const angel1 = xAngleValue1
// const angel2 = -yAngleValue1

// const angel3 = -xAngleValue1
// const angel4 = -yAngleValue1

// const angel5 = xAngleValue1
// const angel6 = yAngleValue1
// const angel7 = -xAngleValue1
// const angel8 = yAngleValue1
// const angel9 = 1
// const angel10 =0

// const angel11 = -1
// const angel12 =0

// createCircleLine(angel11,angel12,true)
// createCircleLine(angel7,angel8,true)
// createCircleLine(angel5,angel6,true)
// createCircleLine(angel9,angel10,true)
// createCircleLine(angel1,angel2,true)
// createCircleLine(angel3,angel4,true)


// const yAngle1=0
// const yAngle2=-1
// createCircleLine(yAngle1,yAngle2,false)


// const yAngle3=xAngleValue2
// const yAngle4=-yAngleValue2
// createCircleLine(yAngle3,yAngle4,false)

// const yAngle5=xAngleValue2
// const yAngle6=yAngleValue2
// createCircleLine(yAngle5,yAngle6,false)

// const yAngle7=0
// const yAngle8=1
// createCircleLine(yAngle7,yAngle8,false)


// const yAngle9=-xAngleValue2
// const yAngle10=yAngleValue2
// createCircleLine(yAngle9,yAngle10,false)

// const yAngle11=-xAngleValue2
// const yAngle12=-yAngleValue2
// createCircleLine(yAngle11,yAngle12,false)



// function calculeOfMidPointBetweenTowAngles(xPointA,yPointA,xPointB,yPointB){
  
//     let xMid = (xPointA +xPointB )/2 
//     let yMid = (yPointA + yPointB)/2 
//     // console.log(xMid,yMid);
//     lineCenter.push({x:xMid,y:yMid})
//     drawLine(xCircleCenter,yCircleCenter,xMid,yMid,false)
// }

// function drawCenterAngleLine(x,y,x2,y2){

//    let positionA = calculeOfPosiitonX(xCircleCenter,yCircleCenter,x,y,raduis/1.5)
//    let positionB = calculeOfPosiitonX(xCircleCenter,yCircleCenter,x2,y2,raduis/1.5)
  

//    calculeOfMidPointBetweenTowAngles(Math.floor(positionA.yPosition),
//                                     Math.floor(positionA.xPosition),
//                                     Math.floor(positionB.yPosition),
//                                     Math.floor(positionB.xPosition))
// }
// drawCenterAngleLine(Math.sqrt(3)/2,1/2,1,0)
// drawCenterAngleLine(-(Math.sqrt(3)/2),1/2,-1,0)
// drawCenterAngleLine(-1,0,-(Math.sqrt(3)/2),-(1/2))
// drawCenterAngleLine(Math.sqrt(3)/2,-(1/2),1,0)
// drawCenterAngleLine(0,1,-(1/2),Math.sqrt(3)/2)
// drawCenterAngleLine(0,-1,-(1/2),-(Math.sqrt(3)/2))
// drawCenterAngleLine(0,1,1/2,Math.sqrt(3)/2)
// drawCenterAngleLine(1/2,-(Math.sqrt(3)/2),0,-1)




// // for(let i = 0 ;i < lineCenter.length-1;){
// //     console.log(lineCenter[i]);
// //      drawLine(lineCenter[i].x,lineCenter[i].y,lineCenter[i+1].x,lineCenter[i+1].y)
// //     i+=2
// // }


// for (let i = 0; i < hexagonCoordinate.length; i++) {
//     if(i == 5){
//         drawLine(hexagonCoordinate[i].x,hexagonCoordinate[i].y,hexagonCoordinate[0].x,hexagonCoordinate[0].y,false)
//         drawLine(hexagonCoordinate2[i].x,hexagonCoordinate2[i].y,hexagonCoordinate2[0].x,hexagonCoordinate2[0].y,false)
//     }else{
        
//         drawLine(hexagonCoordinate[i].x,hexagonCoordinate[i].y,hexagonCoordinate[i+1].x,hexagonCoordinate[i+1].y,false)
//         drawLine(hexagonCoordinate2[i].x,hexagonCoordinate2[i].y,hexagonCoordinate2[i+1].x,hexagonCoordinate2[i+1].y,false)
//     }
        
        
// }





//     let newPosition1 = calculeOfPosiitonX(yCircleCenter,xCircleCenter,lineCute,lineCute,raduis/1.5)
//      drawLine(xCircleCenter,yCircleCenter,newPosition1.xPosition,newPosition1.yPosition,false)
     
//       let newPosition2 = calculeOfPosiitonX(yCircleCenter,xCircleCenter,-lineCute,lineCute,raduis/1.5)
//       drawLine(xCircleCenter,yCircleCenter,newPosition2.xPosition,newPosition2.yPosition,false)

//       let newPosition3 = calculeOfPosiitonX(yCircleCenter,xCircleCenter,lineCute,-lineCute,raduis/1.5)
//        drawLine(xCircleCenter,yCircleCenter,newPosition3.xPosition,newPosition3.yPosition,false)

//       let newPosition4 = calculeOfPosiitonX(yCircleCenter,xCircleCenter,-lineCute,-lineCute,raduis/1.5)
//        drawLine(xCircleCenter,yCircleCenter,newPosition4.xPosition,newPosition4.yPosition,false)



//     //    context.fillStyle='#fa4b2a';   
//     //    context.fillRect(xCircleCenter-50,yCircleCenter-50, 100, 100);
//     //    context.fillStyle='red';   
//     //    context.fillRect(xCircleCenter-50,yCircleCenter-50, 100, 100);
//     //    context.fillStyle='blue';   
//         // context.fillRect(xCircleCenter-50,yCircleCenter-50, 100, 100);