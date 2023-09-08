$('.nordeste').Click(function () {
    $('.menuLateral ul .itensNordeste').toggleClass('mostra');
});

$('.sudeste').Click(function () {
    $('.menuLateral ul .itensSudeste').toggleClass('mostra');
});

$('btnAbre').Click(function () {
    $('.menuLateral').toggleClass('mostra');
});

$('btnFecha').Click(function () {
    $('.menuLateral').toggleClass('mostra');
});

$('.nordeste').mouseover(function () {
    $('.menuLateral ul .seta1').toggleClass('gira');
});

$('.nordeste').mouseout(function () {
    $('.menuLateral ul .seta1').toggleClass('gira');
});

$('.sudeste').mouseover(function () {
    $('.menuLateral ul .seta1').toggleClass('gira');
});

$('.sudeste').mouseout(function () {
    $('.menuLateral ul .seta1').toggleClass('gira');
});

const $menuLateral = $('.menuLateral');
$(document).mouseup(e => {
    if (!$menuLateral.is(e.target)
        && $menuLateral.has(e.target).length === 0) 
    {
        $menuLateral.removeClass('mostra');
    }
});

