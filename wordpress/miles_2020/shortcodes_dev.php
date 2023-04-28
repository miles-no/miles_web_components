<?php



function register_shortcodes_dev(): void
{
    add_shortcode('miles_info_block', 'get_consultant_group_shortcode');
}


function miles_info_block( $atts, $content = null ) {
    $heading = $atts['heading'] ?? 'default heading';
    if ( $content == null ) {
        $content = 'default content';
    }
    return '<miles-info-block heading="' . $heading . '">' . $content . '</miles-info-block>';
}
