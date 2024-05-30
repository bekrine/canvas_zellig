const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

canvas.width = canvasWidth
canvas.height = canvasHeight
const raduis = 300
const xCircleCenter = canvasWidth/2
const yCircleCenter = canvasHeight/2

let hexagonCoordinate = []
let hexagonCoordinate2 = []



context.beginPath()
context.arc(xCircleCenter,yCircleCenter,raduis,0,2*Math.PI)
context.stroke()
function drawLine(xStart,yStart,xEnd,YEnd,calc){
    context.beginPath()
    context.moveTo(xStart,yStart);
    context.lineTo(xEnd,YEnd)
    context.stroke()
    if(calc){
        hexagonCoordinate.push({x:xEnd,y:YEnd})
    }else if(hexagonCoordinate2.length < 6){
        hexagonCoordinate2.push({x:xEnd,y:YEnd})
    }

}






function calculeOfPosiitonX(yCenter,xCenter,angle1,angel2,raduis){
    let xPosition
    let yPosition
    xPosition = xCenter +( raduis * angle1 )
    yPosition = yCenter +( raduis * angel2 )
   
    return {xPosition,yPosition}
    
}

function createCircleLine(xAngel,yAngel,isCalc){
    let newPosition6 = calculeOfPosiitonX(yCircleCenter,xCircleCenter,xAngel,yAngel,raduis)
    drawLine(xCircleCenter,yCircleCenter,newPosition6.xPosition,newPosition6.yPosition,isCalc)
}

const xAngleValue1=1/2
const yAngleValue1=Math.sqrt(3)/2

const yAngleValue2=1/2
const xAngleValue2=Math.sqrt(3)/2

const angel1 = xAngleValue1
const angel2 = -yAngleValue1

const angel3 = -xAngleValue1
const angel4 = -yAngleValue1

const angel5 = xAngleValue1
const angel6 = yAngleValue1
const angel7 = -xAngleValue1
const angel8 = yAngleValue1
const angel9 = 1
const angel10 =0

const angel11 = -1
const angel12 =0

createCircleLine(angel11,angel12,true)
createCircleLine(angel7,angel8,true)
createCircleLine(angel5,angel6,true)
createCircleLine(angel9,angel10,true)
createCircleLine(angel1,angel2,true)
createCircleLine(angel3,angel4,true)


const yAngle1=0
const yAngle2=-1
createCircleLine(yAngle1,yAngle2,false)


const yAngle3=xAngleValue2
const yAngle4=-yAngleValue2
createCircleLine(yAngle3,yAngle4,false)

const yAngle5=xAngleValue2
const yAngle6=yAngleValue2
createCircleLine(yAngle5,yAngle6,false)

const yAngle7=0
const yAngle8=1
createCircleLine(yAngle7,yAngle8,false)


const yAngle9=-xAngleValue2
const yAngle10=yAngleValue2
createCircleLine(yAngle9,yAngle10,false)

const yAngle11=-xAngleValue2
const yAngle12=-yAngleValue2
createCircleLine(yAngle11,yAngle12,false)





for (let i = 0; i < hexagonCoordinate.length; i++) {
    if(i == 5){
        drawLine(hexagonCoordinate[i].x,hexagonCoordinate[i].y,hexagonCoordinate[0].x,hexagonCoordinate[0].y,false)
        drawLine(hexagonCoordinate2[i].x,hexagonCoordinate2[i].y,hexagonCoordinate2[0].x,hexagonCoordinate2[0].y,false)
    }else{
        
        drawLine(hexagonCoordinate[i].x,hexagonCoordinate[i].y,hexagonCoordinate[i+1].x,hexagonCoordinate[i+1].y,false)
        drawLine(hexagonCoordinate2[i].x,hexagonCoordinate2[i].y,hexagonCoordinate2[i+1].x,hexagonCoordinate2[i+1].y,false)
    }
        
        
}