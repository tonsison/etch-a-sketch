const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
  const row = document.createElement("div")
  row.classList.add("row");

  for (j = 0; j < 16; j++) {
    const column = document.createElement("div");
    column.classList.add("column");
    column.addEventListener('mouseenter', () => {
      column.style.backgroundColor = "black";
    });

    row.appendChild(column);
  }
  container.appendChild(row);
}