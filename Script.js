var adults = document.getElementById('adults');

function plusAdults() {
    var current = adults.value;
    current++;
    adults.value = current;
    //   adults.value++; - альтернативный вариант
}

function minusAdults() {
    var current = adults.value;
    if (current > 0) {
        current--
    };
    adults.value = current;
}

function plus() {
    var current = document.getElementById('kids').value;
    current++;
    document.getElementById('kids').value = current;
}

function minus() {
    var current = document.getElementById('kids').value;
    if (current > 0) {
        current--
    } else {
        return
    };

    document.getElementById('kids').value = current;
}

function openModalSearch() {
    document.querySelector('.modal').classList.remove('hidden');
}

var closeSearch = document.querySelector('.modal-close');
var modalSearch = document.querySelector('.modal');
closeSearch.addEventListener('click', function () {
    modalSearch.classList.add('hidden');
})
