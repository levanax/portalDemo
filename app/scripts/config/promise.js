/**
 * Created by Levana.Xue on 6/9/2015.
 */
'use strict';

angular.module('portalDemoApp')
.run(['$rootScope','constant','$state','dataStorageSvc',function ($rootScope,constant,$state,dataStorageSvc) {
	$rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){
			console.log('in $stateChangeStart...............');
		    // transitionTo() promise will be rejected with 
		    // a 'transition prevented' error

			if(toState != $state.get('login')){
				if (dataStorageSvc.session.get(constant.userinfo)){

			    }else{
			    	console.log('farword login page.');
			    	event.preventDefault();
			    	$state.go('login'); //redefine orientation
				    
				    //$urlRouter.sync(); // Continue with the update and state transition if logic allows
			    }
			}
		});
	$rootScope.$on('$stateNotFound', 
		function(event, unfoundState, fromState, fromParams){ 
			console.log('in $stateNotFound...............');
		    /*console.log(unfoundState.to); 
		    console.log(unfoundState.toParams); 
		    console.log(unfoundState.options); */
		});
	$rootScope.$on('$stateChangeError', 
		function(event, toState, toParams, fromState, fromParams, error){
			console.log('in $stateChangeError...............');
			console.log(error);
			//do something ...
		});
}]);