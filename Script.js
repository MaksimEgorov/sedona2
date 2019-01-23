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
    };

    document.getElementById('kids').value = current;
}

//opening modal window on button "search" click
function openModalSearch() {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.modal-overlay').classList.remove('hidden');
}

//closing modal window on cross click
var closeSearch = document.querySelector('.modal-close');
var modalSearch = document.querySelector('.modal');
closeSearch.addEventListener('click', function () {
    modalSearch.classList.add('hidden');
    document.querySelector('.modal-overlay').classList.add('hidden');
})

//closing modal on click on overlay
function modalCloser() {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.modal-overlay').classList.add('hidden');
}
