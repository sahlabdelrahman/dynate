$(document).ready(function(){
    
    // Collapsible initialization
    $('.collapsible').collapsible();
    
    // sidenav initialization
    $('.sidenav').sidenav();

    // scrollspy initialization
    $('.scrollspy').scrollSpy();

    // modal initialization
    $('.modal').modal();

    /* // Play Video
    $('.play-button').click(function(){this.paused?this.play():this.pause();}); */

    // Loading screen
    $(window).on('load', function () {
        "use strict";
        $(".background").fadeOut(1000);
        $(".share").fadeIn(1000);
    });

    // Start popup main video

    $(window).on('load',function(){
        $('#popup_main_video').modal('open');
    });

    $('.follow_up').click(function (){
        $('#popup_main_video').modal('close');
    });


    // Scroll Button

    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });

    // Click On Button To Scroll Top
     
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });

    // prevent reload when click on send button in popup share
    $(".send-data").on('click', function(event){
        event.preventDefault();
      });

    // close popup share 
    $('.close_share').click(function() {
        $('#popup_share').modal('close');
    });

    // switch to popup share from any popup
    $('.share').click(function() {
        $('#popup_main_video').modal('close');
        $('#popup_share').modal('open');
    });
});