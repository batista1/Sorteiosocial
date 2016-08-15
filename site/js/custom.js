'use strict';

/**
 *  Variables & Functions
 * -------------------------------------------------------------------
 */

var jed_variable = {
	'jed_1':{
	    'contact': {
	        'address': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	        'marker': '/url image'
	    },
	    'validate': {
            'form': {
                'SUBMIT': 'Submit',
                'SENDING': 'Sending...'
            },
            'name': {
                'REQUIRED': 'Please enter your name',
                'MINLENGTH': 'At least {0} characters required'
            },
            'email': {
                'REQUIRED': 'Please enter your email',
                'EMAIL': 'Please enter a valid email'
            },
            'url': {
                'REQUIRED': 'Please enter your url',
                'URL': 'Please enter a valid url'
            },
            'message': {
                'REQUIRED': 'Please enter a message',
                'MINLENGTH': 'At least {0} characters required'
            }
        },
        'tweets': {
            'failed': 'Sorry, twitter is currently unavailable for this user.',
            'loading': 'Loading tweets...'
        }
	}
};



/**
 * Code
 * -------------------------------------------------------------------
 */


jQuery(document).ready(function() {


/*_____________ 1. Header _____________*/

    /*--- main-menu ---*/

    var mmenu_ul   = jQuery('.main-nav').find('.main-menu'),
        mmenu_li   = mmenu_ul.find('> li'),
        sfmmenu_ul = jQuery('.main-nav').find('.sf-menu');


    if(sfmmenu_ul.length){
        sfmmenu_ul.superfish({
            speed: 'fast',
            delay: '300'
        });
    }

    /*--- search-box ---*/

    var dropdown_1 = jQuery('.kopa-dropdown');
    if(dropdown_1.length) {
        jQuery(dropdown_1).each(function() {
            var dropdown_btn_1 = jQuery(this).find('.kopa-dropdown-btn'),
                dropdown_content_1 = jQuery(this).find('.kopa-dropdown-content');
            dropdown_btn_1.on('click', function(){
                dropdown_content_1.toggleClass('active');
            });
            jQuery("html").mouseup(function (e){
                if (!dropdown_1.is(e.target) && dropdown_1.has(e.target).length === 0){
                    dropdown_content_1.removeClass('active');
                }
            });
        });
    }

    var search_box_1 = jQuery('.kopa-search-box-1');
    if(search_box_1.length) {
        var search_btn_1 = jQuery(this).find('.kopa-dropdown-btn');
        search_btn_1.on('click', function(){
            jQuery(this).closest(search_box_1).find('.search-text').focus();
        });
    }
    
    /*--- cart ---*/

    var rm_item_1 = jQuery('.rm-item');
    if(rm_item_1.length) {
        jQuery(rm_item_1).each(function() {
            var rm_btn_1 = jQuery(this).find('.rm-btn');
            rm_btn_1.on('click', function(){
                jQuery(this).closest(rm_item_1).remove();
            });
        });
    }


 
/*_____________ Slide Area _____________*/  

    //scroll-bar
    var h_window   = jQuery(window).height(),
        area_23    = jQuery('.kopa-area-23'),
        hb_menu    = jQuery('.hamburger-menu'),
        hb_area    = jQuery('.slide-area'),
        hb_overlay = jQuery('.body-overlay'),
        hb_main_ct = jQuery('.main-container'),
        hb_close   = hb_area.find('.close-btn');

    if(hb_area.length) {
        hb_area.find('.slide-container').height(h_window).mCustomScrollbar();
    }
    if(area_23.length) {
        area_23.css('min-height',h_window);
    }

    if(hb_menu.length) {
        hb_menu.on('click',function(event) {
            event.preventDefault();
            hb_area.toggleClass('active');
            hb_overlay.toggleClass('active');
            hb_main_ct.toggleClass('scale-down');
        });
    }
    hb_close.on('click',function(event) {
        event.preventDefault();
        hb_area.removeClass('active');
        hb_overlay.removeClass('active');
        hb_main_ct.removeClass('scale-down');
    });
    hb_overlay.on('click',function(event) {
        hb_close.click();
        return false;
    });

 
/*_____________ Slide Menu _____________*/   
    
    var s_menu = jQuery('.slide-menu');
    if(s_menu.length) {
        s_menu.navgoco({
            accordion: true
        });
        jQuery('.caret').removeClass('caret');
    }

 
/*_____________ Custom Menu _____________*/   


    var ct_menu_1 = jQuery('.ct-menu-1');   
    if(ct_menu_1.length) {
        ct_menu_1.children('li').has('ul').addClass('wu');
        ct_menu_1.navgoco({
            accordion: true
        });
        jQuery('.caret').removeClass('caret');
    }

 
/*_____________ Product Categories Menu _____________*/   


    var wg_product_cat = jQuery('.widget_product_categories');
    if(wg_product_cat.length) {
        jQuery(this).find('.product-categories').navgoco({
            accordion: true
        });
        jQuery('.caret').removeClass('caret');
    }

/*_____________ Mobile Menu _____________*/   


    var mb_menu = jQuery('.mobile-menu');
    if(mb_menu.length) {
        mb_menu.navgoco({
            accordion: true
        });
        jQuery('.caret').removeClass('caret');
    }

    
/*_____________ Grid Item _____________*/

    var filter_1 = jQuery('.reading-module-filter-1');

    if (jQuery(filter_1).length) {

        jQuery(filter_1).each(function(){

            var container_1 = jQuery(this).find('.masonry-container'),
                m_filters_1 = jQuery(this).find('.masonry-filter').children('a');
            var masonryOptions = {
                columnWidth: 1,
                itemSelector : '.ms-item-01.show'
            };
            container_1.imagesLoaded(function(){

                var m_grid = container_1.masonry( masonryOptions);

                m_filters_1.on('click',function(event){
                    event.preventDefault();
                    m_filters_1.removeClass('active');
                    jQuery(this).addClass('active');
                    var m_filter_val = jQuery(this).data('val');

                    container_1.find('.ms-item-01').each(function(){
                        var m_item_val = jQuery(this).data('val').toString().split(',');                
                        var a = m_item_val.indexOf(m_filter_val.toString()) > -1;

                        if (m_filter_val == "*") {
                            jQuery(this).removeClass('hide');
                            jQuery(this).addClass('show');
                        } else {
                            if ( a == true) {
                                jQuery(this).removeClass('hide');
                                jQuery(this).addClass('show');  
                            } else {
                                jQuery(this).removeClass('show');
                                jQuery(this).addClass('hide');
                            }
                        }                               
                    });
                    container_1.masonry('layout');

                });

            });

        });
    }

/*_____________ mCustomScrollbar _____________*/

    
    var mb_scroll = jQuery(".reading-module-scroll");
    if(mb_scroll.length){

        mb_scroll.each(function(){
            mb_scroll.find('.widget-content').mCustomScrollbar({
                axis:"x",
                mouseWheel:{ enable: false },
                advanced:{
                    autoExpandHorizontalScroll:true
                }
            });
        })
    }

/*_____________ Owl Carousel _____________*/


  

    var owl_2 = jQuery('.owl-carousel-2');
    if(owl_2.length){
        owl_2.owlCarousel({
            items: 5,
            itemsDesktop: [1160,5],
            itemsTablet: [799,5],
            itemsTabletSmall: [639,3],
            itemsMobile: [479,3],
            slideSpeed: 1000,
            autoPlay: true,
            navigation: false,
            pagination: true,
            navigationText: false
        });
    }

    var owl_3 = jQuery('.owl-carousel-3');
    if(owl_3.length){
        owl_3.each(function(){
            owl_3.owlCarousel({
                items: 3,
                itemsDesktop: [1160,3],
                itemsTablet: [799,3],
                itemsTabletSmall: [639,1],
                slideSpeed: 1000,
                autoPlay: false,
                navigation: true,
                pagination: false,
                navigationText: false
            });
        });
    }

    var owl_4 = jQuery('.owl-carousel-4');
    if(owl_4.length){
        owl_4.owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            autoPlay: true,
            navigation: true,
            pagination: false,
            navigationText: false
        });
    }

    var owl_5 = jQuery('.owl-carousel-5');
    if(owl_5.length){
        owl_5.owlCarousel({
            items: 2,
            itemsDesktop: [1160,2],
            slideSpeed: 1000,
            navigation: false,
            pagination: true,
            navigationText: false
        });
    }

    var owl_6 = jQuery('.owl-carousel-6');
    if(owl_6.length){
        owl_6.owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            autoPlay: true,
            navigation: true,
            pagination: false,
            navigationText: false
        });
    }

