
/*
Create a module for drawing shapes using Canvas.
Implement the following shapes:
Rect, by given position (X, Y) and size (Width, Height)
Circle, by given center position (X, Y) and radius (R)
Line, by given from (X1, Y1) and to (X2, Y2) positions
*/

// Object initialization.
function Shape(context, xCoord, yCoord){
	this.context = context;
	this.xCoord = xCoord;
	this.yCoord = yCoord;
}

// Method declarations.
Shape.prototype.drawRectangle = function(width, height) {
	this.context.strokeRect(this.xCoord, this.yCoord, width, height); 
};

Shape.prototype.drawCircle = function(radius){
	var ctx = this.context;
	ctx.beginPath();
	ctx.moveTo(this.xCoord + radius, this.yCoord);
	ctx.arc(this.xCoord,this.yCoord,radius,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();
};

Shape.prototype.drawLine = function(destXCoord, destYCoord) {
	var ctx = this.context;
	ctx.beginPath();
	ctx.moveTo(this.xCoord, this.yCoord);
	ctx.lineTo(destXCoord, destYCoord);
	ctx.stroke();
	ctx.closePath();
};

// Context declaration.
var c = document.getElementById('canv');
var ctx = c.getContext('2d');

//Initialize objects.
var abstractShape = new Shape(ctx, 100, 100);
abstractShape.drawRectangle(200, 150);
abstractShape.xCoord = 300;
abstractShape.yCoord = 300;
abstractShape.drawCircle(100);
abstractShape.xCoord = 400;
abstractShape.yCoord = 100;
abstractShape.drawLine(300, 500);
