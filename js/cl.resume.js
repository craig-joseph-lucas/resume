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
			this.ActionLinks.init(this);

			// initialize nav
			this.Nav.init();
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
		
			this.settings = {
				linkedIn : "http://www.linkedin.com/in/craigjosephlucas",
				email : 'craig.joseph.lucas@gmail.com'
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
				this.events.click();
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
			init : function (_p) {
			
				this.email.call(_p);
				this.print.call(_p);
				this.pdf.call(_p);
				this.portfolioLinks.init(_p);
				
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
					w.open(uri)
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
					w.open("LucasCraigResume.pdf");
					e.preventDefault();
				});
				
			},

			portfolioLinks : {
			
				/**
				 * init method for portfolioLinks
				 * Modified: 01/15/2014
				 *
				 * @method init
				 * @param {object} _p - Reference to CL.Resume
				 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
				 * @public
				 */
				init : function (_p) {
				
					var _s = this, // reference to this
					$link, // link data
					pageName;

					this.$modal = $('#resumeModal');

					_p.$jq.$pLinks.on("click.portfolioLinks", function (e) {
						e.preventDefault();
						$link = $(this);
						pageName = $link.data('pageName');
						_s.load(pageName);
					});
					
				},

				/**
				 * load event for portfolio links
				 * Modified: 01/15/2014
				 *
				 * @method load
				 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
				 * @public
				 */
				load : function (pageName) {

					var request = 'js/portfolio-pages.json',
					_self = this,
					html,
					$modal = $('#resumeModal');

					$.getJSON(request, function (data) {
						$.each(data.pages, function (i, link) {
							
							// active link
							if (pageName === link.name) {
								
								// build the html for the portfolio link modal
								html = _self.html(link);
								
								// append html to modal
								_self.$modal.find('.modal-body').html(html)
									
								// show the portfolio link modal
								_self.show();
								
							}
						});
					});
					
				},

				/**
				 * html for portfolio link
				 * Modified: 01/15/2014
				 *
				 * @method html
				 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
				 * @public
				 */
				html : function (link) {
				
					var html; 

					// lets add the portfolio link html to modal
					html = link.descriptionHtml;

					// return link html
					return html;

				},			
	
				/**
				 * show portfolio link modal
				 * Modified: 01/15/2014
				 *
				 * @method show
				 * @author Craig Lucas <http://www.linkedin.com/in/craigjosephlucas>
				 * @public
				 */
				show : function () {		
				
					// show modal
					this.$modal.modal('show');

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