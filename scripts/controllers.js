

angular.module('Controllers',[])

.controller('NavsController', ['$scope', function($scope) {
	$scope.navs = [
		{link: '#/body', text: '今日一刻', icon: 'icon-home'},
		{link: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{link: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{link: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		{link: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{link: '#/settings', text: '设置', icon: 'icon-cog'},
	];
}])

//今日一刻
.controller('bodyController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$rootScope.title = '今日一刻';
	$rootScope.index = 0;
	$http({
		url:'./api/body.php'
		
	}).success(function(data){
		$scope.posts = data.posts;
		$scope.date = data.date;
		$rootScope.loaded = true;
	});
	
}])
//往期内容
.controller('olderController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$rootScope.title = '往期内容';
	$rootScope.index = 1;
	$http({
		url:'./api/older.php'
		
	}).success(function(data){
		$scope.posts = data.posts;
		$scope.date = data.date;
		$rootScope.loaded = true;
	});
}])
//热门作者
.controller('authorController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$rootScope.title = '热门作者';
	$rootScope.index = 2;
	$http({
		url:'./api/author.php'
		
	}).success(function(data){
		$scope.posts = data.authors;
		$rootScope.loaded = true;
	});
}])
//栏目浏览
.controller('categoryController',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	$rootScope.loaded = false;
	$rootScope.title = '栏目浏览';
	$rootScope.index = 3;
	$http({
		url:'./api/category.php'
		
	}).success(function(data){
		$scope.posts = data.columns;
		$rootScope.loaded = true;
	});
}])