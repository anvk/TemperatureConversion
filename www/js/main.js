require.config({
  paths: {
    jquery: '../lib/jquery/jquery-1.11.1.min',
    jqueryMobile: '../lib/jquery-mobile/jquery.mobile-1.3.2.min'
  }
});
require([
  'jquery',
  'app',
  'jqueryMobile'
], function($, App) {
  new App();
});