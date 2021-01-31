//SELECTORS
const noteInput = document.querySelector('.note-input');
const addButton = document.querySelector('.add-button');
const notesContainer = document.querySelector('.notes-container');

// EVENT LISTENERS
addButton.addEventListener('click', addNote);

//FUNCTIONS
function addNote(event) {
    
    //creates the main div element
    const noteItems = document.createElement('div');
    noteItems.classList.add('note-items')
    // creates the note's title 
    const newNoteTitle = document.createElement('div');
    newNoteTitle.innerText = "note 1";
    noteItems.appendChild(newNoteTitle);
    //creates the notes
    const newNote = document.createElement('div');
    newNote.innerText = noteInput.value;
    noteItems.appendChild(newNote);
    //creates a reade more button
    const readMoreBtn = document.createElement('button');
    readMoreBtn.innerText = "Read more";
    noteItems.appendChild(readMoreBtn);

    //makes the noteItems a child of notesContainer
    notesContainer.appendChild(noteItems);

    //clear input
    noteInput.value = "";
}