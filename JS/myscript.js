

document.onmousemove = function foregroundPosition(e) {
	var foreground = document.getElementById('foreground');
	var movementSpeed = 10;
	var height = movementSpeed / screen.height;
	var width = movementSpeed / screen.width;
	var axisX = e.x - screen.width / 2;
	var axisY = e.y - screen.height / 2;
	var updatedX = width * axisX * -1 - 25;
	var updatedY = height * axisY * -1 - 50;
	foreground.style.left = updatedX + "px";
	foreground.style.top = updatedY + "px";
}
