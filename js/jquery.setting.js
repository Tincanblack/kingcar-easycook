// JavaScript Document
$(function() {

/*
//Plugin fitText

$("#fittext").fitText();
$("#fittext2").fitText(1.2);
$("#fittext3").fitText(1.1, { minFontSize: '50px', maxFontSize: '75px' });

//Plugin ColorBox

$(".lightbox a").colorbox();
$(".colorbox").colorbox();
$(".groupColorbox a").colorbox({rel:'group'});
$(".videoShow").colorbox({iframe:true, innerWidth:640, innerHeight:360});
$(".inline").colorbox({inline:true, width:"50%"});

//Plugin jQuery UI Date Picker

var _calendarIco = 'Plugin/UI/img/calendar.png';
$("#datepicker").datepicker({
  showOn: 'both',
  buttonImage: _calendarIco,
  buttonImageOnly: true,
  dateFormat: 'yy-mm-dd',
  minDate : '-0',
  changeYear: true,
  showButtonPanel: true
});
$("#datetimepicker").datetimepicker({
  showOn: 'both',
  buttonImage: _calendarIco,
  buttonImageOnly: true,
  dateFormat: 'yy-mm-dd',
  minDate : '-0',
  changeYear: true,
  showButtonPanel: true
});
$("#timepicker").timepicker({
  showOn: 'both',
  buttonImage: 'images/clock.png',
  buttonImageOnly: true,
  showButtonPanel: true
});
$("#datetimepicker_birthday").datetimepicker({
  showOn: 'both',
  buttonImage: _calendarIco,
  buttonImageOnly: true,
  dateFormat: 'yy-mm-dd',
  maxDate : '+0',
  changeYear: true,
  showButtonPanel: true
});

//Plugin validate Form

$("#contactForm").validate();
$(".numeric").numeric();
$('.upperfont').keyup(function(){
	this.value = this.value.toUpperCase();
});

//Plugin bxSlider

$('.bxslider').bxSlider();
*/
	$('.scrollbars').ClassyScroll();
	
	//$('#main').parallax("center", 0.3);
	
	//scroll animate effects
	$('.aniview').AniView();
	
	/******** 抽獎表單填寫開始 ********/
	//抽獎發票ajax驗證
	$("#cm_receipt_2").focusout(function() {
		var URLs="?";
		var _tmp_receipt_1 = $('#cm_receipt_1').val();
		var _tmp_receipt_2 = $('#cm_receipt_2').val();
		if(_tmp_receipt_1 != '' && _tmp_receipt_2 != '') {
			$.ajax({
			  url: URLs,
			  data: 'cm_receipt_1='+_tmp_receipt_1+'&cm_receipt_2='+_tmp_receipt_2+'&action=ajaxCheck',
			  type: "POST",
			  dataType: 'text',
			  success: function(msg){
				if(msg){
					alert(msg);
					$('#cm_receipt_1,#cm_receipt_2').val('');
					$('#cm_receipt_1').focus();
				}
			  }
			});
		}
	});
	
	//抽獎按鈕送出
	$('#send_btn').on('click',function() {
		if(isNaN($('#cm_receipt_2').val())) {
			alert('發票號碼請填寫數字!');
			$('#cm_receipt_2').focus();
		}  else if(isNaN($('#cm_tel').val())) {
			alert('電話請填寫數字!');
			$('#cm_tel').focus();
		} else {
			//alert('【請注意】送出後表示同意此活動所有相關規則事項！');
			$('#contactForm').attr('action','?action=sendForm').submit();
		}
	});
	/******** 抽獎表單填寫結束 ********/
	
	//Plugin validate Form
	$("#contactForm").validate();
	$(".numeric").numeric();
	$('.upperfont').keyup(function(){
		this.value = this.value.toUpperCase();
	});
	$(".alpha").alpha();
	$('#cm_receipt_1').keyup(function(){
		if(this.value.length >= $(this).attr('maxlength'))
		 {
			 $('#cm_receipt_2').focus();
		 }
	});

});

// 當網頁載入完
$(window).load(function(){
	var $win = $(window),
		$ad = $('#floatBox').css('opacity', 0).show(),	// 讓廣告區塊變透明且顯示出來
		_width = $ad.width(),
		_height = $ad.height(),
		_diffY = 120, _diffX = 20,	// 距離右及上方邊距
		_moveSpeed = 800;	// 移動的速度
	
	// 先把 #abgne_float_ad 移動到定點
	$ad.css({
		top: _diffY,	// 往上
		left: $win.width() - _width - _diffX,
		opacity: 1
	});
	
	// 幫網頁加上 scroll 及 resize 事件
	$win.bind('scroll resize', function(){
		var $this = $(this);
		
		// 控制 #abgne_float_ad 的移動
		$ad.stop().animate({
			top: $this.scrollTop() + _diffY,	// 往上
			left: $this.scrollLeft() + $this.width() - _width - _diffX
		}, _moveSpeed);
	}).scroll();	// 觸發一次 scroll()
	
});