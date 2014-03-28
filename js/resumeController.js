/**
 * @file Scripts specific to the resume of Craig Lucas
 * Created:  01/11/2014
 * Modified: 01/11/2014
 */

/**
 * CJ
 * @namespace
 * @type {object}
 * @global
 * @public
 */
var CL = Window.CL || {};

/**
 * Immediately-Invoked Function Expression.
 *
 * @function
 * @param {object} $ - Global jQuery object.
 */
(function () {

	// strict js
	'use strict';

	/**
	 * Creates an instance of ResumeConstructor.
	 * Modified: 01/15/2014
	 *
	 * @constructor
	 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
	 */
	CL.ResumeControllerConstructor = function () {};

    CL.ResumeControllerConstructor.prototype = {
        
        init: function () {
            
            this.resumeApp = angular.module('resumeApp', []);  
            
            this.resumeApp.controller('ResumeCtrl', function($scope, $http) {
                 $http.get('js/portfolio-pages.json').success(function (data) {
                    $scope.pages = data;
                  });  
            });            
                        
            
        }
        
	};

	/**
	 * Instantiate object.
	 *
	 * @type {object}
	 * @see {@linkCJ.ResumeConstructor}
	 * @public
	 */
	CL.ResumeController = new CL.ResumeControllerConstructor();


    // page init
    CL.ResumeController.init();

}());
    
    
