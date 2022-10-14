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
(function ($, w) {

	// strict js
	'use strict';

	/**
	 * Creates an instance of ResumeConstructor.
	 * Modified: 01/15/2014
	 *
	 * @constructor
	 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
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
		 * Modified: 01/15/2014
		 *
		 * @method init
		 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
		 * @public
		 */
		init : function () {

			// set cache for jQ async scripts
			this.setCache();

			// initialize object setups
			this.objectInit();

			// initialize action links
			this.ActionLinks.init.call(this);
            
            // initialize projects
            this.Projects.init.call(this);

			// initialize nav
			this.Nav.init.call(this);
		},

		/**
		 * Set cache for jQuery asynchronous scripts.<br>
		 * Modified: 01/15/2014
		 *
		 * @method setCache
		 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
		 * @public
		 */
		setCache : function () {
		
			$.ajaxSetup({
				cache : true
			});
			
		},

		/**
		 * Initialize objects
		 * Modified: 01/15/2014
		 *
		 * @method objectInit
		 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
		 * @public
		 */
		objectInit : function () {
		
            this.settings = [];
			this.settings.linkedIn = 'http://www.linkedin.com/in/craigjosephlucas';
			this.settings.email	= 'craig.joseph.lucas@gmail.com';
			
			this.$jq = [];
			this.$jq.$resume = $('#resume');
			this.$jq.$email = this.$jq.$resume.find('#email');
			this.$jq.$print = this.$jq.$resume.find('#print');
			this.$jq.$pdf = this.$jq.$resume.find('#pdf');
			this.$jq.$pLinks = this.$jq.$resume.find('#projects li a'); // portfolio links
			
		},
        

		
		/**
		 * Nav object.
		 * Modified: 01/15/2014
		 *
		 * @type {object}
		 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
		 * @public
		 */
		Nav : {

			/**
			 * Nav init method
			 * Modified: 01/15/2014
			 *
			 * @method init
			 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
			 * @public
			 */
			init : function () {
				this.Nav.events.click.call(this);
			},

			/**
			 * Nav events object.
			 * Modified: 01/15/2014
			 *
			 * @type {object}
			 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
			 * @public
			 */
			events : {

				/**
				 * bind click event
				 * Modified: 01/15/2014
				 *
				 * @method click
				 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
				 * @public
				 */
				click : function () {
				
					var $navDiv = $('#resumeNav'),
                        _self = this,
                        $page = $('html, body'),
                        $link;

					$navDiv.find('li a').on("click.sectionAnchor", function (e) {
						$link = $($(this).attr('href'));
						e.preventDefault();
						$page.animate({
							scrollTop : $link.offset().top
						}, 1200);
						return false;
					});

				}
			}
		},

		ActionLinks : {

			/**
			 * init method for actionlinks
			 * Modified: 01/15/2014
			 *
			 * @method init
             * @param {object} _p - Reference to CL.Resume
			 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
			 * @public
			 */
			init : function () {
                
				this.ActionLinks.email.call(this);
				this.ActionLinks.print.call(this);
				this.ActionLinks.pdf.call(this);
				
			},

			/**
			 * populate email link
			 * Modified: 01/15/2014
			 *
			 * @method email
			 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
			 * @public
			 */
			email : function () {
			
				var uri = "mailto:?craig.joseph.lucas@gmail.com";
				
				this.$jq.$email.on("click.email", function (e) {
					w.open(uri);
					e.preventDefault();
				});
			
			},

			/**
			 * window print
			 * Modified: 01/15/2014
			 *
			 * @method print
			 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
			 * @public
			 */
			print : function () {
			
				this.$jq.$print.on("click.print", function (e) {
					w.print();
					e.preventDefault();
				});
			
			},

			/**
			 * populate pdf link
			 * Modified: 01/15/2014
			 *
			 * @method pdf
			 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
			 * @public
			 */
			pdf : function () {
			
				this.$jq.$pdf.on("click.pdf", function (e) {
					w.open("LucasCraigResume.pdf?v2");
					e.preventDefault();
				});
				
			}
		},
        
        Projects : {
        
            /**
             * loads the project
             * Modified: 01/25/2014
             *
             * @method load
             * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
             * @public
             */
            init : function () {

                // vars
                var html;

                // setup tab
                this.Projects.setup();
                
                // load projects
                this.Projects.load.call(this);
                
                // thumbnail binding
                this.Projects.events.init.call(this);

            },
            
            /**
             * setup the "tab" object
             * Modified: 01/25/2014
             *
             * @method setup
             * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
             * @public
             */
            setup : function () {

                this.$modal = $('#projectModal');
                this.$projects = $('#projects');
                this.angTpl = $('#tpl-project').html();
                this.data = {};
            },

            
            load : function () {
                
                var html,
                    _self = this;
                
                $.getJSON('js/portfolio-pages.json', function (data) {                    
                    _self.Projects.data = data.pages;                
                });
                
            },
            
            /**
             * Launch the Slider Modal<br>
             * Modified: 08/29/2013
             *
             * @method modal
             * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
             * @public
             */ 
            modal: function () {                                                                            
                
                this.Projects.$modal.modal('show');
                
            },            
            
            /**
             * events object.
             * Modified: 01/25/2014
             *
             * @type {object}
             * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
             * @public
             */                  
            events: {
                
                /**
                 * init methods <br>
                 * Modified: 08/29/2013
                 *
                 * @method init
                 * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
                 * @public
                 */                    
                init: function() {
                    this.Projects.project.bind.call(this);
                }
                
            },
            
            /**
             * project object.
             * Modified: 01/25/2014
             *
             * @type {object}
             * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
             * @public
             */             
            project: {

                /**
                 * bind methods <br>
                 * Modified: 08/29/2013
                 *
                 * @method bind
                 * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
                 * @public
                 */
                bind: function () {
                    var _self = this;
                    
                    this.Projects.$projects.find('a').on("click.launchProject", function (e) {
                        _self.Projects.project.load.call(_self, e);
                    });
                    
                },
                
                /**
                 * load method <br>
                 * Modified: 08/29/2013
                 *
                 * @method load
                 * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
                 * @public
                 */
                load: function (e) {
                    
                   var html,
                        pageName = e.currentTarget.dataset.pageName,
                       _self = this;
                    
                    $.each(this.Projects.data, function (i, page) {
                        
                        if (pageName === page.name) {
                            
                            // build html    
                           html = _self.Projects.project.html.call(_self, page);
                           
                            // inject into DOM
                            _self.Projects.project.inject.call(_self, html);
                            
                            // show the modal
                            _self.Projects.modal.call(_self );
                        }
                        
                    });
                    
                },
                
                /**
                 * build html for tab
                 * Modified: 01/25/2014
                 *
                 * @method html
                 * @param {object} set - photoset object
                 * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
                 * @public
                 */
                html : function (set) {
    
                    var html;
                                        
                    html = Mustache.to_html(this.Projects.angTpl, set);
                    
                    return html;
    
                },
                
                /**
                 * Inject photoset tab to DOM <br>
                 * Modified: 08/29/2013
                 *
                 * @method inject
                 * @param {string} html - Tab HTML.
                 * @author Craig Joseph Lucas <http://www.linkedin.com/in/craigjosephlucas>
                 * @public
                 */
                inject : function (html) {
                    this.Projects.$modal.empty().append(html);
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
	(window.jQuery, window));