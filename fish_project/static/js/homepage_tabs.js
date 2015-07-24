(function() {
  var app = angular.module('homepagetabs', [])

  app.controller('TabController', function(){
    //The first tab is defined as tab 1
    this.tab = 1;

    //Method to set the tab to current when the user clicks on it
    this.setTab = function(tabToSet){
      this.tab = tabToSet;
    };

    //Method to check if the current tab is set; used to highlight current tab
    this.isTabSet = function(tabToCheck){
      return (this.tab === tabToCheck);
    };
  });

  app.directive('tab1File', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab1_file'
    };
  });

  app.directive('tab2File', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab2_file'
    };
  });

  app.directive('tab3File', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab3_file'
    };
  });

  app.directive('tab4File', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab4_file'
    };
  });

  app.directive('tab5File', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab5_file'
    };
  });

  app.directive('tab6File', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab6_file'
    };
  });

  app.directive('tab7File', function() {
    return {
      restrict: 'E',
      templateUrl: 'tab7_file.html'
    };
  });

})();
