$(function () {
    $(window).scroll(function (e) { 
        e.preventDefault(); 
    
        var vtw = window.pageYOffset;
        var vt2 = $('.khoi2').offset().top;
        var vt3 = $('.khoi3').offset().top;
        var vt4 = $('.khoi4').offset().top;
        var vt5 = $('.khoi5').offset().top;

        if (vtw >= vt5) {
            $('.item').removeClass('active');
            $('.item5').addClass('active');
            
        } else if (vtw >= vt4) {
            $('.item').removeClass('active');
            $('.item4').addClass('active');
       
        } else if (vtw >= vt3) {
            $('.item').removeClass('active');
            $('.item3').addClass('active');

        } else if (vtw >= vt2) {
            $('.item').removeClass('active');
            $('.item2').addClass('active');
       
        } else {
            $('.item').removeClass('active');
            $('.item1').addClass('active');
        }

    });

    $('.logo1').click(function (e) { 
        e.preventDefault();
        $('.item').removeClass('active');
        $('html').animate({
            scrollTop: $('.khoi1').offset().top},600);
    });
    $('.item1').click(function (e) { 
        e.preventDefault();
        $('.item').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi1').offset().top},600);
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $('.item').removeClass('active'); 
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi2').offset().top},600);
    });
    $('.item3').click(function (e) { 
        e.preventDefault(); 
        $('.item').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi3').offset().top},600);
    });
    $('.item4').click(function (e) { 
        e.preventDefault(); 
        $('.item').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi4').offset().top},600);
    });
    $('.item5').click(function (e) { 
        e.preventDefault(); 
        $('.item').removeClass('active');
        $(this).addClass('active');
        $('html').animate({
            scrollTop: $('.khoi5').offset().top},600);
    });

    

});