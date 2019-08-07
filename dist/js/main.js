(function ($) {

    $.fn.navigation = function (options) {

        var settings = $.extend({
            autoSubmenuIndicator: false,
            breakpoint: 991,
        }, options);

        var selectorNomalMenu = this.children('.navigation-body').children('.navigation-menu').children('.navigation-item').has('.navigation-dropdown')
        var selectorNomalDropMenu = selectorNomalMenu.children('.navigation-dropdown').find('.navigation-dropdown-item').has('.navigation-dropdown')

        var selectorNomalMenu = this.children('.navigation-body').children('.navigation-menu').children('.navigation-item').has('.navigation-dropdown')

        selectorNomalMenu.addClass("has-submenu");

        selectorNomalDropMenu.addClass("has-submenu")


        selectorNomalMenu
            .on('mouseenter', function (e) {
                $(this).addClass('is-active')
                $(this).children('.navigation-dropdown').addClass('is-visible')


                selectorNomalDropMenu.on('mouseenter', function (e) {
                    $(this).addClass('is-active')

                    $(this).children('.navigation-dropdown').addClass('is-visible')

                })


            })
            .on('mouseleave', function (e) {
                $(this).removeClass('is-active')
                $(this).children('.navigation-dropdown').removeClass('is-visible')

                selectorNomalDropMenu.on('mouseleave', function (ex) {




                    $(this).removeClass('is-active')
                    $(this).children('.navigation-dropdown').removeClass('is-visible')

                })
            })
            .on('click', function (e) {
                $(this).toggleClass('is-active')
                $(this).children('.navigation-dropdown').toggleClass('is-visible')




                selectorNomalDropMenu
                .on('click', function (ex) {
                    $(this).toggleClass('is-active')
                    $(this).children('.navigation-dropdown').toggleClass('is-visible')

                    ex.stopPropagation() //impotant to work

                })

            })







        //========


        var selectorMegaMenu = this.children('.navigation-body').children('.navigation-menu').children('.navigation-item').has('.navigation-megamenu')

        selectorMegaMenu.addClass("has-submenu")

        selectorMegaMenu
            .on('mouseenter', function (e) {
                $(this).addClass('is-active')
                $(this).children('.navigation-megamenu').addClass('is-visible').css('right', '0px')


                $(this).find('.navigation-tabs .navigation-tabs-nav .navigation-tabs-nav-item').on('click', (function (e) {

                    e.stopPropagation() // Work on Megamenu Tabs


                    var indexel = ($(this).index() + 2)






                    $('.navigation-tabs-nav').children('.navigation-tabs-nav-item').each((index, element) => {
                        $(element).removeClass("is-active");


                        $('.navigation-tabs').find('.navigation-tabs-pane').removeClass('is-active')

                    })


                    $(this).addClass('is-active')

                    $('.navigation-tabs').children('.navigation-tabs-pane:nth-child(' + indexel + ')').addClass('is-active')



                    //

                }))


            })
            .on('mouseleave', function (e) {
                $(this).removeClass('is-active')
                $(this).children('.navigation-megamenu').removeClass('is-visible').css('right', '0px')

            })
            .on('click', function (e) {
                $(this).toggleClass('is-active')
                $(this).children('.navigation-megamenu').toggleClass('is-visible').css('right', '0px')

            })

        // make Risponsive


        $(window).resize(function () {
            ResponsiveNav($(window).width())
        });

        ResponsiveNav($(window).width())

        function ResponsiveNav(width) {
            if (width < settings.breakpoint) {
                $('.navigation-button-toggler').click(function (e) {
                    e.preventDefault();
                    $('.navigation-body').toggleClass('is-visible')
                    $('#navigation .overlay-panel').addClass('is-visible').fadeIn('fast')
                });
                $('.navigation-body-close-button').click(function (e) {
                    e.stopPropagation()
                    e.preventDefault();
                    $('.navigation-body').removeClass('is-visible')
                    $('#navigation .overlay-panel').fadeOut('fast', e => {
                        $(this).removeClass('is-visible')
                    })

                });

                $('.overlay-panel').click(function (e) {
                    e.stopPropagation()
                    e.preventDefault();
                    $('.navigation-body').removeClass('is-visible')
                    $('#navigation .overlay-panel').fadeOut('fast', e => {
                        $(this).removeClass('is-visible')
                    })
                })


                $('.has-submenu').has('ul li,div.navigation-megamenu').children('.navigation-link ,.navigation-dropdown-link').click(function (e) {  
                    e.preventDefault()
                    console.log(e);
                    
                })
                

            }
        }

        







        return this

    };

}(jQuery));