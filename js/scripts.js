var a = prompt ('enter the triangle base');
var h = prompt ('enter the triangle height');
var triangleArea = a*h/2;
var triangle1Area = getTriangleArea(10, 15);
	triangle2Area = getTriangleArea(3, 8);
	triangle3Area = getTriangleArea(6, 10);

function getTriangleArea (a, h) {
	if (a<=0 || h<=0) {
		console.log ('Nieprawidłowe dane');
	}
	else if (a>0 && h>0) {
		return triangleArea
	}
}
console.log(getTriangleArea(10, 6))