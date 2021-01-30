

function submitButton() {
    
    const item = document.getElementById("userInput").value;

    const list = document.createElement("LI");
    list.innerText = item;
    document.getElementById("items_list").appendChild(list);

}
