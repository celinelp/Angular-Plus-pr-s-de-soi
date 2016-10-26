( function() {
        /* dietetique - animation de conseil et recette*/
    	$('#recette a').click(function (e) {
    		e.preventDefault()
    		$(this).tab('show')
    	});
    	$('#conseil a').click(function (e) {
    		e.preventDefault()
    		$(this).tab('show')
    	});
      // changer la couleur de typo sur l'onglet actif de recette et conseil
      $('.tabDietetique').click(function() {
          $('.tabDietetique').removeClass('activeLien');
          $(this).addClass('activeLien');
      });
      /*// changement de la classe active des onglets recette et conseil lors des choix de la page home
      $('#boutonHomeConseil').click(function() {
          $('#recette').removeClass('active');
          $('#conseil').addClass('active');
      });
      $('.required-icon').tooltip({
          placement: 'left',
          title: 'Required field'
      });*/
    });
