jQuery(document).ready(function() {

    //call the blink function on the element you want to blink
    // blink("#myDiv", 4, 500); //blink a div with the ID of myDiv
    // blink("input[type='submit']", 3, 1000); //blink a submit button
    // blink("#p3-beauty", -1, 100); //blink the first element in an ordered list (infinite times)
    blink(".blinking-popup", -1, 100); //blink anything that has a myClass on it

    jQuery('img.popups').hide();

    ////////////////////// Page 3 /////////////////////////////
    jQuery('#p3').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p3.popups').fadeIn(2400);
        } else {
            jQuery('.p3.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 4 /////////////////////////////
    jQuery('#p4').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p4.popups').fadeIn(2400);
        } else {
            jQuery('.p4.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 5 /////////////////////////////
    jQuery('#p5').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p5.popups').fadeIn(2400);
        } else {
            jQuery('.p5.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 6 /////////////////////////////
    jQuery('#p6').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p6.popups').fadeIn(2400);
        } else {
            jQuery('.p6.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 7 /////////////////////////////
    jQuery('#p7').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p7.popups').fadeIn(2400);
        } else {
            jQuery('.p7.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 8 /////////////////////////////
    jQuery('#p8').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p8.popups').fadeIn(2400);
        } else {
            jQuery('.p8.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 9 /////////////////////////////
    jQuery('#p9').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p9.popups').fadeIn(2400);
        } else {
            jQuery('.p9.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 10 ////////////////////////////
    jQuery('#p10').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p10.popups').fadeIn(2400);
        } else {
            jQuery('.p10.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 11 ////////////////////////////
    jQuery('#p11').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p11.popups').fadeIn(2400);
        } else {
            jQuery('.p11.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 12 ////////////////////////////
    jQuery('#p12').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p12.popups').fadeIn(2400);
        } else {
            jQuery('.p12.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 13 ////////////////////////////
    jQuery('#p13').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p13.popups').fadeIn(2400);
        } else {
            jQuery('.p13.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 14 ////////////////////////////
    jQuery('#p14').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p14.popups').fadeIn(2400);
        } else {
            jQuery('.p14.popups').fadeOut(2400);
        }
    });

    ////////////////////// Page 15 ////////////////////////////
    jQuery('#p15').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery('.p15.popups').fadeIn(2400);
        } else {
            jQuery('.p15.popups').fadeOut(2400);
        }
    });

    /////////////// Exiting / Hiding Popups ///////////////////
    jQuery(document.body).on('touchstart', '.popups', function() { //Change to Touchstart
        jQuery(this).hide();
    });


    /**
     * Purpose: blink a page element
     * Preconditions: the element you want to apply the blink to, the number of times to blink the element (or -1 for infinite times), the speed of the blink
     **/
    function blink(elem, times, speed) {
        if (times > 0 || times < 0) {
            if (jQuery(elem).hasClass("blink"))
                jQuery(elem).removeClass("blink");
            else
                jQuery(elem).addClass("blink");
        }

        clearTimeout(function() {
            blink(elem, times, speed);
        });

        if (times > 0 || times < 0) {
            setTimeout(function() {
                blink(elem, times, speed);
            }, speed);
            times -= 0.5;
        }
    }

});