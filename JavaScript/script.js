
// This is for image slider
var images = ["../Icons/ban1.png", "../Icons/ban2.png", "../Icons/ban3.png"];

var x = 0;
var imgs = document.getElementById('sliderimg');


setInterval(slider, 1500); //Set interval time

function slider() {

  if (x < images.length) {
    x = x + 1;
  }

  else {
    x = 1;
  }


  imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}

// This is for form validation either the input is empty or not
function FormValidation() {

  var firstName = document.forms["feedback_form"]["fname"].value;
  var lastName = document.forms["feedback_form"]["lname"].value;
  var age = document.forms["feedback_form"]["age"].value;
  var email = document.forms["feedback_form"]["email"].value;
  var message = document.forms["feedback_form"]["message"].value;

  if (firstName == "" || lastName == "" || age == "" || email == "" || message == '') {
    alert("Please fill the form correctly!");
  } else {
    alert("Thank you for your feedback :)");
  }
}


// This JS is for toggle image of product information page//
function setNewImage() {
  document.getElementById("img1").src = "../Icons/products image/SonyAlpha.jpg"
}

function setOldImage() {
  document.getElementById("img1").src = "../Icons/products image/cam1.jpg"
}