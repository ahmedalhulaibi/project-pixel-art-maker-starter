let color;
document.addEventListener("DOMContentLoaded", function () {
    const colorPickerElement = document.getElementById("colorPicker");
    //initialize color value
    color = colorPickerElement.value;
    // Select color input
    
    colorPickerElement.addEventListener("change", function (event) {
        color = colorPickerElement.value;
    });

    // When size is submitted by the user, select size and call makeGrid()
    document.querySelector('[type="button"]').addEventListener("click", function () {
        let size = [document.getElementById("inputHeight").value,
                    document.getElementById("inputWidth").value];
        // size[0] = document.getElementById("inputHeight").value;
        // size[1] = document.getElementById("inputWidth").value;
        makeGrid(size);
    });
});

function makeGrid(size) {

    let gridTbody = document.createElement("tbody")
    
    let clickEvent = function colorCell(event) {
        if (event.target.className === "cell")
        {
            event.target.style.backgroundColor = color;
        }
        console.log(`Clicked: ${event.target.className}`);
    };

    // loop over each row
    for (let i = 0; i < size[0]; i++) {
        let row = document.createElement("tr");
        row.className = `row-${i}`;
        // loop for each cell
        for (let j = 0; j < size[1]; j++) {
            let cell = document.createElement("td");
            cell.className = "cell";
            cell.id = `row-${i}_cell-${j}`;
            row.appendChild(cell);
        }
        gridTbody.appendChild(row);
    }

    let canvas = document.getElementById("pixelCanvas");
    let canvasChild = canvas.firstChild;

    if (canvasChild !== null && canvas !== undefined) {
        canvas.removeChild(canvas.firstChild);
    }
    canvas.appendChild(gridTbody);
    gridTbody.addEventListener('click',clickEvent);

}
