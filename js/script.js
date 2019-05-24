$('.page-scroll').on('click', function (e) {

  //ambil isi ref
  var tujuan = $(this).attr('href');
  // tangkap elemen bersangkutan
  var elemenTujuan = $(tujuan);

  //pindahkan scroll
  $('html,body').animate({
    scrollTop: elemenTujuan.offset().top - 55
  }, 1250, 'easeInOutExpo');

  e.preventDefault();

});


// paralax

//about
$(window).on('load', function () {
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //jumbotron
  $('.jumbotron img').css({
    'transform': 'translate(0px, ' + wScroll / 4 + '%)'
  });

  $('.jumbotron h1').css({
    'transform': 'translate(0px, ' + wScroll / 2 + '%)'
  });

  $('.jumbotron p').css({
    'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
  });

  //projects
  if (wScroll > $('.projects').offset().top - 250) {
    $('.projects .img-thumbnail').each(function (i) {
      setTimeout(function () {
        $('.projects .img-thumbnail').eq(i).addClass('muncul');
      }, 300 * (i + 1))
    });
  }
});