//get current amount of money 
function getcurrent() {
    const current = document.getElementById("current")
    current.textContent = localStorage.getItem("current")
    }
window.onload = getcurrent;

const transportBtn = document.getElementById("transport");
const snackBtn = document.getElementById("snack");
const playBtn = document.getElementById("play");
const foodBtn = document.getElementById("food");
let entered = 0

//add preview of selected genre
//addselected(x,y) parameters reference are below
transportBtn.addEventListener("click", function() {
    transportBtn.classList.toggle("chosen")
    playBtn.classList.remove("chosen")
    snackBtn.classList.remove("chosen")
    foodBtn.classList.remove("chosen")
});
snackBtn.addEventListener("click", function() {
    snackBtn.classList.toggle("chosen")
    playBtn.classList.remove("chosen")
    foodBtn.classList.remove("chosen")
    transportBtn.classList.remove("chosen")
});
playBtn.addEventListener("click", function() {
    playBtn.classList.toggle("chosen")
    foodBtn.classList.remove("chosen")
    snackBtn.classList.remove("chosen")
    transportBtn.classList.remove("chosen")
});
foodBtn.addEventListener("click", function() {
    foodBtn.classList.toggle("chosen")
    playBtn.classList.remove("chosen")
    snackBtn.classList.remove("chosen")
    transportBtn.classList.remove("chosen")
});

let addBtn = document.getElementById("add")
addBtn.addEventListener('click', function(){
    let now = document.getElementsByClassName("chosen")
    let classes = String(now[0].childNodes[1].classList)
    console.log(classes)
    addSelected(now[0].id, classes)
    let curr = parseFloat(localStorage.current.replace("£", " "))
    console.log(entered)
    
    curr -= (entered)
    curr = parseFloat(curr)
    localStorage.current = "£" + curr.toFixed(2);
    console.log(localStorage.current)
    getcurrent();
})

//add style to the innerhtml via css pls @oscar
//para x is the type of transaction and para y is the img class src
function addSelected(x, y) { 
    console.log("addSelected() is called");
    let selectedDiv = document.getElementById("tlist");

    selectedDiv.innerHTML += `
    <div class="transaction">
        <div class="logo">
            <i class="${y}"></i>
        </div>
        <div class="traninfo">
            <div>${x}</div>
                <div id="spent">£${entered}</div>
        </div>
    </div>
    `;
}



const inputAmt = document.getElementById("amt");

inputAmt.addEventListener("input", e => {
    entered = parseFloat(e.target.value)
    console.log(entered)
    return entered
})

// let selectedDiv = document.getElementById("selected div");
// inputAmt.addEventListener("click", function(e) {
//     console.log("+ sign")
//     createSpending();
// });
//commit the preview into the spending list
// function createSpending() {
//     if (selectedDiv.innerHTML != ``) {
//         console.log("if statement passed");
//     let spendingAmt = document.getElementById("amt").value;
//     let specificDiv = document.querySelector(".traninfo #spent");
//     console.log(spendingAmt);
//     specificDiv.innerHTML = `£${spendingAmt}`;
//     let newContainer = document.createElement("div");
//     let copySelectedDiv = structuredClone(selectedDiv);
//     newContainer.appendChild(copySelectedDiv);
//     let confirmedDiv = document.getElementById("confirmed div");
//     confirmedDiv.appendChild(newContainer);
//     } else {
//         window.alert("Please select the spending type!")
//     }

// }



/* function addSpending(spending) {
    console.log('hi');
    //get the button id
    let buttonId;
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            let buttonId = button.id;
            console.log("button id is:" + buttonId);
        });
    });

    //get input value in input bar
    let numberInput = document.getElementById("amt");
    let inputValue;

    //check if input exist, if not show error (does not work)
    if (numberInput) {
        inputValue = numberInput.value;
        console.log("spending:" + inputValue);

    } else if (numberInput <= 0) {
        console.log("Please input the value of the spending!")
        window.alert("Please input the value of the spending!")
    }

    // create a new container item for new spending
    let newContainer = document.createElement("div");
    newContainer.className = "transaction";

    //create a new Text node with the corresponding title
    const titleTextNode = document.createTextNode("Spending type:" + buttonId);

    // create a new text node with the spending amount
    const spendingTextNode = document.createTextNode("Spending:£" + inputValue);

    // append the text nodes to the list item
    newContainer.appendChild(titleTextNode);
    newContainer.appendChild(spendingTextNode);

    // get the spending list element
    const spendingList = document.getElementById('spendingList');

    // append the new list item to the spending list
    spendingList.appendChild(newContainer);
} */
