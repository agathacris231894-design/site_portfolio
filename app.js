'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {

    if (document.body.classList.contains('light-theme')) {

        document.body.classList.replace(
            'light-theme',
            'dark-theme'
        );

        this.textContent = 'Rosa';

    } else {

        document.body.classList.replace(
            'dark-theme',
            'light-theme'
        );

        this.textContent = 'Lilás';
    }

});