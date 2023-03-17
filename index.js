$(document).ready(function(){
    $('.banner').slick({
        
        // autoplay:true,
        autoplaySpeed:2000,
    });

    $("#mob_bar_icon").click(function () {
        $(".mobile_menudiv").slideToggle();
      });

      $("#women").click(function () {
        $(".dropdown1").slideToggle();
        $(".dropdown2,.dropdown3,.dropdown4").hide();
      });
      $("#men").click(function () {
        $(".dropdown2").slideToggle();
        $(".dropdown1,.dropdown3,.dropdown4").hide();
      });
      $("#dress").click(function () {
        $(".dropdown3").slideToggle();
        $(".dropdown1,.dropdown2,.dropdown4").hide();
      });
      $("#accessories").click(function () {
        $(".dropdown4").slideToggle();
        $(".dropdown1,.dropdown2,.dropdown3").hide();
      });
      $("#women_mobile").click(function () {
        $(".women_mob_dropdown").slideToggle();
        $(".men_mob_dropdown,.dress_mob_dropdown,.accessories_mob_dropdown").hide();
      });
      $("#men_mobile").click(function () {
        $(".men_mob_dropdown").slideToggle();
        $(".women_mob_dropdown,.dress_mob_dropdown,.accessories_mob_dropdown").hide();
      });
      $("#dress_mobile").click(function () {
        $(".dress_mob_dropdown").slideToggle();
        $(".men_mob_dropdown,.accessories_mob_dropdown,.accesories_mob_dropdown").hide();
      });
      $("#accesories_mobile").click(function () {
        $(".accessories_mob_dropdown").slideToggle();
        $(".women_mob_dropdown,.men_mob_dropdown,.dress_mob_dropdown").hide();
      });
      
  });