(function(){
  angular.module('ngweather')
          .controller('HourlyController', HourlyController);

  HourlyController.$inject = ['$scope', 'WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.hourlyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'There will be drizzling in your area',
      'Partly Cloudy': 'There will be some clouds around your area',
      'Light Rain': 'There will be some light rain in your area'
    };
    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.hourlyData = value;

    });
  }
})();
