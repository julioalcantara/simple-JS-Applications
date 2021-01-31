//SELECTORS
const itemName = document.querySelector('.item-name');
const itemDate = document.querySelector('.item-date');
const itemAmount = document.querySelector('.item-amount');
const addButton = document.querySelector('.add-button');
const itemsList = document.querySelector('.items-list');

//EVENT LISTENERS
addButton.addEventListener ('click', addItems);
itemsList.addEventListener ('click', removeItems);

//FUNCTIONS
function addItems(event) {
    
    //creating a tr that will be placed inside the table
    const itemsTr = document.createElement('tr');
    itemsTr.classList.add('items-tr');

    //creates a new item - name 
    const newItemName = document.createElement('td');
    newItemName.innerText = itemName.value;
    itemsTr.appendChild(newItemName);
    //creates a new item - date 
    const newItemDate = document.createElement('td');
    newItemDate.innerText = itemDate.value;
    itemsTr.appendChild(newItemDate);
    //creates a new item - amount
    const newItemAmout = document.createElement('td');
    newItemAmout.innerText = itemAmount.value;
    itemsTr.appendChild(newItemAmout);
    //creates a button inside the table
    const deleteBtn = document.createElement('td');
    deleteBtn.innerHTML = "<button class='delete-btn'>x</button>";
    itemsTr.appendChild(deleteBtn);
    //making the itemsTr a child of listItems
    itemsList.appendChild(itemsTr);
    //cleaning the input
    itemName.value="";
    itemDate.value="";
    itemAmount.value="";
}

function removeItems (event) {
    const rows = event.target;
    //checks if the first item clicked is iquals to "delete-btn"
    if(rows.classList[0] === "delete-btn") {
        //gets the parent element
        const row = rows.parentElement;
        //gets the parent element
        const item = row.parentElement;
        //remove the element
        item.remove();
    }
}

