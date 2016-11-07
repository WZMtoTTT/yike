

angular.module('Directive',[])

.directive('loading',function(){
	return {
		restrict:'ECMA',
		replace:true,
		template:'<img src="" alt="">'
	}
})