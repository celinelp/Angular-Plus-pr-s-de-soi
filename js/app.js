  (function(){
    var app = angular.module('plusPresDeSoi', ["ngRoute"], function($locationProvider){
      //$locationProvider.html5Mode(true);
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
