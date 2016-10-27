  (function(){
    var app = angular.module('plusPresDeSoi', ["ngRoute"], function($locationProvider){
    });

    app.config(['$routeProvider',function($routeProvider){
      $routeProvider
      .when('/',{
        templateUrl : 'partials/home/home.html',
        controller : 'imageHeader'
      })
      .when('/apropos',{
        templateUrl : 'partials/apropos/apropos.html',
        controller : 'imageHeader'
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

    app.controller('imageHeader', function($location){
      this.url = location.path;
      this.page = null;
      this.texte = null;
      switch (this.url) {
        case "/":
            this.page = "pg-home";
            this.texte = "<h1>Comment je m'aime ?</h1><h1 id=\"decalagePhraseAccroche\">Comment je mange ?</h1>";
          break;
            case "/dietetique":
                this.page = "pg-dietetique";
              break;
              case "/magnetisme":
                  this.page = "pg-magnetisme";
                break;
                case "/apropos":
                    this.page = "pg-apropos";
                    this.texte = "<h1>Qui suis-je ?</h1>";
                  break;
                  case "/contact":
                      this.page = "pg-contact";
                    break;

        default:
          this.page = "pg-home";
      }
    });

    app.controller('atelierCtrl', function($scope){
       $scope.presentation = objet;
       this.choiceElement = function(element){
          $scope.elementModal = element;
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

    var objet = [
   {
     	numeroAtelier : 'Atelier N° 1',
     	titreAtelier : 'Alimentation équilibrée: ça veut dire quoi?',
     	detailAtelier : 'Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>'
     },
   {
      	numeroAtelier : 'Atelier N° 2',
      	titreAtelier : 'Pourquoi on mange? Croyances et représentations',
      	titreDetail : 'Pourquoi on mange? Croyances et représentations',
      	detailAtelier : 'Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>'
     },
  {
       numeroAtelier : 'Atelier N° 3',
       titreAtelier : 'Comment s\'organiser? <br>Les menus...',
       titreDetail : 'Comment s\'organiser? <br>Les menus...',
       detailAtelier : 'Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>'
     },
  {
       numeroAtelier : 'Atelier N° 4',
       titreAtelier : 'La lecture des étiquettes',
       titreDetail : 'La lecture des étiquettes',
       detailAtelier : 'Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>'
     },
  {
       numeroAtelier : 'Atelier N° 5',
       titreAtelier : 'L\'alimentation de la femme',
       titreDetail : 'L\'alimentation de la femme',
       detailAtelier : 'Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>'
     },
  {
       numeroAtelier : 'Atelier N° 6',
       titreAtelier : 'L\'estime de soi',
       titreDetail : 'L\'estime de soi',
       detailAtelier : 'Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>Que faut il manger pour maigrir, est une question que se posent toutes les personnes qui cherchent à perdre du poids. Grâce à cet article, vous allez comprendre l’importance de manger équilibré et d’avoir des repas variés pour mieux perdre vos kilos en trop ou simplement pour garder votre ligne. Nos explications vont vous aider à mieux manger pour mincir plus rapidement.<br><br>'
      }];

      /*var data = [
          apropos = [
            bio = [
              bioTexte : "",
              bioImage :
            ],
            formation : [

            ],
            presse : [

            ],
            temoignage : [

            ]

          ];
      ];*/

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
