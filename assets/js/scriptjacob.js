// assigner den/de div's der har classen ".modul-bg" til js elementet "modal":
var modal = document.querySelector(".modul-bg");



// assigner den/de buttons der har id "#showModul" til js elementet "showModalBtn":
var showModalBtn = document.querySelector("#showModul");

// tilføjer en funktion til knappen "showModalBtn":
showModalBtn.addEventListener("click", function(event)
{
  // og gør modal synlig når du kører den funktion (modal= classen ".modul-bg" fra line 2):
  modal.style.display = "block";
});



// assigner den/de buttons der har id "#addPost" til js elementet "submitNoteBtn":
var submitNoteBtn = document.querySelector("#addPost");

// tilføjer en funktion til knappen "submitNoteBtn":
submitNoteBtn.addEventListener("click", function(event)
{
  // og gør modal usynlig igen når du kører den funktion (modal= classen ".modul-bg" fra line 2):
  modal.style.display = "none";
});
