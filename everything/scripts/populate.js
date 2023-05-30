function isSeasonal(seasons) {
    let d = new Date();
    let m = d.getMonth();
    return ((m >= 11 || m<=2 && seasons.includes("winter")) || (m >= 3 && m<=5 && seasons.includes("spring")) || (m >= 6 && m<=8 && seasons.includes("summer")) || (m >= 9 && m<=10 && seasons.includes("autumn")));
}

//returns a list of recipe names
function filterRecipes() {
    let recipeNames = [];
    let wantsHealthy = $("#healthy").is(":checked");
    let wantsQuick = $("#quick").is(":checked");
    let wantsSeasonal = $("#seasonal").is(":checked");
    let search = $("#searchbar").val();
    recipes.forEach(x => {
        if (((x.labels.includes('healthy') && wantsHealthy) || !wantsHealthy) && ((x.time < 20 && wantsQuick) || !wantsQuick) && ((isSeasonal(x.seasons) && wantsSeasonal) || !wantsSeasonal) && (search.toLowerCase().includes(x.title.toLowerCase()) || search.toLowerCase().includes(x.desc.toLowerCase()) || x.desc.toLowerCase().includes(search.toLowerCase()) || x.title.toLowerCase().includes(search.toLowerCase()))) {
            recipeNames.push(x);
        }
    });
    return recipeNames;
}

//adds the recipes to the website for the user to see, parameter is a list of all of hte recipes that we should add
function populateBrowseSection(recipes) {
    $('#all-recipes').html('');
    recipes.forEach(x => {
        $('<div class="recipe-preview" onclick="clicked(\''+x.title+'\');"><h6>'+x.title+'</h6><figure><img src="'+x.image+'"><figcaption>'+x.time+' min'+'</figcaption></div>').appendTo('#all-recipes');
    });
}

function clicked(recipe) {
    changeScreen("browsing/"+recipe);
}

function checkParams() {
    let url = new URL(location.href);
    if (!url.searchParams.has('recipe'))
        populateBrowseSection(recipes);
    else {
        
    }
}

checkParams();