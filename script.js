const container = document.querySelector("#container");
const numberSquares = document.querySelector("#popup");
const rowsPresent = document.querySelector(".row");

let initialRow = 16;
let initialColumn = 16;

function sketchTrace(userRow, userColumn) {
  for (i = 0; i < userRow; i++) {
    const row = document.createElement("div")
    row.id = "row";
    for (j = 0; j < userColumn; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.textContent = "X";
      column.addEventListener('mouseenter', () => {
        column.style.backgroundColor = "black";
      });

      row.appendChild(column);
    }
    container.appendChild(row);
  }
}

sketchTrace(initialRow, initialColumn);

function clearTrace(oldRow) {
  for (i = 0; i < oldRow; i++) {
    const myDiv = document.getElementById("row");
    const parent = myDiv.parentNode;
    parent.removeChild(myDiv);
  }
}

numberSquares.addEventListener('click', () => {
  buttonPressed = true;
  let userRow = prompt("How many rows of squares do you want?");
  let userColumn = prompt("How many columns of squares do you want?");
  clearTrace(initialRow);
  initialRow = userRow;
  sketchTrace(userRow, userColumn);
});