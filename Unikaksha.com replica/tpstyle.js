var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) 
{
    tabButtons.forEach
    (function(node)
    {
        node.style.backgroundColor="";
        node.style.color="";
    }
    );
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach
    (function(node)
    {
        node.style.display="none";
    }
    );
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#7891d6');


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


/*chatbox*/
function OpenBox()
{
    document.getElementById("popupboxid").style.display="block";
}
function Closebox()
{
    document.getElementById("popupboxid").style.display="none";
}