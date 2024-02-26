//script for testimonial slider
("use strict");
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimleftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer;

window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimleftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });
  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }
  playSlide(currentSlide);
};
//end of script

//filter blog
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".box").show("1000");
    } else {
      $(".box")
        .not("." + value)
        .hide(1000);
      $(".box")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});

//disable inspect element and copy pasting
document.oncontextmenu = () => {
  alert("Nice try badi");
  return false;
};

document.onkeydown = (e) => {
  if (e.key == "F12") {
    alert("Shut the fuck up motherfucker");
    return false;
  }
  if (e.ctrlKey && e.key == "u") {
    alert("Do not not do this until you do");
    return false;
  }
  if (e.ctrlKey && e.key == "c") {
    alert("Don't try to fuck this up nigga");
    return false;
  }
  if (e.ctrlKey && e.key == "v") {
    alert("Don't try the try of don't so please don't");
    return false;
  }
};
