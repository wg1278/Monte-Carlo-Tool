var canvas = document.getElementById('canvas');

var numPoints = -1;
while(numPoints < 0)
    numPoints = prompt('Enter the number of points for the shape.');


document.getElementById('points').textContent = numPoints;
var ctx = canvas.getContext('2d');

var pointsArray = [];

function position(x, y){
    this.x = x;
    this.y = y;
}



var lineWidth = 10;

canvas.addEventListener('mousedown', function (event){
    if(numPoints > 0){
        var currPosition = getPosition(canvas, event);
        pointsArray.push(currPosition);
        drawPoint(canvas, currPosition, lineWidth, 'rgba(255, 0, 0, 0.7)');
        document.getElementById('points').textContent = --numPoints;
        
        if(numPoints == 0)
            generatePolygon(canvas, pointsArray, lineWidth);
    }
});


function getPosition(ctx, event){
    var rect = canvas.getBoundingClientRect();
    return {x: event.clientX - rect.left,
            y: event.clientY - rect.top
           };
}

function getRandomPosition(canvas){
    var rect = canvas.getBoundingClientRect();
    return {x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height)
           };
}

function drawPoint(canvas, position, lineWidth, color){
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(position.x, position.y, .5, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }
}

function generatePolygon(canvas, points, lineWidth){
    if(points.length <= 0)
        return;
    
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0, 100, 255, 0.5)';
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for(let i = 1; i < points.length; i++){
        ctx.lineTo(points[i].x, points[i].y);
        ctx.stroke();
    }
    ctx.lineTo(points[0].x, points[0].y);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
}

function monteCarlo(){
    var totalPoints = prompt('Enter the number of points desired for the Monte Carlo Simulation.');
    var pointsMatched = 0.0;
 
    for(let i = 0; i < totalPoints; i++){
        var pos = getRandomPosition(canvas);
        var imgData = ctx.getImageData(pos.x, pos.y, 1, 1);
        //console.log(imgData.data);
        if((imgData.data[0] == 0 && imgData.data[1] == 100 && imgData.data[2] == 255)){
            pointsMatched++;
        }
        drawPoint(canvas, pos, lineWidth, 'rgba(0, 255, 0, 0.7)'); 
    }
    
    document.getElementById('area').textContent = pointsMatched/totalPoints;
}
