(function() {
    const $divMenuMob = document.querySelector('.menu-mobile_container');
    const $btn = document.querySelector('.btn-menu-mob');
    const $closeBtn = document.querySelector('.menu-mobile_wrapper-close');

    $btn.addEventListener('click', function() {
        $divMenuMob.style.display = 'block';
    })

    $closeBtn.addEventListener('click', function() {
        $divMenuMob.style.display = 'none'; 
    })
})();