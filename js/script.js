var green = 0;
var red = 0;
var blue = 0;
var yellow = 0;
var header = "Random Color Generator";

// DISPLAYS HEADER

for(i=0; i<header.length; i++){
  if (i % 4 === 0){
    var letter = header.charAt(i);
    letter = letter.fontcolor("#3c3");
    $('.header').append(letter);
  }
  if (i % 4 === 1){
    var letter = header.charAt(i);
    letter = letter.fontcolor("#d12");
    $('.header').append(letter);
  }
  if (i % 4 === 2){
    var letter = header.charAt(i);
    letter = letter.fontcolor("#22f");
    $('.header').append(letter);
  }
  if (i % 4 === 3){
    var letter = header.charAt(i);
    letter = letter.fontcolor("#ff4");
    $('.header').append(letter);
  }
};

// RANDOMIZES COLORS IN BOXES

function Randomize() {
  $('.col').each(function (min,max) {
    min = Math.ceil(1);
    max = Math.floor(4);
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num);
    if (num === 1) {
      $(this).css({backgroundColor: "#3c3" });
      green ++;
    }
    if (num === 2) {
      $(this).css({backgroundColor: "#d12" });
      red ++;
    }
    if (num === 3) {
      $(this).css({backgroundColor: "#22f" });
      blue ++;
    }
    if (num === 4) {
      $(this).css({backgroundColor: "#ff4" });
      yellow ++;
    }
    return num;
  });

  // CREATES HTML FOR COLOR COUNTER

  $('.colorCount').empty();
  $('.colorCount').append("<h3 class='green'>Green: " + green + "</h3>");
  $('.green').css("font-size", green*3+7);
  $('.colorCount').append("<h3 class='red'>Red: " + red + "</h3>");
  $('.red').css("font-size", red*3+7);
  $('.colorCount').append("<h3 class='blue'>Blue: " + blue + "</h3>");
  $('.blue').css("font-size", blue*3+7);
  $('.colorCount').append("<h3 class='yellow'>Yellow: " + yellow + "</h3>");
  $('.yellow').css("font-size", yellow*3+7);

  green = 0;
  red = 0;
  blue = 0;
  yellow = 0;
};
