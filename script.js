function compute() {
    let computation = document.getElementById("computation");
    var numberinput1 = Number(document.getElementById("numberinput1").value);
    var numberinput2 = Number(document.getElementById("numberinput2").value);
    var operations = (document.getElementById("operations").value);

    switch(operations){
        case 'add':
            computation.innerHTML = numberinput1 + numberinput2;
            break
        case 'subtract':
            computation.innerHTML = numberinput1 - numberinput2;
            break
        case 'multiply':
            computation.innerHTML = numberinput1 * numberinput2;
            break
        case 'divide':
            computation.innerHTML = numberinput1 / numberinput2;
            break
    }
}