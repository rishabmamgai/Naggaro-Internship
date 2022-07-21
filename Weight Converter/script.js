var kgsInput = document.getElementById('kgs');
var gramsInput = document.getElementById('grams');

function calculate() {
    var kgs = kgsInput.value;
    var grams = gramsInput.value;

    if(kgs == 0)
        kgsInput.value = grams / 1000;

    else
        gramsInput.value = kgs * 1000;
}

kgsInput.onkeydown = clearGrams;
gramsInput.onkeydown = clearKgs;

function clearGrams() {
    if(gramsInput.value.length != 0)
        gramsInput.value = null;
}

function clearKgs() {
    if(kgsInput.value.length != 0)
        kgsInput.value = null;
}
