var questions = document.querySelectorAll(".faq-q");
var items     = document.querySelectorAll(".faq-item");
var groups    = document.querySelectorAll(".faq-group");
var search    = document.getElementById("faqSearch");
var emptyMsg  = document.getElementById("faqEmpty");


for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    var answer = this.nextElementSibling;
    var isOpen = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", isOpen ? "false" : "true");
    answer.hidden = isOpen;
  });
}

search.addEventListener("input", function () {
  var term = search.value.trim().toLowerCase();
  var totalVisible = 0;

  for (var g = 0; g < groups.length; g++) {
    var groupItems = groups[g].querySelectorAll(".faq-item");
    var visible = 0;

    for (var k = 0; k < groupItems.length; k++) {
      var match = groupItems[k].textContent.toLowerCase().indexOf(term) !== -1;
      groupItems[k].hidden = !match;
      if (match) { visible++; }
    }

    groups[g].hidden = (visible === 0);
    totalVisible += visible;
  }

  emptyMsg.hidden = (totalVisible !== 0);
});


var toast      = document.getElementById("toast");
var toastClose = document.getElementById("toastClose");

function showToast() {
  toast.hidden = false;
  setTimeout(hideToast, 8000);  
}

function hideToast() {
  toast.hidden = true;
}

toastClose.addEventListener("click", hideToast);


window.addEventListener("load", function () {
  setTimeout(showToast, 800);
});