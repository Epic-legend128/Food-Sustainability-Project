/*
Calculate calories to maintain weight:

For weight and height conversion happens before you pass in the values
w = weight in pounds, from kg multiply by 2.205(global constanst FROMKG)
h = height in inches, from cm divide by 2.54(global constant FROMCM)
a = age in years
isMale = bool, true if you are male, false otherwise
exerciseDays = amount of days you exercise per week
isExerciseIntense = bool, true if the exercise you do each time is intense, false otherwise
*/

function calcCalories(w, h, a, isMale, exerciseDays, isExerciseIntense) {
    let add = ((isExerciseIntense)?446:227)*exerciseDays/7;
    let eq1, eq2;
    if (isMale) {
        eq1 = 10*w + 6.25*h - 5*a + 5;
        //eq2 = 66 + 6.23*w + 12.7*h - 6.8*a;
    }
    else {
        eq1 = 10*w + 6.25*h - 5*a - 161;
        //eq2 = 655 + 4.35*w + 4.7*h - 4.7*a;
    }
    return eq1*1.35+add;//(eq1+eq2)/2*1.35+add;
}

/*
Calculations
Better to use both formulas and then calculate the average but if needed these are the averages of the formulas:

 Joint equation for males:
(10w+6.25h-5a+5+66+6.23w+12.7h-6.8a)/2
= (16.23w+18.95h-11.8a+71)/2
= 8.115w+9.475-5.9a+35.5

Joint equation for females:
(10w+6.25h-5a-161+655+4.35w+4.7h-4.7a)/2
= (14.35w+10.95h-9.7a+494)/2
= 7.175w+5.475h-4.85a+247
*/

//calculate calories for losing that amount of kg per week
const lose = (cal, w) => cal - (w*l);

//calculate calories for gaining that amount of kg per week
const gain = (cal, w) => cal + (w*l);


const sinSqr = x => Math.sin(x) * Math.sin(x);

const toRad = deg => Math.PI/180 * deg;

class Point {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }

    //compute the distance between 2 points on the globe given their coordinates(result is in km)
    distance(p) {
        let longDiff = this.long - p.long;
        let latDiff = this.lat - p.lat;
        let a = sinSqr(toRad(latDiff/2)) + Math.cos(toRad(this.lat)) * Math.cos(toRad(p.lat)) * sinSqr(toRad(longDiff/2));
        let c = 2 * Math.atan2(toRad(Math.sqrt(a)), toRad(Math.sqrt(1-a)));
        let dist = c * RADIUS;
        
        return dist;
    }
}
