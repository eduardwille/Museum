var container = document.getElementById('container');
var gridContainer = document.getElementById('grid-container');

window.onload = function(){
    container.style.backgroundImage = "url('img/entrance.jpg')";
    createGrid();
    placeInteraction();
}

function createGrid(){
    var rows = 10;
    var cols = 10;

    for(index = 0; index <= rows; index++){
        var rowEl = document.createElement('div');
        rowEl.setAttribute('class', 'row');
        
        gridContainer.appendChild(rowEl);

        for(i = 0; i <= cols; i++){
            var colEl = document.createElement('div');
            colEl.setAttribute('id', 'row' + index + 'col' + i);
            colEl.setAttribute('class', 'col-sm');

            colEl.innerHTML = 'row ' + index + ' col ' + i;

            rowEl.appendChild(colEl);
        }
    }
}

function placeInteraction(){
    var row = 1;
    var col = 5;

    var foundCol = document.getElementById('row'+row+'col'+col);
    console.log(foundCol);

    
}