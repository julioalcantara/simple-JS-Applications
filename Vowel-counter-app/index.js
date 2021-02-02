//SELECTORS
const textInput = document.querySelector('.input-text');
const checkButton = document.querySelector('.check-button');

//EVENT LISTENERS
checkButton.addEventListener('click', vowelCounter);

//FUNCTIONS
function vowelCounter(event){
    const text = textInput.value;
    const vowels = "aeiou";
    var count = 0;

    for (let i = 0; i < text.length; i++){
        //after get the indexOf all the vowels will be positive and consonants will be negative.
        if(vowels.indexOf(text[i]) > -1){
            count++;
        }
    }
    
    alert("This paragraph contains " + count + " vowels");
    //clean the input after submit 
    textInput.value = "";

    return count;
}


