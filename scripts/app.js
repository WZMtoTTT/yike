
var Yike = angular.module('Yike',['ngRoute','Controllers','Directive']);

	Yike.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/body',{
			templateUrl: './views/body.html',
			controller:'bodyController'
		}).when('/older',{
			templateUrl:'./views/body.html',
			controller:'olderController'
		}).when('/author',{
			templateUrl:'./views/author.html',
			controller:'authorController'
		}).when('/category',{
			templateUrl:'./views/list.html',
			controller:'categoryController'
		})
		.otherwise({
			redirectTo:'/body'
		})
	}]);

	Yike.run(['$rootScope',function($rootScope){
		$rootScope.collapsed = false;
		$rootScope.toggle = function(){
			$rootScope.collapsed = !$rootScope.collapsed;
			var navs = document.querySelectorAll('.navs dd');

			if($rootScope.collapsed){
				angular.forEach(navs,function(val,key){
					val.style.transitionDuration = 0.2*key+'s';
					val.style.transitionDelay = '0.2s';
					val.style.transform = 'translate(0)';
				})
			}else{
				var len = navs.length-1;
				angular.forEach(navs, function(val, key){
					navs[len-key].style.transitionDuration = 0.2*key+'s';
					navs[len-key].style.transitionDelay = '0s';
					navs[len-key].style.transform = 'translate(-100%)';
				});
			}
		}

	}])