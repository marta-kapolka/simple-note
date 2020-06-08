const entryNote = document.querySelector('.entry--js');
console.log(entryNote);

const saveButton = document.querySelector('.save--js');
const loadButton = document.querySelector('.load--js');
const deleteButton = document.querySelector('.delete--js');
const clearButton = document.querySelector('.clear--js');

saveButton.addEventListener('click', () => {
    localStorage.setItem('entry', entryNote.value)
})

loadButton.addEventListener('click', () => {
    entryNote.value = localStorage.getItem('entry');
})

clearButton.addEventListener('click', () => {
    entryNote.value = '';
})

deleteButton.addEventListener('click', () => {
    localStorage.removeItem('entry');
    entryNote.value = '';
})