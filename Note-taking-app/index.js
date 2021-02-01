//SELECTORS
const noteTitle = document.querySelector('.note-title');
const noteInput = document.querySelector('.note-input');
const addButton = document.querySelector('.add-button');
const notesContainer = document.querySelector('.notes-container');

// EVENT LISTENERS
addButton.addEventListener('click', addNote);
// notesContainer.addEventListener('click', readMore);
notesContainer.addEventListener('click', deleteBtn);

//FUNCTIONS
function addNote(event) {
    
    //creates the main div element
    const noteItems = document.createElement('div');
    noteItems.classList.add('note-items')
    
    // creates the note's title 
    const newNoteTitle = document.createElement('div');
    newNoteTitle.innerText = noteTitle.value;
    newNoteTitle.classList.add('new-note__title');
    noteItems.appendChild(newNoteTitle);
    //creates the notes
    const newNote = document.createElement('div');
    newNote.innerText = noteInput.value;
    newNote.classList.add('new-note');
    noteItems.appendChild(newNote);
    
    //creates a div for the buttons
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-div');

    //creates a reade more button
    // const readMoreBtn = document.createElement('button');
    // readMoreBtn.innerText = "Read more";
    // readMoreBtn.classList.add('read-more__btn');
    // noteItems.appendChild(readMoreBtn);

    //creates a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add('delete-btn');
    buttonsDiv.appendChild(deleteBtn);

    //makes the buttons div a child of noteItems
    noteItems.appendChild(buttonsDiv);
    //makes the noteItems a child of notesContainer
    notesContainer.appendChild(noteItems);

    //clear input
    noteInput.value = "";
    noteTitle.value = "";
}

// function readMore(event) {
//     const item = event.target;
//     if(item.classList[0] === 'read-more__btn'){
        
//         const note = item.parentElement;
//         note.classList.toggle('note-readmore');

//     }
// }

function deleteBtn(event) {
    const item = event.target; 

    if(item.classList[0] === 'delete-btn') {
        const items = item.parentElement;
        const note = items.parentElement;
        note.remove();
    }
}