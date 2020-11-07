var warna = ["green", "blue", "yellow", "brown", "white"]
var currentColor = 0
var lis = document.querySelectorAll("#halo h1")
function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = warna.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = warna[(currentColor +i) % warna.length]
  }
}
window.setInterval(changeColor, 1000)