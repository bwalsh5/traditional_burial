$(document).ready(function(){

$('#wrapper').click(function() {
  hidePopupOne();
})

  $('html, body').animate({ scrollLeft : 0 },200);

    //Init scrollmagic
    var controller = new ScrollMagic.Controller();
    // pin the intro
    var pinBodyScene = new ScrollMagic.Scene({
      triggerElement: '#fade',
      triggerHook: 0.4,
      duration: 4950
    })
    .setPin('#fade', {pushFollowers: false})
    .addTo(controller);
    var pinCoffinBackScene = new ScrollMagic.Scene({
      triggerElement: '#coffinBack',
      triggerHook: 0.36,
      duration: 3358
    })
    .setPin('#coffinBack', {pushFollowers: false})
    .addTo(controller);
    var pinCoffinFrontScene = new ScrollMagic.Scene({
      triggerElement: '#coffinFront',
      triggerHook: 0.36,
      duration: 3358
    })
    .setPin('#coffinFront', {pushFollowers: false})
    .addTo(controller);
    var pinVaultInnerScene = new ScrollMagic.Scene({
      triggerElement: '#vaultInner',
      triggerHook: .4,
      duration: 1620
      // offset: 450
    })
    //     .setClassToggle('#vaultOuter', 'zFix') // add class
    .setPin('#vaultInner', {pushFollowers: false})
    .addTo(controller);
    var pinVaultOuterScene = new ScrollMagic.Scene({
      triggerElement: '#vaultOuter',
      triggerHook: .45 ,
      duration: 1620
      // offset: 450
    })
    //     .setClassToggle('#vaultOuter', 'zFix') // add class
    .setPin('#vaultOuter', {pushFollowers: false})
    .addTo(controller);
    var pinGraveyardTopScene = new ScrollMagic.Scene({
      triggerElement: '#grassTop',
      triggerHook: .27,
      duration: 520
    })
    .setPin('#grassTop', {pushFollowers: false})
    .addTo(controller);
    var pinGraveyardTopScene2 = new ScrollMagic.Scene({
      triggerElement: '#grassBottom',
      triggerHook: .39,
      duration: 520
    })
    .setPin('#grassBottom', {pushFollowers: true})
    .addTo(controller);

// end ScrollMagic

function fadeInArrow() {

    $(".downer").css("visibility", "visible");
  }

  setTimeout(function(){fadeInArrow()}, 6000);

  var curtainActive = false;

  function showPopupOne() {
    $(".video-curtain").css("display", "block");
    $(".video-curtain").css("z-index", "9999");
    $(".video-curtain").animate({opacity: "1.0"});
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
    $("#wrapper").css("position","static");
    $("#wrapper").css("overflow","hidden");
    curtainActive = true;
    $(".close-button").css("display", "block");
  }

  $('.video-trigger').click(function(){
    setTimeout(function(){showPopupOne()}, 500);
  });

  function hidePopupOne() {
    // vid1.pause();
         $(".video-curtain").css("display", "none");
    $(".video-curtain").css("z-index", "1");

    $(".video-curtain").css("opacity", "0");
    //       $(".video-curtain").css("visibility", "none");
    // $("#firstButton").css("visibility", "none");
    //         $("#wrapper").css("opacity", "1.0");
    $("#wrapper").css("position","static");
    $("#wrapper").css("overflow","auto");
    window.onscroll=function(){};
    curtainActive = false;
    $(".close-button").css("display", "none");
  }

  $('.close-button').click(function(){
    hidePopupOne();
  });


  var p1 = [

    "<p>" + "Embalming is the process of removing the blood and viscera from a body and replacing it with a preservative, for the purposes of a viewing. Embalming is not required by law. It does not 'sanitize' the body, or prevent communicable diseases. It does not make the body appear more 'life-like.' It is not required for an open casket viewing. The only things that require embalming are:" + "</p>" + "<ul>" +
    "<li>" + "Transporting a body across state or international lines" + "</li>" + "<li>" + "Hiring a Funeral Director that does not have access to a refridgeration unit" + "</li>" + "<li>" + "Burial in a traditional cemetery." + "</li>" + "</ul>" + "<p>" +  "<iframe class='ytplayer' id='tradVid1' type='text/html' width='420' height='236' src='https://www.youtube.com/embed/K5-XDKgHnNM?autoplay=1'frameborder='0' loading='lazy' allowfullscreen='1'></iframe>" + "Generations had grown to accept this 'traditional' approach to interment, but more recently, people have sought out alternatives. One thing that makes American death unique is the variety of options available to us outside of this traditional approach." + "</p>",

    "<p style='clear: both;'>" + "Caskets are made of hardwood or metal, which is odd since they are simply being placed in the ground." + "</p>" +"<p>" + "They can also be 'hermetically sealed,' preventing any exterior influence on decomposition. While this sounds like it would prevent the body from rotting, the opposite is true: the air vacuum created promotes anaerobic bacteria, which decompose the body rapidly, often liquefying the remains into a soup." + "</p>" + "<p>" + "No amount of embalming or casket sealing will prevent decomposition, which is inevitable." + "</p>",

    "<p>" + "Vaults or grave liners are required by traditional cemeteries to prevent the ground from sinking after burial. They are traditionally made of cement. A vault is lined and sealed, protecting from weather, unlike a grave liner - but neither prevents decomposition." + "</p>" + "<p>" + "Put another way, coffin vaults keep the cemetery lawn flat. They serve no purpose for the interred body." + "</p>",
    "<p>" + "A traditional cemetery requires constant maintenance, which you may financially responsible for." + "</p>"+ "<p>" + "There are usually strict rules on placards and markers." + "</p>" + "<p>" + "It should also be noted that space in traditional cemeteries is running out; only New Orleans 'recycles' family plots in America." + "</p>" + "<p>" + "From roughly 1880-1920, graveyards quickly filled up, land became a more precious resource, and cemeteries were gradually moved out of cities  and into more bucolic settings, with designs based on English gardens." + "</p>" + "<p>" + "As death left town, it left our consciousness as well. As cemeteries were beautified in order to lessen the impact and awareness of death, the corpse was simultaneously beautified to remove all traces of being deceased." + "</p>" + "<p>" + "The cost of an American funeral during this time increased 250%. And as the body ceased to be washed at home and placed in the parlour, the space was adapted for a more modern use: the living room." + "</p>"
  ];

  var linkOne = "embalming";
  linkOne.link ="https://www.google.com";

  var p3 = [
    'To learn more about the embalming process, visit the ' + linkOne  + ' page.',
    'test3b',
    'test3c'
  ]

  var titles = [
    "<p>" + "In a traditional burial, you are first " + "<strong>" + "embalmed" + "</strong>" + "," + "</p>",

    "<p>" + "...then put in an " + "<strong>" + "airtight casket" + "</strong>" + "," + "</p>",

    "<p>" + "which is placed inside a " + "<strong>" + "concrete vault" + "</strong>" + "," + "</p>",

    "<p>" + "then buried in a cemetery or graveyard." + "</p>"

      // 'Traditional burial is ubiquitous in America. But many cemeteries are filling up, especially in or near large cities. Only New Orleans recycles their tombs.'


  ];
  $('#embalmed p').html(titles[0]);
  $('.popupnote p').html(p1[0]);
  $('.video-curtain').css("height", "60vh");
  //    $('.footnote .p1').text(p1[0]);
  //        $('.footnote .p2').text(p2[0]);
  //        $('.footnote .p3').text(p3[0]);


  $(window).scroll(function(){
    var pos = $(this).scrollTop();

    if( pos < 899) {
      $('#embalmed p').html(titles[0]);
      $('.popupnote p').html(p1[0]);
        $('.video-curtain').css("height", "60vh");
    }

    if(pos > 900) {
      $('#embalmed p').html(titles[1]);
      $('.popupnote p').html(p1[1]);
        $('.video-curtain').css("height", "30vh");
  }

    if(pos < 2399 & pos > 900) {
      $('#embalmed p').html(titles[1]);
      $('.popupnote p').html(p1[1]);
        $('.video-curtain').css("height", "30vh");
 $(".video-curtain").scrollTop(800);

      }
    if(pos > 2400) {
      $('#embalmed p').html(titles[2]);
$('.popupnote p').html(p1[2]);
        $('.video-curtain').css("height", "30vh");
      }
    if(pos < 3599) {
      $('#embalmed').css('background', 'rgba(96, 15, 15, 0.11)');
      $('#embalmed').css('color', 'rgba(0,0,0,1.0)');

      }
    if(pos > 3600) {
      $('#embalmed p').html(titles[3]);
      $('.popupnote p').html(p1[3]);
        $('.video-curtain').css("height", "30vh");
      $('#embalmed').css('background', 'rgba(255,255,255,0.6)');
      $('#embalmed').css('color', 'rgba(0,0,0,1.0)');

      }
    if(pos < 4399) {
      $('#embalmed').css('opacity', '1');
    }

    if(pos > 4400) {

$('#embalmed').css('opacity', '0');
    }

    if(pos > 4700) {

    }

  });

  //  detect chrome

  var isChromium = window.chrome,
  winNav = window.navigator,
  vendorName = winNav.vendor,
  isOpera = winNav.userAgent.indexOf("OPR") > -1,
  isIEedge = winNav.userAgent.indexOf("Edge") > -1,
  isIOSChrome = winNav.userAgent.match("CriOS");

  if(isIOSChrome){
    // is Google Chrome on IOS
  } else if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
    //    alert("is chrome");
    // is Google Chrome
  } else {
    alert("This site requires use of Google Chrome.");
  }




  $("#scrollBtnOne").delay(3200).fadeIn();



  $('body').delay(3200).css("overflow", "auto");


  setTimeout(function(){$('body').css('position', 'static'); }, 6400)


});
