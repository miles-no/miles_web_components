<?php

use function miles_limes\get_consultants;
use function shortcode_util\toWebComponent;

function register_shortcodes(): void
{
    add_shortcode('show-consultant', 'shortcode_show_consultant');
    add_shortcode('show-consultant-group', 'shortcode_show_consultant_group');
}

function shortcode_show_consultant($atts): string
{
    $query = "email=" . $atts['email'];

    $consultantList = json_decode(
        wpgetapi_endpoint(
            'milesno_limes_internal_api',
            'get_consultants',
            array(
                'debug' => false,
                'query_variables' => $query,
            ),

        ),
        true
    );

    $consultant = $consultantList["list"][0];

    return toWebComponent($atts['wc_name'], array(
        'name' => $consultant["name"],
        'description' => $consultant["office"],
        'title' => $consultant["title"],
        'image' => $consultant["imageUrlThumbnail"]
    ), null);
}

function shortcode_show_consultant_group($atts): string
{
    $office = "area=" . $atts['area'];
    $area = "office=" . $atts['area'];

    $query = $office . $area;

    $webComponent = $atts["wp_name"];

    $consultantList = get_consultants($office, $area, null);

    $consultantList = json_decode(
        wpgetapi_endpoint(
            'milesno_limes_internal_api',
            'get_consultants',
            array(
                'debug' => false,
                'query_variables' => $query,
            ),

        ),
        true
    );

    $consultant = $consultantList["list"][0];

    $result = '';
    foreach ($consultantList as $consultant) {
        $result .= toWebComponent($webComponent, array(
            'name' => $consultant["name"],
            'description' => $consultant["office"],
            'title' => $consultant["title"],
            'image' => $consultant["imageUrlThumbnail"]
        ), null);
    }

    return $result;
}
