$(function () {
    $('.popup button').on('click', function () {
        console.log($(this).parent())
        $(this).parent().parent().hide()
    })

    $('.icon_box').slick({
        dots: true,
        arrows: false,
        slidesToShow: 8,
        slidesToScroll: 8,
    })

    $('.main_slide .arrows .prev').on('click', function () {
        $('.icon_box').slick('slickPrev')
    })

    $('.main_slide .arrows .next').on('click', function () {
        $('.icon_box').slick('slickNext')
    })

    $('.event_slide').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
    })
    $('.eventBanner .arrows .prev').on('click', function () {
        $('.event_slide').slick('slickPrev')
    })

    $('.eventBanner .arrows .next').on('click', function () {
        $('.event_slide').slick('slickNext')
    })



})