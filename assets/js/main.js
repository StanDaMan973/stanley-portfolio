(function ($) {
	"use strict";

	$(document).on('ready', function () {


		/* ==================================================
            # Bootstrap Tooltip Scroll
         =============================================== */
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		});


		/* ==================================================
			# Portfolio Menu
		 =============================================== */
		$('#portfolio').mixItUp({
			selectors: {
				target: '.tile',
				filter: '.filter',
				sort: '.sort-btn'
			},

			animation: {
				animateResizeContainer: false,
				effects: 'fade scale'
			}

		});


		/* ==================================================
			# Data Background
		 ===============================================*/

		$("[data-background]").each(function () {
			$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
		});

		/* ==================================================
			# Parallax Background
		 ===============================================*/





		/* ==================================================
			# Smooth Scroll
		 =============================================== */

		$('a.smooth-menu').on('click', function (event) {
			var $anchor = $(this);
			var headerH = '85';
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		/* ==================================================
			# imagesLoaded active
		===============================================*/
		$('#portfolio-grid,.blog-masonry').imagesLoaded(function () {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
			$('.mix-item-menu button').on('click', function (event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#portfolio-grid').isotope({
				itemSelector: '.pf-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.pf-item',
				}
			});

			/* Filter active */
			$('.blog-masonry').isotope({
				itemSelector: '.blog-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.blog-item',
				}
			});

		});



		/* ==================================================
			Preloader Init
		 ===============================================*/

		$(window).on('load', function () {
			// Animate loader off screen
			$(".se-pre-con").fadeOut("slow");
		});



		/* ==================================================
		# Menu
		===============================================*/


		$('.menu-tab').click(function () {
			$('.menu-hide').toggleClass('show');
			$('.menu-tab').toggleClass('active');
		});
		$('.menu-hide-link').click(function () {
			$('.menu-hide').removeClass('show');
			$('.menu-tab').removeClass('active');
		});


		/* ==================================================
			# Scroll to top
		 =============================================== */
		//Get the button
		var mybutton = document.getElementById("scrtop");

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function () {
			scrollFunction()
		};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.display = "block";
			} else {
				mybutton.style.display = "none";
			}
		}
		//Active Class Function

	}); // end document ready function
})(jQuery); // End jQuery