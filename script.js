var container = document.getElementById('container');
var gridContainer = document.getElementById('grid-container');

window.onload = function(){
    container.style.backgroundImage = "url('img/entrance.jpg')";
    createGrid();
    placeInteraction();
}

// Creates the grid used for interactive elements
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
function clearGrid(){
    gridContainer.innerHTML = "";
}

// Retrieves grid locations for interactive elements
function placeInteraction(roomnumber){
    //if no roomnumber is given, finds index of entrance
    if(!roomnumber) roomnumber = rooms.findIndex( ({ roomname }) => roomname === 'entrance' );

    //loops through the rows and columns for current room and creates circles in those grid locations
    for(index=0; index <= rooms[roomnumber].rowcols.length-1; index++){
        var currRow = rooms[roomnumber].rowcols[index].row;
        var currCol = rooms[roomnumber].rowcols[index].col;

        var currTableEl = document.getElementById('row'+currRow+'col'+currCol);
        
        var circle = createCircle(index);
        currTableEl.appendChild(circle);

        //gets circle from the DOM, applies onclick that has the index for data array
        //within foreach it will overwrite the number. So all circles will have the same onclick.
        var circle = document.getElementById('circle'+index)
        circle.onclick = function(){
            rowcolid = this.id.substr(this.id.length - 1);
            loadNewPage(rooms[roomnumber].rowcols[rowcolid].destination);
        };
    }
}

// function creates the html circle with arrow used for interaction
function createCircle(destination){
    var circle = document.createElement('div');
    var arrow = document.createElement('i');

    circle.setAttribute('id', 'circle' + destination);
    circle.setAttribute('class', 'circle');
    arrow.setAttribute('class', 'fa-solid fa-angle-up fa-inverse fa-2xl');

    circle.appendChild(arrow);

    return circle;
}

function loadNewPage(destination){
    clearGrid();
    createGrid();
    placeInteraction(rooms.findIndex( ({ roomname }) => roomname === destination ));

    container.style.backgroundImage = 'url(img/'+destination+'.jpg)';
}