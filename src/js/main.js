/* Создаем переменную с дом элементом, 
можно обратится к тегам, классам, идентификаторам */
var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');


/* Добавляем отслеживатель событий на кнопку button, 
отловили событие клика на кнопку и повешали модальное окно*/
button.addEventListener('click', function() {
    modal.classList.add('modal_active');
    setTimeout(() => {
        modal.classList.remove('modal_active')
    }, 5000);
});

/* Теперь необходимо снова отловить клик на 
крестик и повешать на него закрытие модального окна */

close.addEventListener('click', function(){
    modal.classList.remove('modal_active');

});



