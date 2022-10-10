///
function getConteiiner(prodect, condition, price) {
    const inputText = document.getElementById(prodect + '-input');
    let inputTextValue = inputText.value;
    if (condition == true) {
        inputTextValue = parseInt(inputTextValue) + 1;
    }
    else if (inputText.value > 0) {
        inputTextValue = parseInt(inputTextValue) - 1;
    }
    inputText.value = inputTextValue
    const phoneTotal = document.getElementById(prodect + '-total');
    const newAmount = inputTextValue * price;
    phoneTotal.innerText = newAmount;
    getcal()
}
function getinput(prodect) {
    const inputText = document.getElementById(prodect + '-input');
    let inputTextValue = inputText.value;
    let num = parseInt(inputTextValue);
    return num;
}

function getcal() {
    const phone = getinput('phone') * 100;
    const cas = getinput('case') * 50;
    const subtotal = phone + cas;
    const text = subtotal / 10;
    const total = subtotal + text;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tex').innerText = text;
    document.getElementById('total').innerText = total;

}

//get phone plus btn and minus btn
document.getElementById('phone-plus').addEventListener('click', function () {
    getConteiiner('phone', true, 100);

});
document.getElementById('phone-minus').addEventListener('click', function () {
    getConteiiner('phone', false, 100);
});

//get case plus btn and minus btn
document.getElementById('case-plus').addEventListener('click', function () {
    getConteiiner('case', true, 50);
});

document.getElementById('case-minus').addEventListener('click', function () {
    getConteiiner('case', false, 50);
});
