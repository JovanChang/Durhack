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

//add preview of selected genre
//addselected(x,y) parameters reference are below
transportBtn.addEventListener("click", function() {
    addSelected("transport", "fa-solid fa-bus")
});
snackBtn.addEventListener("click", function() { 
    addSelected("snack", "fa-solid fa-cookie-bite")
});
playBtn.addEventListener("click", function() {
    addSelected("play", "fa-solid fa-gamepad")
});
foodBtn.addEventListener("click", function() { 
    addSelected("food", "fa-solid fa-bowl-food")
});

//add style to the innerhtml via css pls @oscar
//para x is the type of transaction and para y is the img class src
function addSelected(x, y) { 
    console.log("addSelected() is called");
    var selectedDiv = document.getElementById("selected div");

    selectedDiv.innerHTML = `
    <div class="logo">
        <i class="${y}"></i>
    </div>
    <div class="traninfo">
        <div>${x}</div>
            <div id="spent">Please input the spending amount</div>
    </div>
    `;

}

const inputAmt = document.getElementById("add");
var selectedDiv = document.getElementById("selected div");
inputAmt.addEventListener("click", function(e) {
    console.log("+ sign")
    createSpending();
});
//commit the preview into the spending list
function createSpending() {
    if (selectedDiv.innerHTML != ``) {
        console.log("if statement passed");
    var spendingAmt = document.getElementById("amt").value;
    var specificDiv = document.querySelector(".traninfo #spent");
    console.log(spendingAmt);
    specificDiv.innerHTML = `£${spendingAmt}`;
    var newContainer = document.createElement("div");
    var copySelectedDiv = structuredClone(selectedDiv);
    newContainer.appendChild(copySelectedDiv);
    var confirmedDiv = document.getElementById("confirmed div");
    confirmedDiv.appendChild(newContainer);
    } else {
        window.alert("Please select the spending type!")
    }

}

/* function addSpending(spending) {
    console.log('hi');
    //get the button id
    var buttonId;
    var buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var buttonId = button.id;
            console.log("button id is:" + buttonId);
        });
    });

    //get input value in input bar
    var numberInput = document.getElementById("amt");
    var inputValue;

    //check if input exist, if not show error (does not work)
    if (numberInput) {
        inputValue = numberInput.value;
        console.log("spending:" + inputValue);

    } else if (numberInput <= 0) {
        console.log("Please input the value of the spending!")
        window.alert("Please input the value of the spending!")
    }

    // create a new container item for new spending
    var newContainer = document.createElement("div");
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
