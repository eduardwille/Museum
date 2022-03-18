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
            },/*{
                'name':'Hamilton',
                'destination':'Hamilton',
                'rotation':90,
                'row':7,
                'col':17
            }*/
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
                'description':'De Boston Tea party is een van de bekendste handelingen van verzet en wordt vaak ook wel gezien als het symbolische begin van het verzet tegen het Britse rijk. Na deze gebeurtenis trad de Britse overheid een stuk harder op, wat het verzet alleen maar meer aanzette. ',
                'row':5,
                'col':7
            },{
                'type':'info',
                'title':'Het einde van de oorlog',
                'description':'Op 19 April 1775 werd de eerste slag tussen het Britse leger en de Minute men gevochten, dit was de eerste echte nederlaag voor de Britten. Hierna werd er op 4 Juli 1776 werd de Declaration of Independence getekend. Dit was grotendeels geschreven door de later gekozen president Thomas Jefferson. De oorlog duurde tot 1783. In hetzelfde jaar werd het verdrag can Versailles getekend. Gepaard met dit verdrag kwam er dan eindelijk een officieel einde aan de oorlog en was Amerika eindelijk onafhankelijk.',
                'row':5,
                'col':12
            },{
                'type':'info',
                'title':'Eerste stap naar onafhankelijk',
                'description':'Doordat het de Britten heel veel geld had gekost om het grootste deel van Amerika over te nemen, moesten ze de belastingen steeds verder omhoog gooien. De koloniën werden dus uitgeperst en om dit nog erger te maken stelden ze veel wetten in wat ze extra belasting op bepaalde producten legden, zoals suiker, wijn en koffie, maar vooral op de thee. De kolonies vonden het oneerlijk dat ze zoveel belasting moesten betalen maar niet dezelfde gelijke rechten hadden. ',
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
                'title':'De dertien koloniën',
                'description':'De Dertien Koloniën waren de Britse kolonieën in Amerika. Ze zijn onderverdeeld in drie categorieën. Het Noorden was niet erg vruchtbaar, dus er werd vooral handel gedreven. In het Zuiden lagen de grotere steden met meer verschillende nijverheden. Er werd ook hier veel handel gedreven. De derde groep was erg ver in ontwikkeling van plantages. Dit was omdat het vruchtbaar land aan de kust was, hier werden ook de meeste slaven gedreven.',
                'row':5,
                'col':7
            },{
                'type':'info',
                'title':'Slavernij op plantages',
                'description':'Slaven werden door slavendrijvers gedwongen om op plantages te werken. Vaak werden producten zoals suiker, katoen en indigo geteeld. De omstandigheden waren erg slecht, en het was vreselijk om in de hete zon urenlang te werken zonder eten, drinken of pauzes. ',
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
                'title':'Grondwet en de komst van de United States of America',
                'description':'Zodat ze een officiële eigen staat konden worden, hebben ze de nieuwe Amerikaanse grondwet aangelegd. De dertien kolonies werden samen herenigd door deze nieuwe grondwet en vormden zo de Unie van Verenigde Staten. George Washington werd later in 1789 tot president uitgeroepen em was dan ook de eerste president van de nu lange lijn.',
                'row':5,
                'col':2
            },{
                'type':'info',
                'title':'De onafhankelijkheidsverklaring',
                'description':'Benjamin Franklin, John Adams en Thomas Jefferson zijn op dit schilderij te zien. Ze zijn aan het werk met de onafhankelijkheidsverklaring van Amerika. Het werd aangenomen op 4 Juli 1776. “Life, liberty and the pursuit of happiness” zijn een paar van de meest belangrijke woorden. ',
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
                'title':'George Washington',
                'description':'George Washington (1732-1799) was een belangrijke generaal en de eerste president (1789-1799) van de Verenigde Staten van Amerika. Hij was van Engelse afkomst, en heeft twee termen als president voltooid, met John Adams als vice president. Hij vocht voor de Amerikaanse onafhankelijkheid, en heeft voor vele successen gezorgd.',
                'row':5,
                'col':7
            },{
                'type':'info',
                'title':'',
                'description':'George Washington is misschien wel de meeste bekende founding father. Hij staat tevens ook op het 1 dollar biljet. Het Washington Momument is voor hem gebouwd. Dit was om hem te eren als een officier en president. Op 14 december 1799 is hij overleden aan een keel onsteking. Zijn laatste woorden waren: "I am just going" en "Tis well". Hij is begraven in Mount Vernon.',
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
                'col':14
            }
        ]
    },{ // EIC
        'roomname':'EIC',
        'roomimage':'eic',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Floor2',
                'rotation':180,
                'row':9,
                'col':9
            },{
                'type':'info',
                'title':'Begin britse rijk Indië',
                'description':'Na een aantal veldslagen tegen wat vorsten kwam het verdrag van Allahabad en kreeg de EIC de macht in Bengalen. Dit was het begin van het Britse Rijk in India. In het begin regeren ze via een Mogel, dit was een soort onderkoning, maar nadat hij de kant van opstandelingen koos tijdens een opstand, kwam Brits-Indië onder direct gezag van de EIC. (In 1857 komt Brits-Indië onder direct gezag van de Britse regering.) Na een opstand in 1857 komt Brits-Indië onder de Britse kroon en is de EIC niet langer de bestuurder. Queen Victoria is Keizer van India.',
                'row':4,
                'col':5
            },{
                'type':'info',
                'title':'De East-Indian Company',
                'description':'De East-Indian Company was de VOC van Engeland. Dit is door de Engelsen opgericht in 1600 voor de handel net Azië. Dit was dus niet van origine bedoeld om te heersen, maar echt puur voor de handel. Zo hadden ze ook alleen maar puntjes in de andere landen, omdat veroveren veel te duur was, waar ze zeker na de dure oorlog met Amerika geen geld meer voor hadden. ',
                'row':4,
                'col':14
            }
        ]
    },{ // Britse Revoluties
        'roomname':'Britse Revoluties',
        'roomimage':'revolutiebritsindie',
        'rowcols':[
            {
                'name':'Terug',
                'destination':'Floor2',
                'rotation':180,
                'row':9,
                'col':9
            },{
                'type':'info',
                'title':'De opkomst van het Indiase Nationalisme',
                'description':'Alhoewel de Indiërs technisch gezien wel mochten toetreden tot de koloniale ambtenarij, gebeurde dit maar weinig. Om meer kansen mogelijk te maken voor de Indiërs, stichtten hoogopgeleide verwesterde Indiërs het Indian National Congress op. Dit was de Nationalistische Partij van India (vanaf 1885) De Indiërs werden vooral Nationalistisch tijdens de Swadeshi movement van 1905, waar ze zeiden "wij behoren tot onze natie".',
                'row':4,
                'col':6
            },{
                'type':'info',
                'title':'Oorzaak revoluties',
                'description':'De inlandse mensen werden dubbele belasting opgelegd, niet alleen door de EIC, maar ook door de inheemse belasting. De Britse regering zet ook nog eens een Brits bestuur op met een betrouwbaar ambtenarencorps. De eerste officiële opstand van de Indiërs tegen de Britten was in 1857, doordat er Britse pogingen om India te verwesteren waren, die ze niet accepteerden. Dit wordt ook wel de Indian Rebellion genoemd.',
                'row':4,
                'col':14
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
                'title':'De Spinning Jenny',
                'description':'De Spinning Jenny (uitgevonden door James Hargreaves in 1764) was een uitvinding die voor grootse stappen in de industriele revolutie zorgde. Het idee erachter was een spinmachine (spinnewiel) maar dan beter functionerend. Een Spinning Jenny had 8 in plaats van 1 spoel, waardoor er 16 draden tegelijk gesponnen konden worden. Zo werd spinnen dus sneller en goedkoper.',
                'row':5,
                'col':3
            },{
                'type':'info',
                'title':'Omstandigheden in de fabriek',
                'description':'Omstandigheden in fabrieken waren erg ongunstig voor arbeiders. Tientallen machines stonden erg dicht op elkaar, en het lawaai was dus onverdraagbaar. Door slechte ventilatie was het altijd bloedverstikkend heet, en door slechte isolatie was het ook vrijwel altijd tochtig. Er was slechte verlichting, en het stonk altijd door alle vieze mensen en hun kleding.',
                'row':5,
                'col':9
            },{
                'type':'info',
                'title':'De stoommachine',
                'description':'In 1780 werd de stoommachine uitgevonden. Dit kwam doordat er in Engeland ontzettend veel steenkool was, maar doordat ze er zoveel van gebruikten moesten ze op een gegeven moment gaan graven voor de steenkool. De mijnen liepen vaak onder met water, hier moesten ze iets op verzinnen zodat het graven door kon gaan. Dit was de stoommachine, met deze nieuwe uitvinding konden ze het water weg pompen. Maar de mens is slim en het bleef niet zo maar bij een machine voor het wegpompen van water. We kwamen er snel achter dat de stoommachine eigenlijk overal inzetbaar was!',
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
                'title':'Factory Act',
                'description':'In 1833 kwam de factory act tot stand. Het doel van de factory act streefde om de werksomstandigheden van kinderen te verbeteren. Zo zorgde het ervoor dat kinderen onder de 9 jaar geen fabriekwerk meer mochten doen. Ook mochten kinderen van 13 tot 18 niet meer zo lang werken, deze tijd werd verkort naar maximaal 12 uur per dag.',
                'row':5,
                'col':3
            },{
                'type':'info',
                'title':'De reform bill',
                'description':'Door de Reform Bill van 1832 kregen ondernemers in de steden een stuk meer inspraak. Ook werd het mannenkiesrecht uitgebreid, de normale, werkende man mocht nu dus ook gaan stemmen. Voor vrouwen ging het nog wat langer duren. Heel veel mensen waren het niet eens met de nieuwe verandering in de wet en waren hier erg boos over.',
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
                'title':'Begin klassenmaatschappij',
                'description':'Ookal waren er meer kansen voor iedereen was er nogsteeds veel armoede en slechte levensomstandigheden. Veel mensen trokken van het platteland naar de stad, deze mensen kwamen dicht bij de fabrieken te wonen. Dit veroorzaakte een arme stedelijke arbeidsklasse.',
                'row':5,
                'col':3
            },{
                'type':'info',
                'title':'Effecten van de klassenmaatschappij',
                'description':'Door de omkomst van de klassenmaatschappij waren er gelijkere kansen voor iedereen. Zelfs een arme krantenjongen kon bedrijfsleider worden. Maar in tegendeel zou een rijke bedrijfsleider ook zijn rijkdom kunnen verliezen. Hierdoor konden mensen zelf zorgen voor hun plek in de maatschappij.',
                'row':5,
                'col':9
            },{
                'type':'info',
                'title':'De bourgeosie',
                'description':'De voordelen van de klassenmaatschappij begon wel bij de rijkste groep, de bourgeosie. Dit waren de meest opgeleiden en erkende mensen van de 19e eeuw. Zoals artsen, legerofficieren, juristen, bankiers, etc. Deze mensen begonnen steeds meer naar elkaar toe te trekken en een elitairen groep te vormen. Zo duwde zij de normale arbeiders nog verder naar armoede. Gelukkig kwam later de voordelen van de klassenmaatschappij ook aan bij de armere burgers.',
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