/*_____________ Slider Pro _____________*/

    var pslider_1 = jQuery('.reading-module-slider-1');
    var ps_1 = jQuery('.slider-pro-1');
    if (pslider_1.length) {
        ps_1.sliderPro({
            width: 1170,
            height: 500,
            arrows: true,
            buttons: false,
            waitForLayers: false,
            autoplay: true,
            fadeOutPreviousSlide: true,
            autoScaleLayers: true,
            slideDistance: 0,
            autoplayDelay: 3000,
            init: function(){
               jQuery(".reading-module-slider-1 .loading").hide();    
               jQuery(".reading-module-slider-1 .slider-pro").show();   
            }
        });
    };


/*_____________ Scroll top Top _____________*/   


    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.scroll-up').fadeIn();
        } else {
            jQuery('.scroll-up').fadeOut();
        }
    }); 
    jQuery('.scroll-up').on('click',function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


/*_____________ Accordion _____________*/


    var i1 = 0,
        accordion_1 = jQuery('.kopa-accordion');


    if(accordion_1.length){    
        accordion_1.each(function() {
            var ct_acc_1 = jQuery(this).find('.panel-group');
            ct_acc_1.each(function() {
                var item_index_1 = 'accordion' + i1,
                    item_index_11 = '#' + item_index_1;

                jQuery(this).attr('id',item_index_1);
                jQuery(this).find('.panel-default').each(function() {
                    jQuery(this).find('.panel-title').children('a').attr('data-parent', item_index_11);
                    jQuery(this).find('.panel-title').children('a').attr('href', item_index_11 + + jQuery(this).index());
                    jQuery(this).find('.panel-collapse').attr('id', item_index_11 + + jQuery(this).index());
                });
            });
            ++i1;

            var panel_titles = accordion_1.find('.panel-title a');
            panel_titles.addClass("collapsed");
            jQuery('.panel-heading.active').find(panel_titles).removeClass("collapsed");

            panel_titles.on('click',function(){

                jQuery(this).closest('.kopa-accordion').find('.panel-heading').removeClass('active');
                jQuery(this).closest('.kopa-accordion').find('.collapse').collapse('hide');
                jQuery(this).closest('.panel-heading').next().collapse('toggle');

                var pn_heading = jQuery(this).parents('.panel-heading');
                if (!pn_heading.hasClass('active')) {
                    pn_heading.addClass('active');
                } else {
                    pn_heading.removeClass('active');
                }
            });

        }); 
    }




/*_____________ google maps _____________*/

    if (jQuery('.kopa-map').length > 0) {

        var id_map = jQuery('.kopa-map').attr('id');
        var lat = parseFloat(jQuery('.kopa-map').attr('data-latitude'));
        var lng = parseFloat(jQuery('.kopa-map').attr('data-longitude'));
        var place = jQuery('.kopa-map').attr('data-place');
        var iconBase = 'images/p20/1.png';

        var map = new GMaps({
            el: '#'+id_map,
            lat: lat,
            lng: lng,
            zoom: 12,
            zoomControl : true,
            zoomControlOpt: {
              style : 'SMALL',
              position: 'TOP_RIGHT'
            },
            panControl : false,
            streetViewControl : false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#e9e4e1"},{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"color":"#797979"}]},{"featureType":"landscape","elementType":"labels.text.stroke","stylers":[{"color":"#e9e4e1"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#d8cdcd"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#f6f5f1"},{"visibility":"on"}]}]
        });
        map.addMarker({
            lat: lat,
            lng: lng,
            title: place,
            icon: iconBase 
        });

    }


/*_____________ validate form _____________*/
    
    var ct_form_1 = jQuery('.ct-form-1');
    if(ct_form_1.length) {
        jQuery(ct_form_1).each(function(){
            jQuery(ct_form_1).validate({
                // Add requirements to each of the fields
                rules: {
                    name: {
                        required: true,
                        minlength: 10
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 15
                    }
                },
                // Specify what error messages to display
                // when the user does something horrid
                messages: {
                    name: {
                        required: "Please enter your name.",
                        minlength: jQuery.format("Seu nome com mais de {0} letras.")
                    },
                    email: {
                        required: "Informe um email válido.",
                        email: "Informe um email válido."
                    },
                    message: {
                        required: "Escreva sua mensagem.",
                        minlength: jQuery.format("Mensagem muito curta.")
                    }
                },
                // Use Ajax to send everything to processForm.php
                submitHandler: function(form) {
                    jQuery(".ct-submit-1").attr("value", "Enviando...");
                    jQuery(form).ajaxSubmit({
                        success: function(responseText, statusText, xhr, jQueryform) {
                            jQuery("#response-1").html(responseText).hide().slideDown("fast");
                            jQuery(".ct-submit-1").attr("value", "Submit");
                        }
                    });
                    return false;
                }
            });
        });
    }

    /*--- ct-form-2 ---*/

    var ct_form_2 = jQuery('.ct-form-2');
    if(ct_form_2.length) {
        jQuery(ct_form_2).validate({
            // Add requirements to each of the fields
            rules: {
                name: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 15
                }
            },
            // Specify what error messages to display
            // when the user does something horrid
            messages: {
                name: {
                    required: "Please enter your name.",
                    minlength: jQuery.format("Min {0} characters.")
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email."
                },
                message: {
                    required: "Please enter a message.",
                    minlength: jQuery.format("Min {0} characters.")
                }
            },
            // Use Ajax to send everything to processForm.php
            submitHandler: function(form) {
                jQuery(".ct-submit-2").attr("value", "Sending...");
                jQuery(form).ajaxSubmit({
                    success: function(responseText, statusText, xhr, jQueryform) {
                        jQuery("#response-2").html(responseText).hide().slideDown("fast");
                        jQuery(".ct-submit-2").attr("value", "Submit");
                    }
                });
                return false;
            }
        });
    }


