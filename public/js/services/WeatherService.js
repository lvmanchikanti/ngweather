(function(){
  angular.module('ngweather')
        .factory('WeatherService', WeatherService);

//$http allows us to use http methods
  WeatherService.$inject = ['$http'];

  function WeatherService($http){
    var passphrase = 'i like cheese and bacon and some other things too';
    var baseUrl = 'https://quiet-bayou-88937.herokuapp.com/';
    var service = {
      getHourlyData: getHourlyData, //x
      getMinutelyData: getMinutelyData,
      getDailyData: getDailyData,
      weather: {}
    };
    return service;

    //function x(lat,lon){}
    function getHourlyData(lat, lon){
      var url = baseUrl + 'forecast/hourly/' + lat + ',' + lon;
      console.log(service.weather);
      var config = {
        headers: {
          'passphrase': passphrase
        }
      };
      return $http.get(url, config)
                  .then(function(response){ //sent back from the server to the front end
                      service.weather = response.data;
                      console.log(service.weather);
                  });
    }
    function getMinutelyData(lat, lon){}
    function getDailyData(lat, lon) {}
  }
})();
