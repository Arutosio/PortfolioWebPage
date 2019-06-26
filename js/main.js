const domDiv = document.getElementById("IdMainDiv");
const newElementTable = document.createElement("table").textContent = "Repleace DONE";
domDiv.replaceChild(newElementTable,domDiv.getElementById('IdResTabella'));