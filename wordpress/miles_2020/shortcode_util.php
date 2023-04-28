<?php

namespace shortcode_util;

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