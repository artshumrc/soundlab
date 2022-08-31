<?php
/**
 * @internal    never define functions inside callbacks.
 *              these functions could be run multiple times; this would result in a fatal error.
 */

/**
 * custom option and settings
 */
function soundlab_settings_init()
{
    // register a new setting for "SoundLab options" page
    register_setting('soundlab', 'soundlab_options');

    // register a new section in the "SoundLab options" page
    add_settings_section(
        'soundlab_section_developers',
        __('Instagram settings for SoundLab.', 'soundlab'),
        'soundlab_section_developers_cb',
        'soundlab'
    );
}

/**
 * register our soundlab_settings_init to the admin_init action hook
 */
add_action('admin_init', 'soundlab_settings_init');

/**
 * top level menu
 */
function soundlab_options_page()
{
    // add top level menu page
    add_menu_page(
        'Configure SoundLab Options',
        'SoundLab Options',
        'manage_options',
        'soundlab',
        'soundlab_options_page_html'
    );
}

/**
 * register our soundlab_options_page to the admin_menu action hook
 */
add_action('admin_menu', 'soundlab_options_page');

/**
 * top level menu:
 * callback functions
 */
function soundlab_options_page_html()
{
    // check user capabilities
    if (!current_user_can('manage_options')) {
        return;
    }

    // add error/update messages

    // check if the user have submitted the settings
    // wordpress will add the "settings-updated" $_GET parameter to the url
    if (isset($_GET['settings-updated'])) {
        // add settings saved message with the class of "updated"
        add_settings_error('soundlab_messages', 'soundlab_message', __('Settings Saved', 'soundlab'), 'updated');
    }

    // show error/update messages
    settings_errors('soundlab_messages');
    ?>
    <div class="wrap">
        <h1><?= esc_html(get_admin_page_title()); ?></h1>
        <form action="options.php" method="post">
            <?php
            // output security fields for the registered setting "soundlab"
            settings_fields('soundlab');
            // output setting sections and their fields
            // (sections are registered for "soundlab", each field is registered to a specific section)
            do_settings_sections('soundlab');
            // output save settings button
            submit_button('Save Settings');
            ?>
        </form>
    </div>
    <?php
}
