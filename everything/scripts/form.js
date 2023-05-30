$("#pop-up").hide();

$("#calo-calc").on("submit", (e) => {
    e.preventDefault();
    //get input
    let height = $("#height").val()/heightFactor; // convert cm to in
    let weight = $("#weight").val()*weightFactor; // convert kg to lb
    let age = $("#age").val();
    let isMale = parseInt($("#gender-select input[type='radio']:checked").val());
    let isIntense = parseInt($("#exercise-select input[type='radio']:checked").val());
    let exerciseDays = $("#exercise-days").val();

    //calculate calorie intake to maintain weight
    let calories = Math.round(calcCalories(weight, height, age, isMale, exerciseDays, isIntense));

    //calculate calorie intake to lose and gain weight
    let loseTable = "<table><thead><tr><th>Kg to lose per week</th><th>Calorie intake</th></tr></thead><tbody>";
    let gainTable = "<table><thead><tr><th>Kg to gain per week</th><th>Calorie intake</th></tr></thead><tbody>";
    for (let w = 0.25; w<=1; w+=0.25) {
        loseTable += "<tr><td>"+w+"</td><td>"+lose(calories, w)+"</td></tr>";
        gainTable += "<tr><td>"+w+"</td><td>"+gain(calories, w)+"</td></tr>";
    }
    loseTable += "</tbody></table>";
    gainTable += "</tbody></table>";
    
    //output results
    $("#results").html("<h4>Results</h4><h5>The suggested amount of calories to consume daily for you is <strong>"+calories+"</strong></h5><br>"+loseTable+"<br>"+gainTable);
});

$("#weekly-diet").on("submit", (e) => {
    e.preventDefault();
    let lifestyle = $("#lifestyle").val();
    let goal = $("#goal").val();
    //show weekly diet plan, figure out how to map diets and recipes accoirding to the responses of the user
});

//change units of measurement
$("#units").on("change", function() {
    if (this.value == "US") {
        weightFactor = 1;
        heightFactor = 1;
        $("label[for='weight']").text("Weight(lb): ");
        $("label[for='height']").text("Height(in): ");
    }
    else {
        weightFactor = FROMKG;
        heightFactor = FROMCM;
        $("label[for='weight']").text("Weight(kg): ");
        $("label[for='height']").text("Height(cm): ");
    }
});

$("#cal").on("focus", () => {
    $("#pop-up").slideDown();
});

$("#cal").on("blur", () => {
    $("#pop-up").slideUp();
});
