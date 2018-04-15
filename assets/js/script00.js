var modal = document.querySelector(".modal-bg");

function setLocal(localNotes) {
  var jsonData = JSON.stringify(localNotes);

  localStorage.setItem("comment00", jsonData);
}

function getLocal() {
  var notes = localStorage.getItem("comment00");

  if(notes == null)
  {
    return [];
  }
  else {
    return JSON.parse(notes);
  }
}

function submitNote(text, time) {
  var origNotes = getLocal();

  var newNote = {
    text: text,
    dueDate: time,
  };

  origNotes.push(newNote);

  setLocal(origNotes);
}

function buildList() {
  var noteList = getLocal();
  var ulElm = document.querySelector("ul");

  ulElm.innerHTML = "";

  for(var i = 0; i < noteList.length; i++) {
    var liElm = document.createElement("li");
    var pElm = document.createElement("p");

    pElm.innerHTML = noteList[i].text;
    liElm.appendChild(pElm);

    ulElm.appendChild(liElm);
  }
}

function submitNoteEvent(event) {
  var noteText = document.querySelector("#noteText");

  var noteTime = new Date();

  submitNote(noteText.value, noteTime.value);
  buildList();
}

window.onload = function() {
  buildList();
}

var submitNoteBtn = document.querySelector("#addNote");

submitNoteBtn.addEventListener("click", submitNoteEvent)
