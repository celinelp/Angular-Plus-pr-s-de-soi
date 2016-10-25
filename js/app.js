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

  })();
