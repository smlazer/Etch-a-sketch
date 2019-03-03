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
    container.innerHTML = '';
    for (var i = 0; i < 32; i++) {
        var row = document.createElement('div');
        row.className = 'row';
    for ( var j = 0; j < 32; j++) {
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

function resetGrid() {
container.innerHTML = '';
generateGrid();   
}

generateGrid();