function addSpending(spending) {
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
    var inputValue = 0;

    //check if input exist, if not show error
    if (numberInput) {
        inputValue = numberInput.value;
        console.log("spending:" + inputValue);

    } else {
        console.log("No input detected")
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
}
