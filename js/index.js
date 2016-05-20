jQuery(window).load(function() {

    jQuery('img.popups').bind('inview', function(event, visible) {
        if (visible === true) {
            jQuery(this).fadeIn(5000);
            console.log("this is faded in " + this);
        } else {
            jQuery(this).fadeIn(5000);
            console.log("this is faded out " + this);
        }
    });

});