 function plusAdults() {
     var current = document.getElementById('adults').value;
     current++;
     document.getElementById('adults').value = current;
 }

 function minusAdults() {
     var current = document.getElementById('adults').value;
     if (current > 0) {
         current--
     } else {
         return
     };

     document.getElementById('adults').value = current;
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
     var openSearch = document.querySelector('.intrested__order--src_btn');
     var modalSearch = document.querySelector('.modal');

     openSearch.addEventListener('click', function () {
         modalSearch.classList.remove('hidden');
     })
 }

 function closeModalSearch() {
     var closeSearch = document.querySelector('.modal-close');
     var modalSearch = document.querySelector('.modal');

     closeSearch.addEventListener('click', function () {
         modalSearch.classList.add('hidden');
     })
 }
