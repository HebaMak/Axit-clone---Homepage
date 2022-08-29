
$(function(){
  'use strict';

// make the nav bar transparent while scrolling
  $(window).scroll(function(){

    var navbar = $('.navbar');
  $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
  });


// deal with tabs
$('.tab-switch li').click(function () {

  //add class selected to the active link
  $(this).addClass('selected').siblings().removeClass('selected');

  //hide the data class (all divs)
  $('.tabs-section .tabs-content > div').hide();

  //show the data class (div connected with the link)
  $($(this).data('class')).show();
});



});
