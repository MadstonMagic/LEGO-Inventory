$(document).ready( function() {
	
	/* =========================== */
	/*= Disable Accidental CTRL+A =*/
	/* =========================== */	
	document.body.addEventListener('keydown', event => {
		if (event.ctrlKey && 'asp'.indexOf(event.key) !== -1) {
			event.preventDefault();
		}
	});
	//-----------------------------------------------------------------------------------
		
	
	/* ================================ */
	/* ======= Terms & Services ======= */
	/* ================================ */
	
	
	
	//-----------------------------------------------------------------------------------
		
	
	/* ======================== */
	/* ======= Subpages ======= */
	/* ======================== */		
	
	// Pictures on the sub-pages
	$('.content-img').on('click', function() {
		var source = $(this).attr('src');
		$('.next').hide();
		
		$('#imgLarge img').attr('src', source);
		$('#imgLarge').addClass('visible');
		$('#imgLarge').removeClass('hidden');
		
		$('#imgLarge').fadeIn(300);
		
		
		$('#imgLarge .background').on('click', function (){
			closeImg();			
		});
		
		$('#imgLarge .exit').on('click', function() {
			closeImg();
		});
		
		function closeImg() {
			$('#imgLarge').removeClass('visible');
			$('#imgLarge').addClass('hidden');
			$('#imgLarge').fadeOut(300);			
		}
	});	
	//-----------------------------------------------------------------------------------
	
	
	/* ========================= */
	/* ===== To Top Button ===== */
	/* ========================= */	
	$('.toTopWrapper').css("display","none");
	$('.toTopWrapper i').on('click', function() {
		window.scrollTo(0,0);	
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 800) {
			$('.toTopWrapper').fadeIn(200);
		} else {
			$('.toTopWrapper').fadeOut(200);
		}
	});
	//-----------------------------------------------------------------------------------
	
	
	/* ======================= */
	/* ===== Sticky Menu ===== */
	/* ======================= */	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 400) {
			$('.stickyMenuWrapper').addClass("visible");
		} else if(y < 400) {
			$('.stickyMenuWrapper').removeClass("visible");
		}
	});	
	//-----------------------------------------------------------------------------------
	
	
	
	/* ==================== */
	/* ===== Contents ===== */
	/* ==================== */
	$('.contents-click').on('click', function() {
		$(this).find('ul').toggleClass('visibleContents');
	});
	
	
	
	
	
	$(function () {
		count = 0;
		textArray = [
			'LEGO&#174; Star Wars',
			'LEGO&#174; Harry Potter',
			'LEGO&#174; Power Miners',
			'LEGO&#174; Marvel &amp; DC',
			'LEGO&#174; Collectable Minifigures',
			'LEGO&#174; Loose parts'
		];
		
		setInterval(function () {
			count++;
			$(".header .slider_text").fadeOut(300, function () {
				$(this).html(textArray[count % textArray.length]).fadeIn(300);
			});
		}, 4000);
	});	
	//-----------------------------------------------------------------------------------
	
	
	
	/* ========================== */
	/* ===== Hamburger Menu ===== */
	/* ========================== */
	$('.mobile-menu-button .button').on('click', function(event) {
		if ($(window).width() < 1065) {
			$('.menuWrapper .menu .menuList').addClass('mobileMenuVisible');
		}		
	});
	
	$('.menuWrapper .menu .menuList .close, .menuWrapper .menu .menuList li, .menuWrapper .menu .menuList a').click(function(event) {
		if ($(window).width() < 1065) {
			$('.menuList.mobileMenuVisible').removeClass('mobileMenuVisible');
		}
	});
	//------------------------------------------------------------------------------------
	
})
