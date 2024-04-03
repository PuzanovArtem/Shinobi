// burger

const burger = document.querySelector('.burger');
const content = document.querySelector('.header__content');
const navLink = document.querySelectorAll('.nav-link');


function openMenu(){
    const activeBurger =  burger.classList.toggle('active');
    const activeContent = content.classList.toggle('active');
    if(activeBurger){
        document.body.style.overflow = 'hidden';
    }if(!activeBurger){
        document.body.style.overflow = 'auto';
    }
}

burger.addEventListener('click', openMenu)

function closeMenu(){
    burger.classList.remove('active');
    content.classList.remove('active');
    document.body.style.overflow = 'scroll';
}

navLink.forEach(n => n.addEventListener('click', closeMenu));

// working

$(function () {
    let workingItems = $(".working__item")
    workingItems.mouseover(function () {
        $(".working__item-text").removeClass("working__item-text-active")
        $(this).find(".working__item-text").addClass("working__item-text-active")
        $(".working__item-number").removeClass("working__item-number-active")
        $(this).find(".working__item-number").addClass("working__item-number-active")
        $(".working__item-box").removeClass("working__item-box-active")
        $(this).find(".working__item-box").addClass("working__item-box-active")
    });
    $(".backtests__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1
    })
});