const entryNote = document.querySelector(".entry--js");

const saveButton = document.querySelector(".save--js");
const loadButton = document.querySelector(".load--js");
const deleteButton = document.querySelector(".delete--js");
const clearButton = document.querySelector(".clear--js");

const notification = document.querySelector(".notification--js");

let isEmpty;
const array = [1, 2, 3];
localStorage.setItem("array", array);

const entryCheck = () => {
  let entry = localStorage.getItem("entry");
  if (entry === null || entry === "") {
    isEmpty = true;
    console.log(isEmpty);
  } else {
    isEmpty = false;
    console.log(isEmpty);
  }
};

const manageClass = () => {
  if (isEmpty === false) {
    notification.classList.add("note__button-notification--visible");
  } else {
    notification.classList.remove("note__button-notification--visible");
  }
};

entryCheck();
manageClass();

saveButton.addEventListener("click", () => {
  if (entryNote.value !== "") {
    localStorage.setItem("entry", entryNote.value);
    entryNote.value = "";
    entryCheck();
    manageClass();
  }
});

loadButton.addEventListener("click", () => {
  entryNote.value = localStorage.getItem("entry");
  notification.classList.remove("note__button-notification--visible");
});

clearButton.addEventListener("click", () => {
  entryNote.value = "";
  entryCheck();
  manageClass();
});

deleteButton.addEventListener("click", () => {
  localStorage.removeItem("entry");
  entryNote.value = "";
  entryCheck();
  manageClass();
});
