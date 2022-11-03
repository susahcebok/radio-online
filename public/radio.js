// Pure(-ish, only JS used is to play music) CSS project by headquarter802 (lowercase "h") a.k.a Markus.

function play() {
  var audio = new Audio('https://rockfm.rockfm.com.tr:9450/stream');
  audio.play();
  document.getElementById("button").style.display = "none"
}
