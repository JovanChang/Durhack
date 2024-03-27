//get current amount of money 
function getcurrent() {
const current = document.getElementById("current")
current.textContent = localStorage.getItem("current")
}
window.onload = getcurrent;

//active when clicking
let btnContainer = document.getElementById("moneyDIV");

let btns = btnContainer.getElementsByClassName("col");

function selectedValue(id) {
  console.log(id)
  return parseFloat(id)
}

function addValue() {
  let active = btnContainer.getElementsByClassName("active")[0]
  let selected = parseFloat(active.id)
  let curr = parseFloat(localStorage.current.replace("£", " "))
  console.log(selected)
  
  curr += (selected)
  curr = parseFloat(curr)
  localStorage.current = "£" + curr.toFixed(2);
  console.log(localStorage.current)
  getcurrent();
  return 
}

function minusValue() {
  let active = btnContainer.getElementsByClassName("active")[0]
  let selected = parseFloat(active.id)
  let curr = parseFloat(localStorage.current.replace("£", " "))
  console.log(selected)
  
  curr -= (selected)
  curr = parseFloat(curr)
  localStorage.current = "£" + curr.toFixed(2);
  console.log(localStorage.current)
  getcurrent();
  return 
}



for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

const image = document.getElementById("piggyBank")
image.addEventListener("click", function(){
  addValue()
})


//DELETE THIS THIS IS FOR DEV!!!!!!!!!!!!!!!!!!!!!!
const reset = document.getElementById("minus");

reset.addEventListener("click", setcurrent);

function setcurrent() {
    // localStorage.setItem("current", "£100");
    
    // const current = document.getElementById("current");
    // current.textContent = localStorage.getItem("current");
    minusValue()
    }