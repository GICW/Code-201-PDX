let canvas = document.getElementById('notes');

let ctx = canvas.getContext('2d');
ctx.canvas.width = canvas.clientWidth;
ctx.canvas.height = canvas.clientHeight;

let coordinates = { x:0, y:0 };

document.addEventListener('mousedown', startDrawing);
document.addEventListener('mouseup', stopDrawing);
document.addEventListener('mousemove', sketch);

let drawing = false;


function setPosition(event) {
  coordinates.x = event.clientX - canvas.offsetLeft;
  coordinates.y = event.clientY - canvas.offsetTop;
}

function startDrawing(event) {
  drawing = true;
  setPosition(event);
}

function stopDrawing() {
  drawing = false;
}

function sketch(event) {
  if(!drawing) { return; }
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'black';
  ctx.moveTo(coordinates.x, coordinates.y);
  setPosition(event);
  ctx.lineTo(coordinates.x, coordinates.y);
  ctx.stroke();
}
