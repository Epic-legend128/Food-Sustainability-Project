/*
TODO:
Add more info,
Add the recipes,
Figure out away to propose the best recipes according to the users preferences and answers to questions,
*/

String.prototype.replaceAt = function(start, end, str) {
    return this.substring(0, start) + str + this.substring(end);
}

function changeScreen(page) {
    location.href = location.href.replaceAt(location.href.lastIndexOf('/'), location.href.length, "/"+page);
}

function changeBackground() {
    let name = location.href.substring(location.href.lastIndexOf('/')+1);
    let col = colors.hasOwnProperty(name) ? colors[name] : 0;
    if (col.length == 1) {
        console.log("Black");
        $(".everything").css('background-color', col[0]);
        $(".everything").css('background', "none");
    }
    else {
        console.log("Non-black");
        console.log(col);
        $(".everything").css('background-color', "none");
        $(".everything").css('background', "linear-gradient("+col[0]+","+col[1]+")");
    }
}

changeBackground();
