$( document ).ready(function() {

// smoth scroll 
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// team toggle
$('.nav-icon a').click(function(){
  $('nav').slideToggle();
});

$('#team-toggler').click(function(){
 $('#full-team').slideToggle();
});

// Team section

$.getJSON("js/team.json",function(teamMembers){
  $.each(teamMembers, function(key,val){
    console.log(key);
    console.log(val);
  })
});

// mail service

$("#contact-form").submit(function(e) {
  e.preventDefault();

  var mailModel = {
    Name : $("#contact-name").val(),
    Email : $("#contact-email").val(),
    ProjectName : $("#contact-project").val(),
    Message : $("#contact-message").val()
  };

  $("#contact-form").hide();
  $("#sending-message").show();
  $.ajax({
    type : "POST",
    url : "http://emailer-3.apphb.com/Mail",
    data : mailModel,
    success : function(msg) {
      $("#sending-message").hide();
      $("#success-message").show();
    },
    error : function(error) {      
      $("#sending-message").hide();
      $("#contact-form").show();
    }
  });
  $("#client-name").val("");
  $("#client-email").val("");
  $("#client-project").val("");
  $("#client-message").val("");
  return false;
}); 

});

