
/* JavaScript content from js/app.js in folder common */

var app=angular.module('App', ['ionic']);
app.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller:'loginController'
    });

   
		$urlRouterProvider.otherwise("/login");
	
})
.config(function ($httpProvider) {
   
}) 

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
