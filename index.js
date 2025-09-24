// Your code here
function moveDodgerLeft(){
  const dodger = document.getElementById("dodger");
  const left = parseInt(dodger.style.left);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight(){
  const dodger = document.getElementById('dodger');
  const left = parseInt(dodger.style.left);
  if (left < window.innerWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}