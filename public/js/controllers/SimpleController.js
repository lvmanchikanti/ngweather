(function(){
  angular.module('ngweather')
          .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'WeatherService'];

  function SimpleController($scope, WeatherService){
    $scope.message = 'Hello There!';
    WeatherService.getHourlyData(29,-82);
  }
})();
