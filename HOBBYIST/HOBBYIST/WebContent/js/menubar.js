/**
 * 
 * 
 */

$(function() {
	// 사이드바 토글 기능
	$('[data-app-dashboard-toggle-shrink]').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
	});
});