/*_____________ FAQs list _____________*/

    
    
    function order_list_1(){
        var order_li = jQuery('.faq-list').find('li');
        order_li.each(function() {
            var item_index_2 = jQuery(this).index() + 1 + ".";
            jQuery(this).find('.order-num').html(item_index_2);
        });
    }

    order_list_1();
    


/*_____________ Loadmore _____________*/


    var link_to_github_1 = "https://gist.githubusercontent.com/Stormie/a1021e4a6fe808372f0abf653a9cb62b/raw/9b236a5ef05dfa5a00222cec3dd03204406e56d6/gistfile1.txt";
    jQuery('#lm-btn-1').on('click',function(){
        var button_1 = jQuery(this);
        jQuery.ajax({
            url:link_to_github_1,
            beforeSend: function( xhr ) {
            },
        })
        .done(function(data) {

            jQuery(data).imagesLoaded(function() {

                var pos_ins_data_1 =  button_1.parent().prev();
                var items = jQuery(data).find('> li');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        pos_ins_data_1.append(jQuery(this));
                    });
                }
                order_list_1();

            });
        });
    });

    var link_to_github_2 = "https://gist.githubusercontent.com/Stormie/f764941ea5eb734636b71abc8af0a219/raw/7c8015285039da112e2dd0094e21767a9881160c/reading-2";
    jQuery('#lm-btn-2').on('click',function(){
        var button_2 = jQuery(this);
        jQuery.ajax({
            url:link_to_github_2,
            beforeSend: function( xhr ) {
            },
        })
        .done(function(data) {

            jQuery(data).imagesLoaded(function() {

                var pos_ins_data_2 =  button_2.parent().prev();
                var items = jQuery(data).find('> li');
                if(items.length){
                    jQuery.each(items, function(items, index){
                        pos_ins_data_2.append(jQuery(this));
                    });
                }

            });
        });
    });


