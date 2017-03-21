$('.col').each(function (min,max) {
  min = Math.ceil(1);
  max = Math.floor(3);
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(num);
  if (num === 1) {
    $(this).css({backgroundColor: "#4f3" });
  }
  if (num === 2) {
    $(this).css({backgroundColor: "#912" });
  }
  if (num === 3) {
    $(this).css({backgroundColor: "#22f" });
  }
  return num;
});
