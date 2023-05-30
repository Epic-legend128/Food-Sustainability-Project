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
    console.log(col);
    if (col.length == 1) {
        $(".everything").css('background-color', col[0]);
        $(".everything").css('background', "none");
    }
    else {
        $(".everything").css('background-color', "none");
        $(".everything").css('background', "linear-gradient("+col[0]+","+col[1]+")");
    }
}

changeBackground();

/* function addNavigation() {
    let add;
    if (!isLoggedIn())
        add = '<button class="btn btn-dark" onClick="changeScreen(\'login\')">Login</button>';
    else
        add = '<button class="btn btn-dark" onClick="changeScreen(\'logout\')">Logout</button>';
    console.log(add);
    $('<nav id="navigation"><div id="nav-btns"><button class="btn btn-dark" onClick="changeScreen(\'index\')">Home</button><button class="btn btn-dark" onClick="changeScreen(\'form\')">Form</button><button class="btn btn-dark" onClick="changeScreen(\'info\')">About</button><button class="btn btn-dark" onClick="changeScreen(\'browse\')">Browse</button></div>'+add+'</nav>').appendTo(".everything");
}
 */