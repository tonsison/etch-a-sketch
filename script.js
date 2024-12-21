const container = document.querySelector("#container");
const numberSquares = document.querySelector("#popup");
const rowsPresent = document.querySelector(".row");

let initialRow = 16;

function sketchTrace(userRow) {
  for (i = 0; i < userRow; i++) {
    const row = document.createElement("div")
    row.id = "row";
    for (j = 0; j < userRow; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.textContent = ".";
      column.addEventListener('mouseenter', () => {
        column.style.backgroundColor = "black";
      });

      row.appendChild(column);
    }
    container.appendChild(row);
  }
}

sketchTrace(initialRow);

function clearTrace(oldRow) {
  for (i = 0; i < oldRow; i++) {
    const myDiv = document.getElementById("row");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);
  }
}

numberSquares.addEventListener('click', () => {
  let userRow = prompt("How many squares do you want for each side?");
  if (userRow <= 100) {
    clearTrace(initialRow);
    initialRow = userRow;
    sketchTrace(userRow);
  }
  else {
    alert("Please use a MAXIMUM of 100 squares");
  }
});