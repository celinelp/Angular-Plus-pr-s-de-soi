(function(){
  var app = angular.module('plusPresDeSoi', ["ngRoute"], function($locationProvider){
    $locationProvider.html5Mode(true);
  });

  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl : 'partials/home/home.html'
    })
    .when('/apropos',{
      templateUrl : 'partials/apropos/apropos.html'
    })
    .when('/atelier',{
      templateUrl : 'partials/atelier/atelier.html'
    })
    .when('/contact',{
      templateUrl : 'partials/contact/contact.html'
    })
    .when('/dietetique',{
      templateUrl : 'partials/dietetique/dietetique.html'
    })
    .when('/magnetisme',{
      templateUrl : 'partials/magnetisme/magnetisme.html'
    })
    .when('/mention',{
      templateUrl : 'partials/mention/mention.html'
    })
  }
]);

  app.directive('header',function(){
    return{
      restrict : 'A',
      templateUrl : 'partials/common/header.html'
    }
  });

  app.directive('footer',function(){
    return{
      restrict : 'A',
      templateUrl : 'partials/common/footer.html'
    }
  });
  /* home */
  app.directive('animation',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/home/animation.html'
    }
  });
  app.directive('lienAssos',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/home/lienAssos.html'
    }
  });
  app.directive('news',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/home/news.html'
    }
  });
  /* apropos */
  app.directive('bio',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/apropos/bio.html'
    }
  });
  app.directive('formation',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/apropos/formation.html'
    }
  });
  app.directive('presse',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/apropos/presse.html'
    }
  });
  app.directive('temoignage',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/apropos/temoignage.html'
    }
  });
  /* atelier */
  app.directive('listeAtelier',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/atelier/listeAtelier.html'
    }
  });
  /* contact */
  app.directive('formulaire',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/contact/formulaire.html'
    }
  });
  app.directive('map',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/contact/map.html'
    }
  });
  /* dietetique */
  app.directive('descriptifDiet',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/dietetique/descriptifDiet.html'
    }
  });
  app.directive('recetteConseil',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/dietetique/recetteConseil.html'
    }
  });
  /* magnetisme */
  app.directive('descriptifMagnet',function(){
    return{
      restrict : 'E',
      templateUrl : 'partials/magnetisme/descriptifMagnet.html'
    }
  });

    /*var data = [
      {
        apropos :
        bio : [
          bioTexte : "",
          bioImage :
        ],
        formation : [

        ],
        presse : [

        ],
        temoignage : [

        ]
      },
      {},
      {}
    ];*/

})();
