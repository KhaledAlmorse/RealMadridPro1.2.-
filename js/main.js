var regexName = /^[a-zA-Z ]{2,30}$/;
var fn = document.getElementById("username");

var regexemail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
var em = document.getElementById("email");





function Validation2() {
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
       
           ///////////////////////
           
             if(e==1 && g==1 ){
              fn.value = "";
            
              em.value = "";
             
            
              
              //window.location.href= "../newPage/home1.html";
             
            }
  
  }

  function test2(e) {
    e.preventDefault();
  }

