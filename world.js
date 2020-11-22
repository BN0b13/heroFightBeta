const canvas = document.getElementById('worldView');
let ctx;

window.onload = function() {
  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,canvas.width,canvas.height)

}