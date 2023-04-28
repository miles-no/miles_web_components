<?php



function register_shortcodes_dev(): void
{
    add_shortcode('miles_info_block', 'miles_info_block_shortcode');
}


function miles_info_block_shortcode( $atts, $content = null ): string 
{
    $heading = $atts['heading'] ?? 'default heading';
    if ( $content == null ) {
        $content = 'default content';
    }
    return '<miles-info-block heading="' . $heading . '">' . $content . '</miles-info-block>';
}
