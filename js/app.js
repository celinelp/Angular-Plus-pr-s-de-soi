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
        controller : 'AproposController'
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

app.controller('AproposController', function($scope,$sce){

$scope.aproposData = [
 {imageBio: "img/melina9.jpg",
  textBio: $sce.trustAsHtml("Née en Mayenne, confrontée à l’âge de 11 ans à un problème de santé important, j’ai eu une véritable prise de conscience sur le fait que l’alimentation est une clé essentielle de notre SANTE.<br>J‘ai commencé à 16 ans à faire un travail sur moi, pour vivre mieux, pour me connaître et pour avancer.<br> C’est à Tours que j’ai eu mon diplôme de diététique, en 1999. <br>Je suis tombée amoureuse de cette ville et y ai vécu 10 ans.<br> Après mes études et pendant 7 ans,  j’ai travaillé en tant que diététicienne-téléconseillère dans un service consommateurs : j’ai beaucoup appris sur la communication et le conseil personnalisé.<br> Par la suite, j’ai eu envie de réaliser des animations sur l’alimentation auprès de différents publics.<br> Malgré ma volonté de rester sur Tours, la vie m’a menée en Eure et Loir.<br> J’ai en effet trouvé le travail dont je rêvais à Dreux. En effet depuis fin 2007, je suis Chargée de prévention surpoids-obésité au Centre Hospitalier de Dreux où je réalise des animations auprès de différents publics.<br>Je réalise également des consultations de prévention et de prise en charge surpoids-obésité auprès des enfants et adolescents  et  la coordination de différents projets tels que ''&nbsp;<strong>la semaine du goût</strong>&nbsp;''.<br> La rencontre avec les différentes cultures a été une richesse que je n’aurais jamais soupçonnée.<br> Je suis dans un domaine qui s’appelle l’éducation pour la santé. L’objectif est  d’accompagner les personnes vers des changements de comportement et d’informer sur les bienfaits d’une alimentation saine ainsi que la promotion de l’activité physique, sans jugement, ni dogmatisme ce qui leur permettra de faire des choix éclairés meilleurs pour leur santé morale et physique. Mon père était sourcier, je l’ai souvent suivi sur le terrain jusqu’au jour où  j’ai senti que je trouvais les sources aussi. Je n’ai jamais voulu utiliser mon don car je souhaitais être au clair avec moi-même et apprendre à me protéger.")},
  {textCitation: $sce.trustAsHtml("On ne voit bien qu’avec le coeur,<br>l’essentiel est invisible pour les yeux </br>ST Exupéry, extrait Le Petit Prince.")}
  
];
$scope.presse = {
                  titre: "La presse parle de moi !",
                  img : "img/pressemel.png",
                  lieu: "Votre Agglo- N°54 - Avril 2016"
}

$scope.temoignages = [
                  { id : "celine",
                    texte:"Après une séance d’émotionnel sur une situation de licenciement abusif en juin : au cours de l’été, j'ai perdu 3 kgs et cela m'a permis du coup de mieux m'entendre avec mon nouveau patron. ",
                  auteur:"Céline."},
                  { id : "louiza",
                    texte:"Mais quelle découverte, j'ai repris goût à la vie et sans Mélina je ne pourrais pas être totalement sereine face à mes petits bouts de chou. Je mange équilibré et je cuisine de bons repas aux enfants..",
                  auteur:"Louiza MB."},
                  { id : "anna",
                    texte:"Ayant des horaires décalés, j'avais de gros problèmes d'insomnie ce qui m'empêchait d'être agréable avec mes clients. Je suis allée voir Mélina et elle m'a appris à être en phase avec moi même. Son énergie positive m'a permis de ne pas m'écrouler.",
                    auteur:"Anna P."},
                  { id : "pierre",
                    texte:"Un grand merci à Mélina, qui m'a aidé dans tous les domaines.Son positivisme et son professionnalisme ont eu raison de mon enbompoint . J'étais un peu sceptique quant au mgnétisme et franchement je conseille à toute personne de tenter l'aventure, vous ne le regretterez pas.",
                  auteur:"Pierre LC."},





];




});


 })();



