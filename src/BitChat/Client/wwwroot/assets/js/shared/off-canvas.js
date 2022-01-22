(function($) {
  'use strict';
  $(function() {
    $('[data-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active')
    });
  });
})(jQuery);

(function ($) {
    'use strict';
    $(function () {
        $('#main-content').on("click", function () {
            if ($('.sidebar-offcanvas').hasClass('active')) {
                $('.sidebar-offcanvas').removeClass('active')
            }
        });
    });
})(jQuery);
