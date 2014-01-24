<?php
/*
Plugin Name: P2 Control Enter / Command Enter Submit
Plugin URI: http://dustyf.com
Description: Allows you to use Control Enter or Command Enter to submit posts and comments on the P2 Theme
Author: Dustin Filippini
Version: 0.1
Author URI: http://dustyf.com
*/

function p2cece_enqueue_scripts() {
	wp_enqueue_script( 'p2cece', plugins_url( 'p2-control-enter-command-enter-submit.js', __FILE__ ), array( 'jquery' ), '0.1', true );
}
add_action( 'wp_enqueue_scripts', 'p2cece_enqueue_scripts' );