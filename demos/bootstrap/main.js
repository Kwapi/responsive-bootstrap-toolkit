// Your own scripts

(function($, document, window, viewport){

    var highlightBox = function( className ) {
        $(className).addClass('active');
    }

    var highlightBoxes = function() {
        $('.comparison-operator').removeClass('active');

        var breakpoint = viewport.current();

        highlightBox('.'+breakpoint);
    }

    // Executes once whole document has been loaded
    $(document).ready(function() {

        highlightBoxes();

        console.log('Current breakpoint:', viewport.current());

    });

    $(window).resize(
        viewport.changed(function(){
            highlightBoxes();

            console.log('Current breakpoint:', viewport.current());
        })
    );

})(jQuery, document, window, ResponsiveBootstrapToolkit);
