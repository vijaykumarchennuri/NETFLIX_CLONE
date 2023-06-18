var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      document.getElementById("dem").innerHTML = "+";
    } else {
      panel.style.display = "block";
      document.getElementById("dem").innerHTML = "-";
    }
  });
}