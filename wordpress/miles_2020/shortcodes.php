<?php

include 'miles_limes.php';

function register_shortcodes(): void
{
    add_shortcode('show-consultant', 'get_consultant_shortcode');
    add_shortcode('show-consultant-group', 'get_consultant_group_shortcode');
}

function get_consultant_shortcode($atts): string
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

    $result = toWebComponent($atts['wc_name'], array(
        'name' => $consultant["name"],
        'description' => $consultant["office"],
        'title' => $consultant["title"],
        'image' => $consultant["imageUrlThumbnail"]
    ), null);

    return $result;
}

function get_consultant_group_shortcode($atts): string
{
    $office = "area=" . $atts['area'];
    $area = "office=" . $atts['area'];

    $query = $office . $area;

    $webComponent = $atts["wp_name"];

    $consultantList = get_consultants($office, $area);

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

function toWebComponent($componentName, $properties, $body): string
{
    $result = '<' . $componentName;
    foreach ($properties as $prop => $val) {
        $result .= ' ' . $prop . '="' . $val . '"';
    }
    $result .= '>';

    if ($body) {
        $result .= $body;
    }

    $result .= '</' . $componentName . '>';

    return $result;
}