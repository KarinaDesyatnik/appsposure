
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.top-header').addClass("sticky");
}
else{
$('.top-header').removeClass("sticky");
}
});


$('.btn_menu').click(function(){
		$('.menu ul').toggleClass('active');
		$('.btn_menu').toggleClass('active');
    $('.top-header').toggleClass('active');
	})

// ------ start popup init---
 $('.popup-with-video').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: '#name',
  callbacks: {
   beforeOpen: function() {
    if($(window).width() < 700) {
     this.st.focus = false;
   } else {
     this.st.focus = '#name';
   }
 }
}
});
 // ------ end popup init---
