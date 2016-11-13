$(function() {


	$('.reserve-mnu>ul>li').click(function(){
		$('.reserve-mnu').hide()
	})

	$('.toggle-mnu').click(function(){
		$('.reserve-mnu').slideToggle();
		return false;
	});

	
	
	$('.open-popup-link').magnificPopup({
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
  		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

});

