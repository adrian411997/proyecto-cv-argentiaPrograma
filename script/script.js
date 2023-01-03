const rotated = document.getElementById("cv");

function rotate() {
  rotated.style.transform = "rotateY(180deg)";
}
function toOriginal() {
  console.log("rotate");
  rotated.style.transform = "rotateY(360deg)";
}
