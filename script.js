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

function placeInteraction(roomnumber){
    if(!roomnumber) roomnumber = 0;
    for(index=0; index <= rooms[roomnumber].rowcols.length-1; index++){
        var currRow = rooms[roomnumber].rowcols[index].row;
        var currCol = rooms[roomnumber].rowcols[index].col;

        var currTableEl = document.getElementById('row'+currRow+'col'+currCol);
        
        var circle = createCircle();

        currTableEl.appendChild(circle);
    }
}

function createCircle(){
    var circle = document.createElement('div');
    var arrow = document.createElement('i');

    circle.setAttribute('class', 'circle');
    arrow.setAttribute('class', 'fa-solid fa-angle-up fa-inverse fa-2xl');

    circle.appendChild(arrow);

    return circle;
}