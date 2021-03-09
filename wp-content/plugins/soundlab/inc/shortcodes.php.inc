<?php
/**
 * @package WordPress
 * @subpackage SoundLab
 *
 * misc shortcodes
 *
 */


function add_break($attrs, $content=""){

  return str_replace("*break*", "<br/>", $content);
}

add_shortcode('add_break', 'add_break');
