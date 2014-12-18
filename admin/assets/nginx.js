jQuery(document).ready(function() {
    /**
     * Show OR Hide options on option checkbox
     * @param {type} selector Selector of Checkbox and PostBox
     */
    function nginx_show_option( selector ) {
        jQuery( '#'+selector ).on( 'change', function (){
            if ( jQuery(this).is( ':checked' ) ) {
                jQuery( '.'+selector ).show();
            } else {
                jQuery( '.'+selector ).hide();
            }
        } );        
    }
    /* Function call with parameter */
    nginx_show_option( 'enable_purge' );
    nginx_show_option( 'enable_map' );
    nginx_show_option( 'enable_log' );
});
