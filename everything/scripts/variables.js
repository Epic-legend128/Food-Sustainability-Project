/*
//basic tempate
{
    title: "", //title
    image: "", // url
    desc: "", //description,
    time: null, // estimated time to make
    ingedients: [{name: "", quantity: null, unit: ""}], //name, quantity and unit of measurement
    nutrients: {calcium: null, proteins: null, calories: null, fats: null, carbs: null, saturates: null, sugars: null, salt: null, fibre: null}, // different nutrients
    seasons: [], //includes a list of all of the seasons it is naturaly produced in
    labels: [] // other labels, like healthy, unhealthy, quick etc
}

{name: "", quantity: null, unit: ""}
*/


//the recipes
const recipes = [
    {
        title: "Banana Bread",
        image: "../images_and_videos/Easy_Healthy_Delicious_Banana_Bread.jpg",
        desc: "<ol><li>Preheat the oven to 180°C ( °F)</li><li>Grease a bread tin or a rectangular cake pan with some coconut oil.</li><li>Mash the bananas well or puree them with a hand blender. Add in the sifted stevia</li><li>Add the coconut oil, vanilla, cinnamon powder and mix well</li><li>Sieve the spelt flour with the baking soda, baking powder and salt directly into the bowl containing the mashed bananas</li><li>Fold the sieved flour really well and this is important so it's mixed evenly</li><li>Pour the bread mixture into the loaf pan</li><li>Bake at 180 degree C for 30-40 minutes or till a toothpick inserted in the bread comes out clean</li><li>Once it's cooled a little, remove the bread from the pan, slice and serve warm</li>",
        time: 60,
        ingedients: [{name: "ripe bananas", quantity: 3, unit: "medium sized"}, {name: "wholemeal spelt flour", quantity: 180, unit: "grams"}, {name: "coconut oil(or sunflower oil)", quantity: 1.5, unit: "cup"}, {name: "stevia", quantity: 2, unit: "tbsp"}, {name: "vanilla powder", quantity: 0.5, unit: "tsp"}, {name: "cinnamon powder", quantity: 0.25, unit: "tsp"}, {name: "baking powder", quantity: 2.5, unit: "tsp"}, {name: "baking soda", quantity: 0.5, unit: "tsp"}, {name: "salt", quantity: 1, unit: "pinch"}, {name: "chocolate chips(optional)", quantity: null, unit: "-"}, {name: "nuts(optional)", quantity: null, unit: "-"}],
        nutrients: {calcium: 10, proteins: 10, calories: 10, fats: 10, carbs: 10, saturates: 10, sugars: 14, salt: 63, fibre: 52},
        seasons: ['summer', 'spring'],
        labels: ['healthy', "snack"]
    },
    {
        title: "White Bean Soup",
        image: "../images_and_videos/Warm_White_Bean_Soup.jpg",
        desc: "<ol><li>In a large pan, sautè the onions with olive oil until soft - approximately 3-5 mins</li><li>Add the garlic and cook for another 2 mins</li><li>Add the rinsed white beans, rosemary sprig and broth</li><li>Cover, bring to boil and simmer for 30 mins</li><li>Remove rosemary sprig</li><li>Blend the soup until smooth for 30-60 seconds</li><li>Add salt and pepper to taste</li><li>Drizzle with olive oil and serve hot</li></ol>",
        time: 40,
        ingedients: [{name: "white cannellini beans", quantity: 2, unit: "cans"}, {name: "onions", quantity: 2, unit: "-"}, {name: "garlic cloves", quantity: 2, unit: "-"}, {name: "olive oil", quantity: 2, unit: "tbs"}, {name: "fresh rosemary spring", quantity: 1, unit: "-"}, {name: "vegetable broth", quantity: 4, unit: "cups"}, {name: "himalayan salt", quantity: null, unit: "-"}, {name: "fresh ground pepper", quantity: null, unit: "-"}],
        nutrients: {calcium: null, proteins: null, calories: null, fats: null, carbs: null, saturates: null, sugars: null, salt: null, fibre: null},
        seasons: ["autumn"],
        labels: ["healthy"]
    },
    {
        title: "Red Lentil Falafel",
        image: "../images_and_videos/Red_Lentil_Falafel.jpg",
        desc: "<ol><li>Preheat the oven to 200°C (400°F) and line a baking sheet with parchment paper. Place the onion, garlic, and parsley into the bowl of a food processor and blend until finely chopped.</li><li>Add the lentils, oil, flour, spices, and lemon juice, then pulse until combined and you can form loose balls with the mixture.</li><li>Form golf ball sized patties and place them onto the prepared baking sheet. They will spread slightly so leave some space between each. Bake for 18-20 minutes or until golden and serve hot. Leftovers freeze well and can be refrigerated up to three days.</li></ol>",
        time: 90,
        ingedients: [
            {name: "small red onion", quantity: 1, unit: ""},
            {name: "cloves garlic", quantity: 2, unit: ""},
            {name: "parsley", quantity: null, unit: "a handful"},
            {name: "soaked red lentils", quantity: 1, unit: "cup"},
            {name: "olive oil", quantity: 2, unit: "tablespoons"},
            {name: "chickpea flour", quantity: 2, unit: "tablespoons"},
            {name: "sea salt", quantity: 1, unit: "teaspoon"},
            {name: "pepper", quantity: 0.5, unit: "teaspoon"},
            {name: "cumin", quantity: 0.5, unit: "teaspoon"},
            {name: "cayenne pepper to taste", quantity: 0.5, unit: "teaspoon"},
            {name: "juice of a lemon", quantity: 3, unit: "tablespoons"}
        ],
        nutrients: {proteins: "3g", calories: "62kcal", fats: "2g", carbs: "9g", sugars: "1g", fibre: "2g", sodium: "267mg"},
        seasons: ["summer"],
        labels: ["healthy", "snack"]
    },
    {
        title: "Almond Butter Latte",
        image: "../images_and_videos/Spicy_Almond_Butter_Latte.jpg",
        desc: "<ol><li>Add the oat milk, almond butter, dates, cinnamon, cayenne, orange peel, and vanilla to a small or medium saucepan. Bring to a rapid simmer and maintain it for 10 minutes, whisking occasionally.</li><li>Remove the milk from the heat and transfer it to a high-powered blender. Remove the center cap of the blender and cover with a dish towel to allow steam to escape. Blend on high until the mixture is very smooth and creamy, and all of the dates and orange peel are pulverized. Taste and adjust flavors as necessary.</li><li>Divide the hot coffee into two coffee mugs and then pour the almond butter date milk into each mug. Sprinkle with cinnamon and enjoy!</li></ol>",
        time: 20,
        ingredients: [
            {name: "unsweetened oat milk", quantity: 5.5, unit: "cups"},
            {name: "creamy almond butter", quantity: 2, unit: "tablespoons"},
            {name: "soft Medjool dates, pitted and torn in half", quantity: 2, unit: "large"},
            {name: "ground cinnamon", quantity: 0.5, unit: "teaspoon"},
            {name: "cayenne pepper", quantity: null, unit: "a pinch"},
            {name: "large strip of orange peel", quantity: 1, unit: ""},
            {name: "vanilla extract", quantity: 1, unit: "teaspoon"},
            {name: "strongly brewd hot coffe", quantity: 0.25, unit: "- 0.5 cup"}
        ],
        nutrients: {calcium: "324mg", proteins: "7g", calories: "232kcal", fats: "7g", carbs: "32g", saturates: "1g", sugars: "17g", potassium: "377mg", fiber: "5g", iron: "2mg", sodium: "102mg"},
        seasons: ["autumn"],
        labels: ["healthy", "snack"]
    },
    {
        title: "Masala Frittata",
        image: "../images_and_videos/Masala_Frittata.jpg",
        desc: "<ol><li>Heat the oil in a medium non-stick, ovenproof frying pan. Tip in the sliced onions and cook over a medium heat for about 10 mins until soft and golden. Add the Madras paste and fry for 1 min more, then tip in half the tomatoes and half the chilli. Cook until the mixture is thick and the tomatoes have all burst.</li><li>Heat the grill to high. Add half the coriander to the eggs and season, then pour over the spicy onion mixture. Stir gently once or twice, then cook over a low heat for 8-10 mins until almost set. Transfer to the grill for 3-5 mins until set.</li><li>To make the salsa, mix the avocado, remaining chilli and tomatoes, chopped onion, remaining coriander and the lemon juice together, then season and serve with the frittata.</li></ol>",
        time: 35,
        ingredients: [
            {name: "olive oil", quantity: 2, unit: "tablespoons"},
            {name: "onions", quantity: null, unit: "2.5 thinly sliced, 0.5 finely chopped"},
            {name: "Madras curry paste", quantity: 1, unit: "tablespoon"},
            {name: "cherry tomatoes, halved", quantity: 500, unit: "grams"},
            {name: "red chilli, deseeded and chopped", quantity: 1, unit: ""},
            {name: "coriander", quantity: null, unit: "small pack"},
            {name: "large eggs", quantity: 8, unit: ""},
            {name: "avocado, stoned, peeled and cubed", quantity: 1, unit: ""},
            {name: "juice", quantity: 1, unit: "lemon"}
        ],
        nutrients: {proteins: "16g", calories: "347kcal", fats: "25g", carbs: "12g", saturates: "5g", sugars: "9g", salt: "0.5g", fibre: "5g"},
        seasons: ["autumn", "summer"],
        labels: ["healthy", "lunch", "dinner"]
    },
    {
        title: "Tzatziki",
        image: "../images_and_videos/Tzatziki.jpg",
        desc: "<ol><li>Use the wide holes on a box grater to grate the cucumber.</li><li>Add the grated cucumber to a thin dish towel, nut milk bag, or cheesecloth. Squeeze or wrap it tightly, and wring out as much water as you can.</li><li>Add the yogurt to a medium bowl. Add in the grated cucumber, dill, garlic, 2 tsp vinegar or lemon juice, salt, pepper to taste, and 1 tablespoon olive oil. Mix well. Taste for seasonings, adding more salt, vinegar, or olive oil as needed.</li><li>If possible, rest in the fridge for 15 to 30 minutes (or for several hours) to allow the flavors to marry.</li><li>If desired, drizzle with olive oil before serving.</li></ol>",
        time: 15,
        ingredients: [
            {name: "plain-flavored thick and tart vegan yogurt", quantity: 10, unit: "ounces"},
            {name: "English or Persian cucumber, unpeeled", quantity: 8, unit: "ounces"},
            {name: "minced fresh dill", quantity: 3, unit: "tablespoons"},
            {name: "fat garlic cloves, grated or crushed in a press", quantity: 2, unit: ""},
            {name: "red/white whine vinegar", quantity: 2, unit: "teaspoons"},
            {name: "sea salt", quantity: 0.5, unit: "teaspoon"},
            {name: "freshly cracked black pepper", quantity: 0, unit: "-"},
            {name: "extra virgin olive oil", quantity: 1, unit: "- 5.5 tablespoons"}
        ],
        nutrients: {calcium: "53mg", proteins: "1g", calories: "69kcal", fats: "3.2g", carbs: "5g", saturates: "0.3", sugars: "2g", fibre: "0.3g", potassium: "46mg", sodium: "131mg"},
        seasons: ["autumn"],
        labels: ["healthy", "snack"]
    },
    {
        title: "Potato Curry",
        image: "../images_and_videos/Easy_Potatoes_Curry_with_Rice.jpg",
        desc: "<ol><li>Heat the oil in a large pot over medium heat until shimmering. Add the onion and saute for about 3 minutes, until translucent.</li><li>Add the garlic and saute for about 2 minutes, until fragrant.</li><li>Add the curry powder, paprika, cayenne, cumin, allspice, ginger, salt, and pepper. Stir and cook for about 2 minutes until the spices are fragrant.</li><li>Add the potatoes and mix well until well-coated in spices.</li><li>Add the chickpeas and stir to incorporate.</li><li>Add the broth, lemon juice, and tomatoes and stir, then pour in the coconut milk and stir to combine.</li><li>Increase the heat to high and bring the mixture to a simmer. Once bubbling, reduce the heat to medium and cook for 15-20 minutes, until the potatoes are tender and easily pierced with a fork.</li><li>Serve with cooked rice and naan and garnish with fresh cilantro.</li><li>Enjoy!</li>",
        time: 30,
        ingredients: [
            {name: "vegetable oil", quantity: 2, unit: "tablespoons"},
            {name: "yellow diced onion", quantity: 1, unit: "medium"},
            {name: "minced garlic", quantity: 4, unit: "cloves"},
            {name: "curry powder", quantity: 4, unit: "teeaspoons"},
            {name: "paprika", quantity: 1.5, unit: "teaspoons"},
            {name: "cayenne", quantity: 1, unit: "teaspoon"},
            {name: "cumin powder", quantity: 2, unit: "powder"},
            {name: "allspice", quantity: 0.5, unit: "teaspoon"},
            {name: "fresh minced ginger", quantity: 2, unit: "teaspoons"},
            {name: "black pepper", quantity: 0.5, unit: "teaspoon"},
            {name: "peeled and cubed potatoes", quantity: 2, unit: "lb"},
            {name: "drained chickpeas", quantity: 15, unit: "oz"},
            {name: "vegetable broth", quantity: 1, unit: "cup"},
            {name: "lemon juice", quantity: 1, unit: "tablespoon"},
            {name: "diced tomato", quantity: 14, unit: "oz"},
            {name: "coconut milk", quantity: 14, unit: "oz"},
            {name: "rice cooked for serving", quantity: null, unit: ""},
            {name: "naan bread for serving", quantity: null, unit: ""},
            {name: "fresh cilantro, chopped, for garnish", quantity: null, unit: ""},
        ],
        nutrients: {calories: "894kcal", fats: "46g", carbs: "104g", fiber: "17g", sugar: "17g", protein: "18g"},
        seasons: ["summer"],
        labels: ["healthy", "lunch", "dinner"]
    }
    /* {
        title: "Healthy Oatmeal Cookies",
        image: "../images_and_videos/Healthy_Oatmeal_Cookies.jpg",
        desc: "",
        time: 0,
        ingedients: [
            {name: "coconut sugar", quantity: , unit: ""},
            {name: "maple syrup", quantity: , unit: ""},
            {name: "cinnamon", quantity: , unit: ""},
            {name: "flax egg", quantity: , unit: ""},
            {name: "rolled oats", quantity: , unit: ""},
            {name: "nutmeg", quantity: , unit: ""},
            {name: "coconut oil", quantity: , unit: ""},
            {name: "baking soda", quantity: , unit: ""},
            {name: "baking powder", quantity: , unit: ""},
            {name: "salt", quantity: , unit: ""},
            {name: "vanilla", quantity: , unit: ""},
            {name: "oat flour", quantity: , unit: ""}
        ],
        nutrients: {calcium: null, proteins: null, calories: null, fats: null, carbs: null, saturates: null, sugars: null, salt: null, fibre: null},
        seasons: [],
        labels: ["healthy", "snack"]
    }, */
];

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