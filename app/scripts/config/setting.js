'use strict';

angular.module('portalDemoApp')
	.constant('cookie', {
		life: 30
	})
	.constant('server', {
		/*urlPrefix:'http://192.168.7.128:8080/AngularTest/',*/
		urlPrefix: 'http://192.168.7.127:3000/',
		languages: 'en-us'
	});