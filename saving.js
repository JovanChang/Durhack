//get current amount of money 
function getcurrent() {
const current = document.getElementById("current")
current.textContent = localStorage.getItem("current")
}
window.onload = getcurrent;

//active when clicking
var btnContainer = document.getElementById("moneyDIV");

var btns = btnContainer.getElementsByClassName("col");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

//counter for the amount of money
const buttons = document.querySelectorAll("button");
var valueLog = [];

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var moneyValue = parseFloat(button.id);
        var textValue = localStorage.current
        //get rid of the pound sign to do arithmetic (no pound (sign) value)
        var noPvalue = parseFloat(textValue.replace("£", " "));
        console.log("Value inputted is " + moneyValue);
        //keep a log of previous input value
        valueLog.push(moneyValue)
        console.log("log of value inputted is " + valueLog)

        moneyValue += noPvalue;
        localStorage.current = "£" + moneyValue.toFixed(2);

        console.log("local storage current now is: " + localStorage.current);
        getcurrent();
    })
    
    
});
//DELETE THIS THIS IS FOR DEV!!!!!!!!!!!!!!!!!!!!!!
const reset = document.getElementById("reset");

reset.addEventListener("click", setcurrent);

function setcurrent() {
    localStorage.setItem("current", "£100");
    
    const current = document.getElementById("current");
    current.textContent = localStorage.getItem("current");
    }