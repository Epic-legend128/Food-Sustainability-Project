const colors = {
    "index": ["black"],
    "info":  ["black"],
    "form":  ["black"],
    "login": ["rgb(218, 242, 218)", "rgb(238, 244, 235)"],
    "browse":  ["rgb(218, 242, 218)", "rgb(238, 244, 235)"]
};

const locations = [
    {
        "name": "Eurospin",
        "longitude": 18.293213,
        "latitude": 40.199527,
        "city": "Martano"
    },
    {
        "name": "Eurospin",
        "longitude": 12.483974,
        "latitude": 41.989249,
        "city": "Roma"
    },
    {
        "name": "CONAD",
        "longitude": 18.053307,
        "latitude": 40.37775,
        "city": "Novoli"
    },
    {
        "name": "Terra Nostra Di De Fazio Luciano",
        "longitude": 16.422805,
        "latitude": 39.111672,
        "city": "Bianchi"
    },
    {
        "name": "Conad",
        "longitude": 17.244068,
        "latitude": 40.785842,
        "city": "Alberobello"
    },
    {
        "name": "Lidl",
        "longitude": 17.099024,
        "latitude": 41.055856,
        "city": "Mola di Bari"
    },
    {
        "name": "CRAI",
        "longitude": 14.607851,
        "latitude": 36.951351,
        "city": "Comiso"
    },
    {
        "name": "CONAD",
        "longitude": 14.457415,
        "latitude": 40.758099,
        "city": "Torre Annuziata"
    },
    {
        "name": "Conad Superstore",
        "longitude": 14.24955,
        "latitude": 40.924146,
        "city": "Casandrino"
    },
    {
        "name": "CONAD",
        "longitude": 12.884608,
        "latitude": 38.01904,
        "city": "Castellammare del Golfo"
    },
    {
        "name": "Supermarceto Pam Express",
        "longitude": 9.766867,
        "latitude": 40.440919,
        "city": "Sos Alinos"
    },
    {
        "name": "Eurospin",
        "longitude": 9.296606,
        "latitude": 40.321711,
        "city": "Nuoro"
    },
    {
        "name": "Dettori Market",
        "longitude": 9.682028,
        "latitude": 40.717944,
        "city": "Budoni"
    },
    {
        "name": "Dettorimarket",
        "longitude": 9.668544,
        "latitude": 40.772248,
        "city": "San Teodoro"
    },
    {
        "name": "Eurospin",
        "longitude": 9.663951,
        "latitude": 40.773324,
        "city": "San Teodoro"
    },
    {
        "name": "CONAD",
        "longitude": 9.100833,
        "latitude": 40.902214,
        "city": "Tempio Pausania"
    },
    {
        "name": "Simply Market",
        "longitude": 9.305849,
        "latitude": 40.322679,
        "city": "Nuoro"
    },
    {
        "name": "Eurospin",
        "longitude": 9.30751,
        "latitude": 40.320469,
        "city": "Nuoro"
    },
    {
        "name": "CONAD SUPERSTORE",
        "longitude": 8.549678,
        "latitude": 39.307272,
        "city": "Iglesias"
    },
    {
        "name": "Eurospin",
        "longitude": 8.798564,
        "latitude": 39.557123,
        "city": "San Gavino Monreale"
    },
    {
        "name": "Eurospin",
        "longitude": 8.727476,
        "latitude": 40.596112,
        "city": "Siligo"
    },
    {
        "name": "Eurospin",
        "longitude": 8.590133,
        "latitude": 40.790459,
        "city": "Sennori"
    },
    {
        "name": "Lidl",
        "longitude": 8.328149,
        "latitude": 40.563881,
        "city": "Alghero"
    },
    {
        "name": "Eurospin",
        "longitude": 8.342488,
        "latitude": 40.571518,
        "city": "Alghero"
    },
    {
        "name": "Lidl",
        "longitude": 8.769673,
        "latitude": 44.433368,
        "city": "Genova"
    },
    {
        "name": "Esselunga",
        "longitude": 8.444805,
        "latitude": 45.135471,
        "city": "Casale Monferrato Provincia di Asti"
    },
    {
        "name": "Leader Price",
        "longitude": 9.027982,
        "latitude": 45.530779,
        "city": "Rho"
    },
    {
        "name": "ALDI",
        "longitude": 9.052156,
        "latitude": 45.757159,
        "city": "Fino Mornasca"
    },
    {
        "name": "Lidl",
        "longitude": 8.722519,
        "latitude": 45.678851,
        "city": "Somma Iombardo"
    },
    {
        "name": "Prestofresco",
        "longitude": 8.636712,
        "latitude": 45.714399,
        "city": "Castalletto sopra Ticino"
    },
    {
        "name": "Conad",
        "longitude": 8.096137,
        "latitude": 45.193438,
        "city": "Crescentino"
    },
    {
        "name": "Carrefour Express",
        "longitude": 7.447596,
        "latitude": 45.152403,
        "city": "Val della Torre"
    },
    {
        "name": "Piazza Paradiso",
        "longitude": 7.593136,
        "latitude": 45.077577,
        "city": "Collegno"
    },
    {
        "name": "Lidl",
        "longitude": 7.702056,
        "latitude": 45.102331,
        "city": "Torino"
    },
    {
        "name": "CONAD",
        "longitude": 7.69605,
        "latitude": 45.071239,
        "city": "Torino"
    },
    {
        "name": "Prestofresco",
        "longitude": 7.658701,
        "latitude": 45.095346,
        "city": "Torino"
    },
    {
        "name": "Gross Iper Poirino",
        "longitude": 7.8578,
        "latitude": 44.902928,
        "city": "Poirino"
    },
    {
        "name": "Eataly Monticello",
        "longitude": 7.96752,
        "latitude": 44.69986,
        "city": "Monticello d'Alba"
    },
    {
        "name": "CONAD ARCURI",
        "longitude": 17.12829,
        "latitude": 39.364608,
        "city": "Cirò Marina"
    },
    {
        "name": "Coop",
        "longitude": 11.096151,
        "latitude": 44.72463,
        "city": "Ravarino"
    },
    {
        "name": "NON SOLO PANE",
        "longitude": 7.304299,
        "latitude": 45.315201,
        "city": "Ala di Stura"
    },
    {
        "name": "Coop",
        "longitude": 8.265562,
        "latitude": 46.073051,
        "city": "Villadossola"
    },
    {
        "name": "Vizi E Sfizi",
        "longitude": 14.51089,
        "latitude": 41.746871,
        "city": "Saltico"
    }
];

const RADIUS = 6371; // radius of the earth

//constants used to convert between units of measurement, centimeters, inches and
const FROMKG = 2.205;
const FROMCM = 2.54;

var heightFactor = FROMCM;
var weightFactor = FROMKG;

const l = 1000; // helping variable for the lose and gain function

/*
//basic tempate
{
    title: "", //title
    image: "", // url
    desc: "", //description,
    time: null, // estimated time to make
    ingredients: [{name: "", quantity: null, unit: ""}], //name, quantity and unit of measurement
    nutrients: {calcium: null, proteins: null, calories: null, fats: null, carbs: null, saturates: null, sugars: null, salt: null, fibre: null}, // different nutrients
    seasons: [], //includes a list of all of the seasons it is naturaly produced in
    labels: [] // other labels, like healthy, unhealthy, quick etc
}

{name: "", quantity: null, unit: ""}
*/