


var inn = document.querySelector('.in');
var button = document.querySelector('.button');


function rand() {
    return Math.floor(Math.random() * 49);
}


function say() {
    var tab = [];
    for (var i = 0; i < 6; i++) {
        var random = rand();

        if(tab.indexOf(random)!==-1)
        {
            random = rand();
        }
        tab.push(random)
    }
    inn.value =tab.join('   ,   ');
}


button.onclick = say;