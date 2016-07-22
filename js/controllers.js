(function () {
  'use strict'

  angular
    .module('matchUp')
    .controller('MainCtrl', MainCtrl);

    function MainCtrl() {
      var vm = this;
      vm.members = [];
      
    }
})();
