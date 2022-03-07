var container = document.getElementById('container');
var welcomePage = document.getElementById('welcome-page');
var gridContainer = document.getElementById('grid-container');

// load welcome screen
window.onload = function(){
    container.style.backgroundImage = "url('img/museum.jpg')";
    document.getElementById('welcome-btn').onclick = function(){
        welcomePage.style.display = 'none';
        loadNewPage('entrance');
    };
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

            //colEl.innerHTML = 'row ' + index + ' col ' + i;

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

        //function to set circle onclick + add rotation
        setCircle(roomnumber, index);
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

// sets circle onclick and rotation.
function setCircle(roomnumber, index){
    var circle = document.getElementById('circle'+index)

    if(rooms[roomnumber].rowcols[index].rotation) {
        var rotation = rooms[roomnumber].rowcols[index].rotation;
    }
    else {
        var rotation = 0;
    }

    circle.style.msTransform = 'rotate('+rotation+'deg)'; // IE9
    circle.style.transform = 'rotate('+rotation+'deg)';

    circle.onclick = function(){
        rowcolid = this.id.substr(this.id.length - 1);

        //if destination is empty, dont run loadnewpage
        var destination = rooms[roomnumber].rowcols[rowcolid].destination;
        if(destination) loadNewPage(rooms[roomnumber].rowcols[rowcolid].destination);
    };
}

function loadNewPage(destination){
    clearGrid();
    createGrid();
    placeInteraction(rooms.findIndex( ({ roomname }) => roomname === destination ));

    container.style.backgroundImage = 'url(img/'+destination+'.jpg)';
}