/*_____________ UI Slider _____________*/   


    var md_woo_pf = jQuery('.widget_price_filter');
    if(md_woo_pf.length){

        var uislider_1 = md_woo_pf.find('.slider-range-1'),
            uimin_1    = md_woo_pf.find('.from'),
            uimax_1    = md_woo_pf.find('.to');

        uislider_1.slider({
            range: true,
            min: 0,
            max: 9000,
            values: [ 500, 9000 ],
            slide: function( event, ui ) {
                uimin_1.text("$" + ui.values[ 0 ]);
                uimax_1.text("$" + ui.values[ 1 ]);
            }
        });

        uimin_1.text( "$" + uislider_1.slider( "values", 0 ));
        uimax_1.text( "$" + uislider_1.slider( "values", 1 ));
    }



/*_____________ Product filter _____________*/

    var i2 = 0;
    if(jQuery('.ct-ul-1').length){    
        jQuery('.ct-ul-1').each(function() {
            var ct_li_1 = jQuery(this).find('li');
            ct_li_1.each(function() {
                var item_index_3 = 'cb' + i2 + jQuery(this).index();
                jQuery(this).find('input').attr("id",item_index_3);
                jQuery(this).find('label').attr("for",item_index_3);
            });
            ++i2;
        }); 
    }
    
    if(jQuery('.reading-module-product-filter-1').length) {
        jQuery('.reading-module-product-filter-1').each(function() {
            jQuery(this).find('.widget-content').mCustomScrollbar();
        });
    }

