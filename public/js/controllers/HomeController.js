(function(){
  angular.module('ngweather')
          .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'WeatherService'];

  funtion HomeController($scope, WeatherService){
    $scope.updateHourly = updateHourly;
    $scope.updateMinutely = updateMinutely;
    $scope.updateDaily = updateDaily;

    function updateHourly(latitude, longitude){
      WeatherService.getHourlyData(latitude,longitude);
    }
    function updateMinutely(latitude, longitude){}
    function updateDaily(latitude, longitude){}

  }
})();
