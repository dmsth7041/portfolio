jQuery($ => {
    $('.arrow').on('click', e => {
     $('.menu-list').toggleClass('menu-back');
     $('.arrow').toggleClass('arrow-back');
    });
   });

   $(function () {
    $('.btn_2').click(function () {
        $('.section4').css('grid-template-columns', 'repeat(2, 1fr)');
        $('.section4').css('gap', '5vw');
        $('.item1, .item2, .item3, .item4, .item5, .item6').css('width', '100%');
        $('.item').css('height', '100%');
        $('.img-min').css('height', '70%');
        
        $('.btn_1').css('opacity', '0.3');
        $('.btn_2').css('opacity', '1');

        $('.section4')
        .animate({
                opacity: "0"
            }, 0,
            function () {
                $(this).delay(100)
                    .animate({
                        opacity: '1'
                    }, 500);
            });
    });
    $('.btn_1').click(function () {
        $('.section4').css('grid-template-columns', 'repeat(3, 1fr)');
        $('.section4').css('gap', '2vw');
        $('.item1, .item2, .item3, .item4, .item5, .item6').css('width', '100%');
        $('.item3, .item4, .item6').css('margin-top', '0');
        $('.item2, .item5').css('margin-top', '3vw');
        $('.img-min').css('height', '25vw');

        $('.btn_1').css('opacity', '1');
        $('.btn_2').css('opacity', '0.3');

        $('.section4')
        .animate({
                opacity: "0"
            }, 0,
            function () {
                $(this).delay(100)
                    .animate({
                        opacity: '1'
                    }, 500);
            });
    });
});

