<?php
/**
 * @package WordPress
 * @subpackage Sound Lab
 *
 * AJAX functions for Sound Lab
 */

add_action( "wp_ajax_soundlab_user_signup", "soundlab_user_signup_callback" );
add_action( "wp_ajax_nopriv_soundlab_user_signup", "soundlab_user_signup_callback" );

function soundlab_user_signup_callback () {
	$username = sanitize_text_field($_POST["username"]);
	$email = sanitize_text_field($_POST["email"]);
	$name = sanitize_text_field($_POST["name"]);
	$password = sanitize_text_field($_POST["password"]);
	$field = sanitize_text_field($_POST["field"]);
	$response = 0;


	$user_id = username_exists( $username );
	if ( !$user_id && email_exists($email) == false ) {
		$user_id = wp_create_user( $username, $password, $email );
		wp_update_user(array(
			"ID" => $user_id,
			"display_name" => $name,
		));
		add_post_meta($user_id, "field", $field);
		$response = $user_id;
	} else {
		// TODO: do better error handling with response type in graphql
		$response = 0;
	}

	// json encode the post_data array and die
	echo json_encode( array( "id" => $response ) );
  die();
}
