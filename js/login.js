
  
var regexemaillog = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
var emlog = document.getElementById("login-email");
var regxpasslog = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9])[A-Za-z0-9\W_]{8,}$/;
var passlog = document.getElementById("login-password");

function Validation4() {
  var emlogval = emlog.value;
  console.log(emlogval);
  var span14 = document.getElementById("span14");
   if (emlogval === "") {
    
     span14.textContent = "*";
     span14.style.display = "inline";
     emlog.value = "";
     emlog.style.color="black";
   } else if (!regexemaillog.test(emlogval)) {
     /*
     span14.textContent = "Not Valid";
     */
     span14.textContent = "";
    emlog.style.color="red";
   } else {
    emlog.style.color="black";
       span14.textContent = "";
       span14.style.display = "inline";
      
       var m = 1;
   }
   ///////////////////////
    var passlogval = passlog.value;
    console.log(passlogval);
    var span15 = document.getElementById("span15");
     if (passlogval === "") {
      
       span15.textContent = "*";
       span15.style.display = "inline";
       passlog.value = "";
       passlog.style.color="black";
     } else if (!regxpasslog.test(passlogval)) {
       /*
       span15.textContent = "Not Valid";
       */
       span15.textContent = "";
      passlog.style.color="red";
     } else {
      passlog.style.color="black";
         span15.textContent = "";
         span15.style.display = "inline"; 
      var n=1;
     }
     ///////////////////////
     if(m==1 && n==1){
      emlog.value = "";
      passlog.value = "";
      window.location.href= "../index.html";
    }
  
  }


  function test4(e) {
    e.preventDefault();
  }





  //////////////////////////////////////
  var regexName = /^[a-zA-Z ]{2,30}$/;
var fn = document.getElementById("signup-username");

var regexemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
var em = document.getElementById("signup-email");

var regxpass = /^(?=.*[A-Z])(?=.*[\W_])(?=.*[0-9])[A-Za-z0-9\W_]{8,}$/;
var pass = document.getElementById("signup-password");



function Validation3() {
  var fnval = fn.value;
  console.log(fnval);
  var span6 = document.getElementById("span6");
   if (fnval === "") {
    
     span6.textContent = "*";
     span6.style.display = "inline";
     fn.value = "";
     fn.style.color="black";
   } else if (!regexName.test(fnval)) {
     /*
     span6.textContent = "Not Valid";
    */
     span6.textContent = "";
   fn.style.color="red";
   } else {
      
       span6.textContent = "";
       span6.style.display = "inline";
       fn.style.color="black";
       var e = 1;
   }
   ///////////////////////
   
     ///////////////////////
      var emval = em.value;
      console.log(emval);
      var span8 = document.getElementById("span8");
       if (emval === "") {
        
         span8.textContent = "*";
         span8.style.display = "inline";
         em.value = "";
         em.style.color="black";
       } else if (!regexemail.test(emval)) {
         /*
         span8.textContent = "Not Valid";
         */
         span8.textContent ="";
        em.style.color="red";
       } else {
        em.style.color="black";
           span8.textContent = "";
           span8.style.display = "inline"; 
        var g=1;
       }
       ///////////////////////
       
         ///////////////////////
          var passval = pass.value;
          console.log(passval);
          var span11 = document.getElementById("span11");
           if (passval === "") {
            
             span11.textContent = "*";
             span11.style.display = "inline";
             pass.value = "";
             pass.style.color="black";
           } else if (!regxpass.test(passval)) {
             /*
             span11.textContent = "Not Valid";
             */
             span11.textContent = "";
            pass.style.color="red";
           } else {
            pass.style.color="black";
               span11.textContent = "";
               span11.style.display = "inline"; 
            var i=1;
           }
           ///////////////////////
           
             if(e==1 && g==1 && i==1 ){
              fn.value = "";
            
              em.value = "";
             
              pass.value = "";
              
              window.location.href= "../newPage/index.html";
             
            }
  
  }

  function test3(e) {
    e.preventDefault();
  }

// document.addEventListener("DOMContentLoaded", function () {
//     var signupForm = document.getElementById("signup-form");
//     var loginForm = document.getElementById("login-form");



    
//     function validateSignupForm() {
//         var username = document.getElementById("signup-username");
//         var email = document.getElementById("signup-email");
//         var password = document.getElementById("signup-password");

//         var usernameError = document.getElementById("signup-username-error");
//         var emailError = document.getElementById("signup-email-error");
//         var passwordError=document.getElementById("signup-password-error");



//         validateInput(username, usernameError, "Name is required");
//         validateInput(password, passwordError, "Name is required");
//         validateInput(email, emailError, "Email is required", isValidEmail);

//         if (!usernameError.textContent && !emailError.textContent && !passwordError.textContent) {
//             // Form submission logic for signup
//             alert("Signup successful!");
//         }
//     }
//     signupForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         validateSignupForm();
//     });
//     // Function to check if the email is valid
// function isValidEmail(email) {
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

    

//     function validateLoginForm() {
//         var email = document.getElementById("login-email");
//         var password = document.getElementById("login-password");

//         var emailError = document.getElementById("login-email-error");
//         var passwordError=document.getElementById("login-password-error");

//         validateInput(password, passwordError, "Name is required");
//         validateInput(email, emailError, "Email is required", isValidEmail);

//         if (!emailError.textContent && !passwordError.textContent) {
//             // Form submission logic for login
//             alert("Login successful!");
//         }
//     }
//     loginForm.addEventListener("submit", function (event) {
//         event.preventDefault();
//         validateLoginForm();
//     });
//     // Function to check if the email is valid
// function isValidEmail(email) {
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }



//     if (
//         username.value.trim() !== "" &&
//         email.value.trim() !== "" &&
//         password.value.trim() !=="" &&
//         isValidEmail(email.value.trim())
//     ) {
//         // Perform your form submission logic here
//         alert("Form submitted successfully!");
//     }
// });

