/**
 * @file
 * Contains Flexslider init code.
 */

(function($) {
  Drupal.behaviors.drupalCampCebu2015 = {
    attach: function (context, settings) {
      // This is the recommended approach for Flexslider.
      $(window).load(function() {
        $('.flexslider').flexslider({
          animation: "fade"
        });
      });
    }
  };
})(jQuery);
