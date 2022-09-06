<?php

/**
 * @package WordPress
 * @subpackage SoundLab
 *
 * Plugin Name: SoundLab
 * Description: Plugin associated with Sound Lab
 * Version: 1.0.0
 * Author: Archimedes Digital
 * Author URI: http://soundlab.archimedes.digital
 */

define('SOUNDLAB_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

// require settings
require_once( SOUNDLAB_PLUGIN_DIR .'config/settings.php.inc');
require_once( SOUNDLAB_PLUGIN_DIR .'config/post_types.php.inc');
require_once( SOUNDLAB_PLUGIN_DIR .'config/taxonomies.php.inc');

// require other specific plugin functionalities
require_once( SOUNDLAB_PLUGIN_DIR .'inc/ajax.php.inc');
require_once( SOUNDLAB_PLUGIN_DIR .'inc/options-page.php.inc');
require_once( SOUNDLAB_PLUGIN_DIR .'inc/shortcodes.php.inc');
