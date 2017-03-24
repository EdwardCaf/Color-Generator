function Randomize() {
  $('.col').each(function (min,max) {
    min = Math.ceil(1);
    max = Math.floor(6);
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num);
    if (num === 1) {
      $(this).css({backgroundColor: "#3c3" });
    }
    if (num === 2) {
      $(this).css({backgroundColor: "#d12" });
    }
    if (num === 3) {
      $(this).css({backgroundColor: "#22f" });
    }
    if (num === 4) {
      $(this).css({backgroundColor: "#ff4" });
    }
    if (num === 5) {
      $(this).css({backgroundColor: "#fff" });
    }
    if (num === 6) {
      $(this).css({backgroundColor: "#f90" });
    }
    return num;
  });
};
