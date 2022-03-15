var rooms = [
    { // Floor 1
        'roomname':'Floor1',
        'roomimage':'americaentrance',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Entrance',
                'rotation':180,
                'row':9,
                'col':9
            },{
                'name':'George Washington',
                'destination':'GeorgeWashington',
                'rotation':270,
                'row':7,
                'col':1
            },{
                'name':'Amerikaanse Revolutie',
                'destination':'Amerikaanse Revolutie',
                'row':7,
                'col':4
            },{
                'name':'Koloniën en Plantages',
                'destination':'Koloniën en Plantages',
                'row':7,
                'col':8
            },{
                'name':'Regeringsstelsel',
                'destination':'Regeringsstelsel',
                'row':7,
                'col':12
            },{
                'name':'Hamilton',
                'destination':'Hamilton',
                'rotation':90,
                'row':7,
                'col':17
            }
        ]
    },{ // Amerikaanse Revolutie
        'roomname':'Amerikaanse Revolutie',
        'roomimage':'americarevolutie',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Floor1',
                'rotation':180,
                'row':9,
                'col':9
            },{
                'type':'info',
                'title':'Boston Tea Party',
                'description':'Verhaal over de boston tea party...',
                'row':5,
                'col':7
            },{
                'type':'info',
                'title':'Standstill',
                'description':'Verhaal over de standstill...',
                'row':5,
                'col':12
            },{
                'type':'info',
                'title':'Revolutie',
                'description':'Verhaal over de revolutie in amerika...',
                'row':6,
                'col':16
            }   
        ]
    },{ // Kolonies en plantages
        'roomname':'Koloniën en Plantages',
        'roomimage':'slavernij',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor1',
            'rotation':180,
            'row':9,
            'col':9
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':7
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':12
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':16
            } 
        ]
    },{ // Regeringsstelsel
        'roomname':'Regeringsstelsel',
        'roomimage':'regeringsstelsel',
        'rowcols':[
            {
            'name':'Terug',
            'destination':'Floor1',
            'rotation':180,
            'row':9,
            'col':9
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':2
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':7
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':12
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
                'col':9
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':7
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':11
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
                'col':9
            }
        ]
    },
    
    
    
    { // Floor 2
        'roomname':'Floor2',
        'roomimage':'britishindieentrance',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Entrance',
                'rotation':180,
                'row':9,
                'col':9
            },{
                'name':'EIC',
                'destination':'EIC',
                'row':6,
                'col':4
            },{
                'name':'Britse Revoluties',
                'destination':'Britse Revoluties',
                'row':6,
                'col':9
            },{
                'name':'Nationalisme India',
                'destination':'Opkomst Nationalisme India',
                'row':6,
                'col':14
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
            'col':9
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
            'col':9
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
            'col':9
            }
        ]
    },
    
    
    { // Floor 3
        'roomname':'Floor3',
        'roomimage':'werkplaatsentrance',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Entrance',
                'rotation':180,
                'row':9,
                'col':9
            },{
                'name':'Industriële Revolutie',
                'destination':'Industriële Revolutie',
                'row':6,
                'col':3
            },{
                'name':'Reform Bill',
                'destination':'Reform Bill',
                'row':6,
                'col':9
            },{
                'name':'Klassen Maatschappij',
                'destination':'Klassen Maatschappij',
                'row':6,
                'col':15
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
            'col':9
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':3
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':9
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':15
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
            'col':9
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':3
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':15
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
            'col':9
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':3
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':9
            },{
                'type':'info',
                'title':'',
                'description':'',
                'row':5,
                'col':15
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
                'col':2
            },{
                'name':'Brits-Indië',
                'destination':'Floor2',
                'row':4,
                'col':9
            },{
                'name':'Werkplaats van de wereld',
                'destination':'Floor3',
                'row':7,
                'col':16
            }
        ]
    }
];