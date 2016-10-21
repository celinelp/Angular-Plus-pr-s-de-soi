$( function() {
        /* dietetique - animation de conseil et recette*/
    	$('#recette a').click(function (e) {
    		e.preventDefault()
    		$(this).tab('show')
    	});
    	$('#conseil a').click(function (e) {
    		e.preventDefault()
    		$(this).tab('show')
    	});
    });
