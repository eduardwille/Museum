var rooms = [
    { // Floor 1
        'roomname':'Floor1',
        'roomimage':'entrance',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Entrance',
                'rotation':180,
                'row':9,
                'col':5
            },{
                'name':'Revolutie',
                'destination':'',
                'row':7,
                'col':1
            },{
                'name':'George Washington',
                'destination':'GeorgeWashington',
                'rotation':270,
                'row':7,
                'col':0
            },{
                'name':'Koloniën en Plantages',
                'destination':'',
                'row':4,
                'col':5
            },{
                'name':'Regeringsstelsel',
                'destination':'',
                'row':7,
                'col':9
            },{
                'name':'Hamilton',
                'destination':'Hamilton',
                'rotation':90,
                'row':7,
                'col':10
            }
        ]
    },{ // George Washington
        'roomname':'GeorgeWashington',
        'roomimage':'georgewashington',
        'rowcols' : [
            {
                'name':'Terug',
                'destination':'Floor1',
                'rotation':180,
                'row':9,
                'col':5
            }
        ]
    },{ // Hamilton
        'roomname':'Hamilton',
        'roomimage':'hamilton',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Floor1',
                'rotation':180,
                'row':9,
                'col':5
            }
        ]
    },
    
    
    
    { // Floor 2
        'roomname':'Floor2',
        'roomimage':'entrance',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Entrance',
                'rotation':180,
                'row':9,
                'col':5
            },{
                'name':'EIC',
                'destination':'',
                'row':7,
                'col':1
            },{
                'name':'Revoluties',
                'destination':'',
                'row':4,
                'col':5
            },{
                'name':'Opkomst Nationalisme India',
                'destination':'',
                'row':7,
                'col':9
            }
        ]
    },
    
    
    { // Floor 3
        'roomname':'Floor3',
        'roomimage':'entrance',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Entrance',
                'rotation':180,
                'row':9,
                'col':5
            },{
                'name':'Industriële Revolutie',
                'destination':'',
                'row':7,
                'col':1
            },{
                'name':'Reform Bill',
                'destination':'',
                'row':4,
                'col':5
            },{
                'name':'Klassen Maatschappij',
                'destination':'',
                'row':7,
                'col':9
            }
        ]
    },
    
    
    { // Entrance
        'roomname':'Entrance',
        'roomimage':'entrance',
        'rowcols' : [
            {
                'name':'American Revolution',
                'destination':'Floor1',
                'row':7,
                'col':1
            },{
                'name':'Brits-Indië',
                'destination':'Floor2',
                'row':4,
                'col':5
            },{
                'name':'Werkplaats van de wereld',
                'destination':'Floor3',
                'row':7,
                'col':9
            }
        ]
    }
];