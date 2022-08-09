/*email validation*/
function printerr(eleId, hintMsg) 
{
    document.getElementById(eleId).innerHTML = hintMsg;
}

function formValid() 
{
    var E = document.getElementById("emailtxt").value;

    if (E=="")
    {
        printerr("errEmail", "*Please Enter Email Address*");
        return false;
    }
    else
    {
        var regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(regex.test(E)===false)
        {
            printerr("errEmail", "*Please Enter valid Email Address*");
            return false;
        }
        else
        {
            printerr("errEmail","");
            errEmail = false;
        }
    }
}

/*stickynavbar*/

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbarz = document.getElementById("navbartop");

// Get the offset position of the navbar
var sticky = navbarz.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbarz.classList.add("sticky")
  } else {
    navbarz.classList.remove("sticky");
  }
}