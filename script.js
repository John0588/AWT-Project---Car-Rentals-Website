//Reservation Section
function reservation() {
  if(document.getElementById('location').value == "" || 
  document.getElementById('checkin-date').value == "" ||
  document.getElementById('checkout-date').value == "" ||
  document.getElementById('pickUp').value == "" ||
  document.getElementById('dropOff').value == "" )  {
    document.getElementById('reserveError').innerHTML = "Please Fill all the Fields";
  }else {
    document.getElementById('form').submit();
    document.getElementById('reserveMessage').innerHTML = "You are Succesfully Submitted!";
  }
}
//Contact Section
function contact() {
  if(document.getElementById('fName').value == "" || 
  document.getElementById('email').value == "" ||
  document.getElementById('subject').value == "" ||
  document.getElementById('message').value == "" )  {
    document.getElementById('contactError').innerHTML = "Please Fill all the Fields";
  }else {
    document.getElementById('contactForm').submit();
    document.getElementById('contactMessage').innerHTML = "Thank You for Contacting Us!";
  }
}

//Navigation Section
function myAbout() {
 document.getElementById("myAboutBtn").classList.toggle("show");
}

window.onclick = function(event) {
 if (!event.target.matches('.drop_btn')) {
   var dropdowns = document.getElementsByClassName("dropdown-content");
   var i;
   for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
       openDropdown.classList.remove('show');
     }
   }
 }
}

// SignIn Section
function in_Form() {
  document.getElementById('form').submit();
  if(document.getElementById('mail').value == "" ||
  document.getElementById('password').value == "" ) {
    alert("Please Fill all the Fields");
  }else {
    document.getElementById('form').submit();
    alert("You are Succesfully Registered! WELCOME!");
  }
  
 }
function mySignIn() {
  document.getElementById("mySignIn_Btn").classList.toggle("show");
  
  document.getElementById('mySign_In').submit()
  alert("You are Succesfully Sign In. WELCOME!");
 }
 
 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 }
// SignUp Section
function up_Form() {
  document.getElementById('form').submit();
  if(document.getElementById('f_Name').value == "" ||
  document.getElementById('l_Name').value == "" ) {
    alert("Please Fill all the Fields");
  }else {
    document.getElementById('form').submit();
  alert("You are Succesfully Registered! THANK YOU!");
 }
}
function mySignUp() {
  document.getElementById("mySignUp_Btn").classList.toggle("show");
 }

 
 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
 }

 //SignIn Section Media
function In() {
  if(document.getElementById('email').value == "" || 
  document.getElementById('password').value == "" )  {
    alert("Please Fill all the Fields")
  }else {
    document.getElementById('inForm').submit();
    alert("You are Succesfully Sign In. WELCOME!");
  }
}
//SignUp Section Media
function Up() {
  if(document.getElementById('fname').value == "" || 
  document.getElementById('lname').value == "" ||
  document.getElementById('email').value == "" ||
  document.getElementById('password').value == "" )  {
    alert("Please Fill all the Fields")
  }else {
    document.getElementById('upForm').submit();
    alert("You are Succesfully Registered! THANK YOU!");
  }
}