/**
 * Created by nikos on 6/9/2014.
 */
var app = angular.module('movieRama', ['ngRoute', 'ngSanitize']);



app.factory('socket',['$rootScope',
    function($rootScope){
      var socket = io;
      socket.on('connect',function socketConnected() {
        console.log(
          'Socket is now connected!'
        );

      });
      socket.on('reconnect',function(){
        console.log(
          'Socket is now reconnected!'
        );
      })
      return {
        post: function(url,data,cb){
          console.log("Socket post:"+url);
          socket.post(url,data,function(){
            var args=arguments;
            $rootScope.$apply(function(){
              cb.apply(socket,args);
            });
          });
        },
        get: function(url,data,cb){
          console.log("Socket get:"+url);
          socket.get(url,data,function(){
            var args=arguments;
            $rootScope.$apply(function(){
              cb.apply(socket,args);
            });
          });
        },
        on: function(event,cb){
          socket.removeAllListeners(event);
          socket.on(event,function(){
            var args=arguments;
            $rootScope.$apply(function(){
              cb.apply(socket,args);
            });
          });
        }
      };
    }]
);


app.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){
  $routeProvider
    .when('/', {
      templateUrl:'/templates/index.html',
      controller:"IndexController"
    })
    .when('/page/:page', {
      templateUrl:'/templates/index.html',
      controller:"IndexController"
    })
    .when('/search/:query', {
      templateUrl:'/templates/index.html',
      controller:"SearchController"
    })
    .when('/search/:query/:page', {
      templateUrl:'/templates/index.html',
      controller:"SearchController"
    })

  $locationProvider.html5Mode(true);
}]);
