<?php
/**
 * Add custom short codes
 */
add_action('init', 'register_shortcodes');

function register_shortcodes()
{
    add_shortcode('get-consultant', 'get_consultant_shortcode');
}

function get_offices()
{
    $offices = json_decode(wpgetapi_endpoint('milesno_limes_internal_api', 'get_offices', array('debug' => false)), true);

    return $offices["list"] ?? array();
}


function get_consultants($office, $role)
{
    if ($office && $role) {
        $query = $office . "&" . $role;
    } else if ($office) {
        $query = $office;
    } else if ($role) {
        $query = $role;
    }

    $consultantList = wpgetapi_endpoint(
        'milesno_limes_internal_api',
        'get_consultants',
        array(
            'debug' => false,
            'query_variables' => $query,
            'header_variables' => array(
                'Content-Type' => 'application/json; charset=utf-8'
            ),
        )
    );

    $consultants = json_decode($consultantList, true);

    return $consultants['list'] ?? array();
}

function get_consultant($email)
{
    $query = "email=" . $email;

    $consultantList = wpgetapi_endpoint(
        'milesno_limes_internal_api',
        'get_consultants',
        array(
            'debug' => false,
            'query_variables' => $query,
            'header_variables' => array(
                'Content-Type' => 'application/json; charset=utf-8'
            ),
        )
    );

    $consultants = json_decode($consultantList, true);

    return $consultants['list'] ?? array();
}

function search_office($officeName)
{
    $officeList = get_offices();

    foreach ($officeList as $office) {
        if (strtolower($office["name"]) == strtolower($officeName)) {
            return $office;
        }
    }

    return null;
}
