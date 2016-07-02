/*!
 * angular-window-height 1.0.1
 * Pam Halligan-Sims
 * https://github.com/phsims/angular-window-height.git
 * License: MIT
 */

(function(){
  "use strict";
  angular
  .module("full.height",[])
  .directive("fullHeight", ['$window', function($window) {

    return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var winHeight = "@";

          function fullHeight(){
            winHeight = $window.innerHeight
              element.css({
                minHeight: winHeight
              })
              console.log(winHeight);
            };

            angular.element($window).bind('resize', function () {
              winHeight = $window.innerHeight
              fullHeight();
            });

            fullHeight();
            }
          }
        }
      ]);
}());
