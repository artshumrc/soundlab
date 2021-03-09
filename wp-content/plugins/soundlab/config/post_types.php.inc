<?php
/**
 * @package WordPress
 * @subpackage SoundLab
 *
 * Register necessary custom post types
 *
 */

add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'sound',
    array(
      'labels' => array(
        'name' => __( 'Sounds' ),
      ),
    'supports' => array( 'title', 'editor', 'thumbnail' ),
    'public' => true,
    'has_archive' => true,
    'description' => 'Sound',
    'map_meta_cap' => true,
    'taxonomies' => array( 'category', ),
    'capability_type' => "sound"
    )
  );
  register_post_type( 'resource',
    array(
      'labels' => array(
        'name' => __( 'Resources' ),
      ),
    'supports' => array( 'title', 'editor', 'thumbnail' ),
    'public' => true,
    'has_archive' => true,
    'description' => 'Resources',
    'map_meta_cap' => true,
    'taxonomies' => array( 'category', ),
    'capability_type' => "resource"
    )
  );
  register_post_type( 'user_submission',
    array(
      'labels' => array(
        'name' => __( 'User Submission' ),
      ),
    'supports' => array( 'title', 'editor', 'thumbnail' ),
    'public' => true,
    'has_archive' => true,
    'description' => 'User Submissions',
    'map_meta_cap' => true,
    'taxonomies' => array( 'category', ),
    'capability_type' => "user_submission"
    )
  );
  register_post_type( 'playlist',
    array(
      'labels' => array(
        'name' => __( 'Playlist' ),
      ),
    'supports' => array( 'title', 'thumbnail' ),
    'public' => true,
    'has_archive' => true,
    'description' => 'Playlist',
    'map_meta_cap' => true,
    'taxonomies' => array( 'category', ),
    'capability_type' => "playlist"
    )
  );
  register_post_type( 'event',
    array(
      'labels' => array(
        'name' => __( 'Event' ),
      ),
    'supports' => array( 'title', 'editor', 'thumbnail' ),
    'public' => true,
    'has_archive' => true,
    'description' => 'Event',
    'map_meta_cap' => true,
    'taxonomies' => array( 'category', ),
    'capability_type' => "event"
    )
  );
  register_post_type( 'person',
    array(
      'labels' => array(
        'name' => __( 'People' ),
      ),
    'taxonomies' => array( 'category', ),
    'public' => true,
    'has_archive' => true,
    'description' => 'People',
    'map_meta_cap' => true,
    'taxonomies' => array(),
    'capability_type' => "person"
    )
  );
}
add_theme_support( 'post-thumbnails', array( 'audio_upload', 'user_submission' ) );
