'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'trust-roots';
	var applicationModuleVendorDependencies = [
	                                            'btford.socket-io',
	                                            'ngResource',
	                                            'ngCookies',
	                                            'ngAnimate',
	                                            'ngTouch',
	                                            'ngSanitize',
	                                            'ui.router',
	                                            'ui.bootstrap',
	                                            'ui.utils',
	                                            'angularMoment',
	                                            'angular-medium-editor',
	                                            'perfect_scrollbar'
	                                          ];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();