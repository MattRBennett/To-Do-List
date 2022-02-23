// Button that adds items to the page declared
const btnAdd = document.querySelector('#btnAdd');
// Button that removes items from the page declared
const btnRemove = document.querySelector('#btnRemove');
// button that creates a new list delcared
const btnNew = document.querySelector('#btnNew');
// Empty array for items in list
var items = [];

function addList() {
    // Asks the question.
    var adding = prompt('What do you want to add?');
    // Assigns the ordered list.
    var ol = document.getElementById('list');
    // Assigns the list items.
    var li = document.createElement('li');
    // Conditional to stop "null" from being added to list when cancel is chosen.
    if (adding != null && adding[0] != ' ' && adding.length != '0') {
        // Adds the item to the array.
        items.push(adding);
        // Assigns a variable to the item in the last position of the array.
        let added = items[items.length - 1];
        // Adds the last item of the array to the list item.
        li.append(added)
        // Adds the list item to the ordered list.
        ol.appendChild(li);
    }
    else {
        // Alert to let the user know that nothing was added because of empty input or cancel was pressed
        alert('Nothing Added')
    }
};
// button add onclick event
btnAdd.onclick = addList;

function removeList() {
    // Input that will only accept a number for number of item of deletion
    const del = parseInt(prompt("Enter the number of what you would like to delete"));
    // Cannot equal 0
    if (del === 0) {
        alert('Incorrect Input! Please Try Again.');
    }
    // Cannot be a number greater than the amount of items in the array
    else if (del > items.length) {
        alert('Incorrect Input! Please Try Again.');
    }
    // Removes the chosen item from the array
    else if (!Number.isNaN(del)) {
        items.splice(`${del - 1}`, 1);
        var removeItem = document.getElementById('list');
        removeItem.removeChild(removeItem.childNodes[del - 1]);
    }
    else {
        alert('Incorrect Input! Please Try Again.');
    }
}
// button remove onclick event
btnRemove.onclick = removeList;

//function reloads the page when clicked
function newList() {
    location.reload();
}
// Button new onclick event
btnNew.onclick = newList;

// Created By: https://github.com/MattRBennett