$( function() {

  // changer la couleur de typo sur l'onglet actif de recette et conseil
  $('.tabDietetique').click(function() {
    $('.tabDietetique').removeClass('activeLien');
    $(this).addClass('activeLien');
  });
  // changement d'onglet recette-conseil lors du choix sur la page home

  /*$('.required-icon').tooltip({
    placement: 'left',
    title: 'Required field'
  });*/
});