/*_____________ custom product list _____________*/

    if(jQuery('.ct-ul-2').length) {
        var ct_li_2 = jQuery('.ct-ul-2').find('li');
        ct_li_2.on('click', function(){
            jQuery(this).closest('.ct-ul-2').find('li').removeClass('active');
            jQuery(this).addClass('active');
        });
    }


    jQuery('.list-view').on('click', function(){
        jQuery(this).closest('.woocommerce-main-header').next().addClass('style-01');
        mh_1();
    });

    jQuery('.grid-view').on('click', function(){
        jQuery(this).closest('.woocommerce-main-header').next().removeClass('style-01');
        mh_1();
    });

/*_____________ Countdown _____________*/

    if (jQuery('.ct-countdown-1').length) {

        var ct_cd_1      = jQuery('.ct-countdown-1'),
            ct_cd_time_1 = ct_cd_1.data('year') + 
                            '/' + ct_cd_1.data('month') + 
                            '/' + ct_cd_1.data('day') + 
                            " " + ct_cd_1.data('time');

        ct_cd_1.find('.ct-chart-1').each(function() {
            var color = jQuery(this).data('color');
            var width = jQuery(this).data('width');
            var size  = jQuery(this).data('size');
            var time  = jQuery(this).data('time');

            jQuery(this).easyPieChart({
                barColor: color,
                trackColor: '#f1f1f1',
                scaleColor: '#fff',
                lineWidth: width,
                size: size,
                animate: time
            });
        });

        ct_cd_1.countdown(ct_cd_time_1).on('update.countdown', function(event) {
            var chart_seconds_1 = (event.offset.seconds / 60 *100);
            var chart_minutes_1 = (event.offset.minutes / 60 *100);
            var chart_hours_1   = (event.offset.hours / 60 *100);
            var chart_days_1    = (event.offset.totalDays / 24 *100);

            jQuery('.ct-chart-day-ct-1').text(event.offset.totalDays);
            jQuery('.ct-chart-hour-ct-1').text(event.offset.hours);
            jQuery('.ct-chart-minute-ct-1').text(event.offset.minutes);
            jQuery('.ct-chart-second-ct-1').text(event.offset.seconds);

            jQuery('.ct-chart-second-1').data('easyPieChart').update(chart_seconds_1);
            jQuery('.ct-chart-minute-1').data('easyPieChart').update(chart_minutes_1);
            jQuery('.ct-chart-hour-1').data('easyPieChart').update(chart_hours_1);
            jQuery('.ct-chart-day-1').data('easyPieChart').update(chart_days_1);
        });

    }

    if (jQuery('.ct-countdown-2').length) {

        var ct_cd_2      = jQuery('.ct-countdown-2'),
            ct_cd_time_2 = ct_cd_2.data('year') + 
                            '/' + ct_cd_2.data('month') + 
                            '/' + ct_cd_2.data('day') + 
                            " " + ct_cd_2.data('time'),
            ct_cd_content_2 = ct_cd_2.children('ul');

        ct_cd_content_2.countdown(ct_cd_time_2, function(event) {
            jQuery(this).html(event.strftime(''
                +'<li><h5>days</h5><div><span></span><p>%D</p></div></li>' 
                +'<li><h5>hours</h5><div><span></span><p>%H</p></div></li>' 
                +'<li><h5>minutes</h5><div><span></span><p>%M</p></div></li>' 
                +'<li><h5>seconds</h5><div><span></span><p>%S</p></div></li>'));
          });

    }

    if (jQuery('.ct-countdown-3').length) {

        var ct_cd_3      = jQuery('.ct-countdown-3'),
            ct_cd_time_3 = ct_cd_3.data('year') + 
                            '/' + ct_cd_3.data('month') + 
                            '/' + ct_cd_3.data('day') + 
                            " " + ct_cd_3.data('time'),
            ct_cd_content_3 = ct_cd_3.children('ul');

        ct_cd_content_3.countdown(ct_cd_time_3, function(event) {
            jQuery(this).html(event.strftime(''
                +'<li><h5>days</h5><div><span></span><p>%D</p></div></li>' 
                +'<li><h5>hours</h5><div><span></span><p>%H</p></div></li>' 
                +'<li><h5>minutes</h5><div><span></span><p>%M</p></div></li>' 
                +'<li><h5>seconds</h5><div><span></span><p>%S</p></div></li>'));
          });

    }

    if (jQuery('.ct-countdown-4').length) {

        var ct_cd_4      = jQuery('.ct-countdown-4'),
            ct_cd_time_4 = ct_cd_4.data('year') + 
                            '/' + ct_cd_4.data('month') + 
                            '/' + ct_cd_4.data('day') + 
                            " " + ct_cd_4.data('time'),
            ct_cd_content_4 = ct_cd_4.find('ul');

        ct_cd_content_4.countdown(ct_cd_time_4, function(event) {
            jQuery(this).html(event.strftime(''
                +'<li><div><p>%D</p></div><h5>days</h5></li>' 
                +'<li><div><p>%H</p></div><h5>hours</h5></li>' 
                +'<li><div><p>%M</p></div><h5>minutes</h5></li>' 
                +'<li><div><p>%S</p></div><h5>seconds</h5></li>'));
          });

    }


