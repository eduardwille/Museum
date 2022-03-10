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
                'name':'Amerikaanse Revolutie',
                'destination':'Amerikaanse Revolutie',
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
                'destination':'Koloniën en Plantages',
                'row':4,
                'col':5
            },{
                'name':'Regeringsstelsel',
                'destination':'Regeringsstelsel',
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
    },{ // Amerikaanse Revolutie
        'roomname':'Amerikaanse Revolutie',
        'roomimage':'entrance',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor1',
            'rotation':180,
            'row':9,
            'col':5
            }
        ]
    },{ // Kolonies en plantages
        'roomname':'Koloniën en Plantages',
        'roomimage':'entrance',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor1',
            'rotation':180,
            'row':9,
            'col':5
            }
        ]
    },{ // Regeringsstelsel
        'roomname':'Regeringsstelsel',
        'roomimage':'entrance',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor1',
            'rotation':180,
            'row':9,
            'col':5
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
                'destination':'EIC',
                'row':7,
                'col':1
            },{
                'name':'Britse Revoluties',
                'destination':'Britse Revoluties',
                'row':4,
                'col':5
            },{
                'name':'Opkomst Nationalisme India',
                'destination':'Opkomst Nationalisme India',
                'row':7,
                'col':9
            }
        ]
    },{ // EIC
        'roomname':'EIC',
        'roomimage':'entrance',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor2',
            'rotation':180,
            'row':9,
            'col':5
            }
        ]
    },{ // Britse Revoluties
        'roomname':'Britse Revoluties',
        'roomimage':'entrance',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor2',
            'rotation':180,
            'row':9,
            'col':5
            }
        ]
    },{ // Opkomst Nationalisme India
        'roomname':'Opkomst Nationalisme India',
        'roomimage':'entrance',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor2',
            'rotation':180,
            'row':9,
            'col':5
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
                'destination':'Industriële Revolutie',
                'row':7,
                'col':1
            },{
                'name':'Reform Bill',
                'destination':'Reform Bill',
                'row':4,
                'col':5
            },{
                'name':'Klassen Maatschappij',
                'destination':'Klassen Maatschappij',
                'row':7,
                'col':9
            }
        ]
    },{ // Industriële Revolutie
        'roomname':'Industriële Revolutie',
        'roomimage':'werkplaats',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor3',
            'rotation':180,
            'row':9,
            'col':5
            }
        ]
    },{ // Reform Bill
        'roomname':'Reform Bill',
        'roomimage':'reform',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor3',
            'rotation':180,
            'row':9,
            'col':5
            }
        ]
    },{ // Klassen Maatschappij
        'roomname':'Klassen Maatschappij',
        'roomimage':'klassenmaatschappij',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor3',
            'rotation':180,
            'row':9,
            'col':5
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