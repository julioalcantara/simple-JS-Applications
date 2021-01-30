var input = document.getElementById("userInput");
var button = document.getElementById("submitBTN");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var trash = document.getElementsByClassName("delete");
var btndelete = document.getElementById("trash");

//For removing items with delete button
Array.prototype.slice.call(trash).forEach(function(item) {
    item.addEventListener("click", function(e) {
    e.target.parentNode.remove()
    });
})  

//loop for strickeout the list
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", strickeout);
}

//toggle between classlist
function strickeout() {
    this.classList.toggle("done");
}

//check the length of the string entered
function inputLength() {
    return input.value.length;
}

//collect the inserted data
function addli() {
    var li = document.createElement("li");
    var btn = document.createElement("button");

    btn.className = "delete";
    btn.innerHTML = "delete";
    btn.addEventListener("click", function(e){
        e.target.parentNode.remove();
    });

    li.addEventListener("click", strickeout);
    li.innerHTML = input.value + " ";
    li.appendChild(btn);
    ul.appendChild(li);
    input.value = " ";

}

//add new list with keypress
function addListKeyPress(event) {
    if (inputLength() > 0 && event.which === 13) {
        addli();
    }
}
