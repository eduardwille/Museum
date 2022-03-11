var container = document.getElementById('container');
var welcomePage = document.getElementById('welcome-page');
var gridContainer = document.getElementById('grid-container');

// load welcome screen
window.onload = function(){
    container.style.backgroundImage = "url('img/museum.jpg')";
    document.getElementById('welcome-btn').onclick = function(){
        welcomePage.style.display = 'none';
        loadNewPage('Entrance');
    };
}

// Creates the grid used for interactive elements
function createGrid(){
    var rows = 10;
    var cols = 10;

    for(index = 1; index <= rows; index++){
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
    //loops through the rows and columns for current room and creates circles in those grid locations
    for(index=0; index <= rooms[roomnumber].rowcols.length-1; index++){
        var currRow = rooms[roomnumber].rowcols[index].row;
        var currCol = rooms[roomnumber].rowcols[index].col;

        var currTableEl = document.getElementById('row'+currRow+'col'+currCol);
        
        var circle = createCircle(roomnumber, index);
        currTableEl.appendChild(circle);

        //function to set circle onclick + add rotation
        setCircle(roomnumber, index);
    }
}

// function creates the html circle with fontAwesome used for interaction
function createCircle(roomnumber, destination){
    var circleContainer = document.createElement('div');
    var text = document.createElement('p');
    var circle = document.createElement('div');
    var fontAwesome = document.createElement('i');

    circleContainer.setAttribute('class', 'circleContainer');

    circle.setAttribute('id', 'circle' + destination);

    circle.setAttribute('class', 'circle circleContainerChild');
    text.setAttribute('class', 'circleContainerChild');

    if(rooms[roomnumber].rowcols[destination].type == 'info') fontAwesome.setAttribute('class', 'fa-solid fa-info fa-inverse fa-2xl');
    else fontAwesome.setAttribute('class', 'fa-solid fa-angle-up fa-inverse fa-2xl');

    circle.appendChild(fontAwesome);
    circleContainer.appendChild(circle);
    
    if(rooms[roomnumber].rowcols[destination].name) {
        text.innerHTML = "Ga naar: " + rooms[roomnumber].rowcols[destination].name/*.replace(/([A-Z])/g, ' $1')*/;
        circleContainer.appendChild(text);
    }

    return circleContainer;
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

        if(rooms[roomnumber].rowcols[rowcolid].type == 'info'){
            showPopup();
        }
        else {
            if(rooms[roomnumber].rowcols[rowcolid].destination) loadNewPage(rooms[roomnumber].rowcols[rowcolid].destination);
        }
    };
    
}

function loadNewPage(room){
    clearGrid();
    createGrid();
    placeInteraction(rooms.findIndex( ({ roomname }) => roomname === room ));

    var roomdata = rooms.find( ({ roomname }) => roomname === room);
    container.style.backgroundImage = 'url(img/'+roomdata.roomimage+'.jpg)';
}

function showPopup(){
    var modal = new bootstrap.Modal(document.getElementById('descriptionModal'));
    modal.show();
}