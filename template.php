<?php
/**
 * Template.php
 * - Theme common functions
 */

/**
 * HTML Template Preprocess Hook
 */
function drupal7webpack_preprocess_html(&$variables, $hook) {

  // Front Page Title
  if($variables['is_front'] || !drupal_get_title()) {
    $variables['head_title'] = variable_get('site_name');
  } else {
    $variables['head_title'] = drupal_get_title() . ' | ' . variable_get('site_name');
  }

}

/**
 * Modify Main Menu Links
 */
function drupal7webpack_menu_link(array $variables) {
  error_log(json_encode($variables));
  // $element = $variables['element'];
  // $sub_menu = '';
  // if ($element['#below']) {
  //   $sub_menu = drupal_render($element['#below']);
  // }
  // $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  // return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";

}