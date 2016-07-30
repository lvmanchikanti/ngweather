(function(){
  angular.module('ngweather')
          .controller('HourlyController', HourlyController);

  HourlyController.$inject = ['$scope', 'WeatherService'];

  function HourlyController($scope, WeatherService){
    $scope.hourlyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'It is drizzling',
      'Partly Cloudy': 'It is partly cloudy',
      'Light Rain': 'There is light rain'
    };
    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.hourlyData = value;

    });
  }
})();
