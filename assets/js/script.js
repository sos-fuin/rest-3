// dropdown

document.addEventListener('DOMContentLoaded', function () {
	const menuContainer = document.querySelector('#mobile-menus');
	const menuItems = menuContainer.querySelectorAll('.item');

	menuItems.forEach((item) => {
		item.addEventListener('click', function (event) {
			const subMenu = this.nextElementSibling;
			const icon = this.querySelector('.ru-ic');

			if (subMenu && subMenu.classList.contains('sub-menu')) {
				event.preventDefault();

				// Close other open submenus
				document.querySelectorAll('.sub-menu').forEach((menu) => {
					if (menu !== subMenu) {
						menu.style.maxHeight = null;
						menu.previousElementSibling
							.querySelector('.ru-ic')
							.classList.remove('rotated');
					}
				});

				// Toggle the clicked submenu
				if (subMenu.style.maxHeight) {
					subMenu.style.maxHeight = null;
					icon.classList.remove('rotated');
				} else {
					subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
					icon.classList.add('rotated');
				}
			}
		});
	});
});

// dropdown end

window.addEventListener('scroll', function () {
	var scrolling = $(this).scrollTop();
	var logo = document.getElementById('logo');
	const ruHeader = document.getElementById('ru-header');

	if (scrolling > 200) {
		ruHeader.classList.add('sticky');
		// if (!ruHeader.classList.contains('white')) {
		// 	logo.src = './assets/img/logo/logo-dark.png';
		// }
	} else {
		ruHeader.classList.remove('sticky');
		// if (!ruHeader.classList.contains('white')) {
		// 	logo.src = './assets/img/logo/logo-white.png';
		// }
	}
});

var swiper = new Swiper('.mySwiper-home1', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
var swiper = new Swiper('.mySwiper-testimonial', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var swiper = new Swiper('.mySwiper', {});

// video play
document.addEventListener('DOMContentLoaded', function () {
	var video = document.getElementById('my-video');
	var playButton = document.getElementById('play-button');
	if (video && playButton) {
		playButton.addEventListener('click', function () {
			if (video.paused) {
				video.play();
				video.classList.add('playing');
			}
		});

		video.addEventListener('click', function () {
			if (!video.paused) {
				video.pause();
				video.classList.remove('playing');
			}
		});

		video.addEventListener('play', function () {
			playButton.style.display = 'none';
		});

		video.addEventListener('pause', function () {
			playButton.style.display = 'block';
		});
	}
});

// increment decrement input
$(document).ready(function () {
	$('.v-cart-increment').click(function () {
		var $input = $(this).siblings('.v-cart-input');
		var value = parseInt($input.val(), 10);
		if (!isNaN(value)) {
			$input.val(value + 1);
		}
	});

	$('.v-cart-decrement').click(function () {
		var $input = $(this).siblings('.v-cart-input');
		var value = parseInt($input.val(), 10);
		if (!isNaN(value) && value > 1) {
			$input.val(value - 1);
		}
	});

	$('.v-cart-input').on('input', function () {
		var $input = $(this);
		var value = parseInt($input.val(), 10);
		if (isNaN(value) || value < 1) {
			$input.val(1);
		}
	});
});
