$(function () {
    $('.popup button').on('click', function () {
        console.log($(this).parent())
        $(this).parent().parent().hide()
    })
})