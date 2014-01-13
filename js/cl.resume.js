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
var CL = window.CL || {};

/**
 * Immediately-Invoked Function Expression.
 *
 * @function
 * @param {object} $ - Global jQuery object.
 */
(function ($, w) {

	// strict js
	'use strict';

	/**
	 * Creates an instance of ResumeConstructor.
	 * Modified: 07/09/2013
	 *
	 * @constructor
	 * @author Craig Lucas <clucas@everydayhealthinc.com>
	 */
	CL.ResumeConstructor = function () {};

	/**
	 * Inheritable methods.
	 *
	 * @type {object}
	 */
	CL.ResumeConstructor.prototype = {

		/**
		 * Initialization methods.
		 * Modified: 07/09/2013
		 *
		 * @method init
		 * @author Craig Lucas <clucas@everydayhealthinc.com>
		 * @public
		 */
		init : function () {
			this.objectInit();
            this.ActionLinks.init(this);
			this.Nav.load(this);
		},

		/**
		 * Initialize objects
		 * Modified: 07/09/2013
		 *
		 * @method objectInit
		 * @author Craig Lucas <clucas@everydayhealthinc.com>
		 * @public
		 */
		objectInit : function () {
			this.settings = {
                linkedIn: "http://www.linkedin.com/in/craigjosephlucas",
                email: 'craig.joseph.lucas@gmail.com'
            },
            this.$jq = [];
            this.$jq.$resume = $('#resume'),
            this.$jq.$email = this.$jq.$resume.find('#email');
            this.$jq.$print = this.$jq.$resume.find('#print');
            this.$jq.$pdf = this.$jq.$resume.find('#pdf');
		},
		/**
		 * Nav object.
		 * Modified: 07/09/2013
		 *
		 * @type {object}
		 * @author Craig Lucas <clucas@everydayhealthinc.com>
		 * @public
		 */
		Nav : {

			/**
			 * load Nav
			 * Modified: 09/21/2013
			 *
			 * @method load
			 * @author Craig Lucas <clucas@everydayhealthinc.com>
			 * @public
			 */
			load : function (_p) {
                this.events.click();
			},
             
            /**
             * Nav events object.
             * Modified: 07/09/2013
             *
             * @type {object}
             * @author Craig Lucas <clucas@everydayhealthinc.com>
             * @public
             */
            events : { 
                
                /**
                 * load Nav
                 * Modified: 09/21/2013
                 *
                 * @method load
                 * @author Craig Lucas <clucas@everydayhealthinc.com>
                 * @public
                 */            
                click: function () {
                   var $navDiv = $('#resumeNav'),
                    _self = this,
                    $page = $('html, body'),
                    $link;
        
                    $navDiv.find('li a').on("click.sectionAnchor", function (e) {
                        $link = $($(this).attr('href'));
                        e.preventDefault();
                        $page.animate({
                            scrollTop: $link.offset().top
                            }, 1200);
                            return false;
                    });	
                    
                }
            }
        },
        
        ActionLinks: {
            
            /**
             * init method for actionlinks
             * Modified: 09/21/2013
             *
             * @method init
             * @author Craig Lucas <clucas@everydayhealthinc.com>
             * @public
             */
            init : function (_p) {
                this.email.call(_p);
                this.print.call(_p);
                this.pdf.call(_p);
            },                 
            
            /**
             * populate email link
             * Modified: 09/21/2013
             *
             * @method email
             * @author Craig Lucas <clucas@everydayhealthinc.com>
             * @public
             */
            email : function () {
                var uri;
                uri = "mailto:?craig.joseph.lucas@gmail.com";              
                this.$jq.$email.on("click.email", function (e) {
                    w.open(uri)
                    e.preventDefault();
                });                   
            },            
            
            /**
             * window print
             * Modified: 09/21/2013
             *
             * @method email
             * @author Craig Lucas <clucas@everydayhealthinc.com>
             * @public
             */
            print : function () {
                this.$jq.$print.on("click.print", function (e) {
                    w.print();
                    e.preventDefault();
                });    
            },
            
            /**
             * window print
             * Modified: 09/21/2013
             *
             * @method email
             * @author Craig Lucas <clucas@everydayhealthinc.com>
             * @public
             */
            pdf : function () {
                this.$jq.$pdf.on("click.pdf", function (e) {
                    w.open("LucasCraigResume.pdf");
                    e.preventDefault();
                });    
            },                 
                
        }        
    
    };
            



	/**
	 * Instantiate object.
	 *
	 * @type {object}
	 * @see {@linkCJ.ResumeConstructor}
	 * @public
	 */
	CL.Resume = new CL.ResumeConstructor();

	// dom ready
	$(function () {

		// page init
		CL.Resume.init();

	});

}
	(jQuery, window));
