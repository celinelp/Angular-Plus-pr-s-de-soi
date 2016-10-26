(function(){
  var app = angular.module('plusPresDeSoi', ["ngRoute"], function($locationProvider){
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
  }]);

  app.controller('imageHeader', function($location){
    this.url = $location.path();
    this.page = "pg-home";
    this.texte1 = "Comment je m'aime ?";
    this.texte2 = "Comment je mange ?";

    this.changeImg = function (url){
      switch (url) {
        case "/":
            $location.path('');
            this.page = "pg-home";
            this.texte1 = "Comment je m'aime ?";
            this.texte2 = "Comment je mange ?";
            break;
        case "/dietetique":
            $location.path('dietetique');
            this.page = "pg-dietetique";
            this.texte1 = "";
            this.texte2 = "";
            break;
        case "/magnetisme":
            $location.path('magnetisme');
            this.page = "pg-magnetisme";
            this.texte1 = "";
            this.texte2 = "";
            break;
        case "/atelier":
            $location.path('atelier');
            this.page = "pg-atelier";
            this.texte1 = "";
            this.texte2 = "";
            break;
        case "/apropos":
            $location.path('apropos');
            this.page = "pg-apropos";
            this.texte1 = "Qui suis-je ?";
            this.texte2 = "";
            break;
        case "/contact":
            $location.path('contact');
            this.page = "pg-contact";
            this.texte1 = "";
            this.texte2 = "";
            break;
        case "/mention":
            $location.path('mention');
            this.page = "pg-apropos";
            this.texte1 = "";
            this.texte2 = "";
            break;
        default:
            $location.path('');
            this.page = "pg-home";
            this.texte1 = "Comment je m'aime ?";
            this.texte2 = "Comment je mange ?";
      };
    }

  });

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

/*_____________________ HOME _____________________*/
app.controller('HomeController', function(){
  this.HomeVueCtrlData = HomeBackCtrldata;
});

var HomeBackCtrldata = [
  {
    txtBgVert: '"On ne voit bien qu’avec le coeur,l’essentiel est invisible pour les yeux " ST Exupéry, extrait Le Petit Prince.',
    txtBgMarron: "Le magnétisme, comme jadis l'électricité ou la lumière, fait partie de ces énergies mystérieuses, dont on observe les effets sans en connaître les causes."
  }
];

/*____________________ CONTACT ____________________*/
app.controller('ContactController', function(){
  this.ContactVueCtrlData = ContactBackCtrldata;
});

var ContactBackCtrldata = [
  {
    adresse_1: "34 rue de la tannerie 28000 Chartres" ,
    adresse_2: "4 Rue du Préau 28300 Berchères-Saint-Germain",
    ficheContactName: " Guillet Mélina",
    ficheContactNum: " 06.72.31.97.12",
    ficheContactMail: " melinaguillet26@gmail.com"
  }
];
/*____________________ _______ ____________________*/

})();