/*_____________ Search _____________*/

    if(jQuery('.reading-module-search-2').length){
        jQuery('.reading-module-search-2').closest('.kopa-area').css('z-index','99');
    }
    if(jQuery('.reading-module-search-3').length){
        jQuery('.reading-module-search-3').closest('.kopa-area').css('z-index','99');
    }


/*_____________ Woocommerce _____________*/

    if(jQuery('.cart_item').length) {
        jQuery('.cart_item').find('.remove').on('click', function(event){
            event.preventDefault();
            jQuery(this).closest('.cart_item').hide();
        });
    }

    if(jQuery('.woocommerce-area-1').length){
        jQuery('.woocommerce-area-1').find("a[data-rel ^='prettyPhoto']").prettyPhoto(); 
    }

    if(jQuery('.woocommerce-tabs').length) {
        var ct_li_3 = jQuery('.wc-tabs').find('li');
        ct_li_3.on('click', function(event){
            event.preventDefault();
            jQuery(this).closest('.wc-tabs').find('li').removeClass('active');
            jQuery(this).addClass('active');
        });
    }

    jQuery('.description_tab').on('click', function(){
        jQuery('#tab-description').addClass('active');
        jQuery('#tab-reviews').removeClass('active');
    });

    jQuery('.reviews_tab').on('click', function(){
        jQuery('#tab-description').removeClass('active');
        jQuery('#tab-reviews').addClass('active');
    });


/*_____________ MatchHeight _____________*/

    function mh_1(){
        jQuery('.ul-mh').children().matchHeight();
    }
    if(jQuery('.ul-mh').length){
        mh_1();
    }

/*_____________ Scroll Animation _____________*/

    var wow = new WOW({mobile: false,offset: 10});
    wow.init();



});