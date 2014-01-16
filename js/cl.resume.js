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
		
		   // set cache for jQ async scripts
            this.setCache();
			
			// initialize object setups
			this.objectInit();
			
			// initialize action links
            this.ActionLinks.init(this);
			
			// initialize nav
			this.Nav.init(this);
		},
		
        /**
         * Set cache for jQuery asynchronous scripts.<br>
         * Modified: 08/27/2013
         *
         * @method setCache
         * @author Craig Lucas <clucas@everydayhealthinc.com>
         * @public
        */
        setCache: function () {
            $.ajaxSetup({
                cache: true
            });
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
			this.$jq.$pLinks = this.$jq.$resume.find('#portfolioLinks li a'); // portfolio links
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
			init : function (_p) {
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
				this.portfolioLinks.init(_p);
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

			portfolioLinks: {
				/**
				 * init method for portfolioLinks
				 * Modified: 09/21/2013
				 *
				 * @method init
				 * @author Craig Lucas <clucas@everydayhealthinc.com>
				 * @public
				 */
				init : function (_p) {
					var _s = this, // reference to this
						  $link, // link data
						  pageName;
						  
					_p.$jq.$pLinks.on("click.portfolioLinks", function (e) {						
						e.preventDefault();
						$link = $(this);
						pageName = $link.data('pageName');
						_s.load(_p, pageName);
					});    					
				},
				
				/**
				 * load event for portfolio links
				 * Modified: 09/21/2013
				 *
				 * @method init
				 * @author Craig Lucas <clucas@everydayhealthinc.com>
				 * @public
				 */
				load : function (_p, pageName){
                    
                    var request = 'js/portfolio-pages.json',
                        _self = this;
                    
                    $.getJSON(request, function (data) {
					   $.each(data.pages, function (i, link) {
                          if (pageName === link.name) {
                            _self.show(link);
                          }
                       });   
                    });    
				},
                
                
				/**
				 * show portfolio link
				 * Modified: 09/21/2013
				 *
				 * @method init
				 * @author Craig Lucas <clucas@everydayhealthinc.com>
				 * @public
				 */
				show : function (link){
                    var $modal = $('#resumeModal');
                    
                    // lets add the portfolio link html to modal
                    $modal.find('.modal-body').html(link.descriptionHtml);
                    
                    // show modal
                    $modal.modal('show');
                    
                }    

			}
                
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
