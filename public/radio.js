// Pure(-ish, only JS used is to play music) CSS project by headquarter802 (lowercase "h") a.k.a Markus.

function play() {
  var audio = new Audio('https://upload.wikimedia.org/wikipedia/commons/1/16/Chris_Zabriskie_-_03_-_Out_of_the_Skies_Under_the_Earth.ogg');
  audio.play();
  document.getElementById("button").style.display = "none"
}
