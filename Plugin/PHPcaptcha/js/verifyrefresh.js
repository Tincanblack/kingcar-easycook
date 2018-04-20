// JavaScript Document
$(function() {
	$('#verifyImgCode').click(function() {
		$(this).attr('src','Plugin/PHPcaptcha/varyimg.php?' + Math.random());
	});
});