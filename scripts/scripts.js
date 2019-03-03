const container = document.querySelector('#container');

function generateGrid() {
for (var i = 0; i < 16; i++) {
    var row = document.createElement('div');
    row.className = 'row';
for ( var j = 0; j < 16; j++) {
    var cell = document.createElement('div');
    cell.className = 'cell';
    cell.onmouseover = function(event) {
        let target = event.target;
        target.style.background = 'black';
      }
    row.appendChild(cell);
        }
       container.appendChild(row);
    }
}


function generateGrid2() {
    var x = prompt("Please Choose a number between 16 and 100");
    var num = parseInt(x);
    if(num >= 16 && num <= 100) {
    container.innerHTML = '';
    for (var i = 0; i < num; i++) {
        var row = document.createElement('div');
        row.className = 'row';
    for ( var j = 0; j < num; j++) {
        var cell = document.createElement('div');
        cell.className = 'cell';
        cell.onmouseover = function(event) {
            let target = event.target;
            target.style.background = 'black';
          }
        row.appendChild(cell);
            }
           container.appendChild(row);
        }
    }
    else {
        alert("Please choose a correct number. Generating default grid.");
        container.innerHTML = '';
        generateGrid();     
    }
}

function resetGrid() {
container.innerHTML = '';
generateGrid();   
}

generateGrid();