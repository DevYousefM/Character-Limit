let texterea = document.querySelector("textarea"),

  lettersNum = document.querySelector(".lettersNum"),

  smallNum = document.querySelector(".smallNum");

texterea.addEventListener("keyup", () => {

  let val = texterea.value.length;

  smallNum.innerHTML = val;

  lettersNum.style.display = "flex";

if (val == 0) {

    lettersNum.style.display = "none";

  } else if (val < 30) {

    lettersNum.style.color = "#d93025";

  } else if (val >= 30) {

    lettersNum.style.color = "#007bff";

  }

});