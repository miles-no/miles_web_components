<?php

use function shortcode_util\toWebComponent;

function register_shortcodes_dev(): void
{
    add_shortcode('miles_info_block', 'miles_info_block_shortcode');
	add_shortcode('miles-button-anchor', 'miles_button_anchor_shortcode');
	
}


function miles_info_block_shortcode( $atts, $content = null ): string 
{
    $heading = $atts['heading'] ?? 'default heading';
    if ( $content == null ) {
        $content = 'default content';
    }
    return '<miles-info-block heading="' . $heading . '">' . $content . '</miles-info-block>';
}

function miles_button_anchor_shortcode( $atts, $content = null ): string 
{
    $href = $atts['href'] ?? '#';
    if ( $content == null ) {
        $content = 'default content';
    }
    return '<miles-button-anchor href="' . $href . '">' . $content . '</miles-button-anchor>';
}

function miles_business_card_shortcode( $atts, $content = null ): string 
{
	return toWebComponent('miles-business-card', $attr, $content);
}


