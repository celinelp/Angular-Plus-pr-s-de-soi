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
    });
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
          this.page = "pg-home";
      }
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

/*_____________________ HOME _____________________*/
app.controller('HomeController', function(){
  this.HomeVueCtrlData = HomeBackCtrldata;
});

var HomeBackCtrldata = [
  {
    txtBgVert: '"On ne voit bien qu’avec le coeur,l’essentiel est invisible pour les yeux " ST Exupéry, extrait Le Petit Prince.',
    txtBgMarron: "Le magnétisme, comme jadis l'électricité ou la lumière, fait partie de ces énergies mystérieuses, dont on observe les effets sans en connaître les causes."
  },
    {
      imgAtelierMois: "img/homeAtelier.jpg",
      txtAtelierMois: "Depuis plus de deux siècles, il règne à son sujet une énorme confusion. Des centaines de livres en ont traité, des milliers de débats, de 	colloques ont réuni praticiens et chercheurs pour en parler, sans parvenir à se mettre d'accord sur une explication simple, évidente ou simplement plausible.",

      imgConseil: "img/homeConseil.jpg",
      txtConseil: "Depuis plus de deux siècles, il règne à son sujet une énorme confusion. Des centaines de livres en ont traité, des milliers de débats, de 	colloques ont réuni praticiens et chercheurs pour en parler, sans parvenir à se mettre d\'accord sur une explication simple, évidente ou simplement plausible.",

      imgRecette: "img/homeRecette.jpg",
      txtRecette: "Depuis plus de deux siècles, il règne à son sujet une énorme confusion. Des centaines de livres en ont traité, des milliers de débats, de 	colloques ont réuni praticiens et chercheurs pour en parler, sans parvenir à se mettre d'accord sur une explication simple, évidente ou simplement plausible."
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
/*____________________ DIETETIQUE ____________________*/
app.controller('dietController', function(){
  this.diet = dietData;
});

var dietData = [
  {
    titreDescriptif : "Définition de la diététique",
    texteDescriptif : "La diététique est la science de l'alimentation équilibrée. Elle permet de retrouver une alimentation équilibrée afin de trouver ou retrouver votre santé.  Je vous aide à équilibrer vos repas, à répondre à vos besoins en quantité et en qualité, à retrouver le plaisir dans votre alimentation, tout en m’adaptant à vos goûts et à votre rythme de vie. Je ne conseille pas de restriction alimentaire avec la tête comme ce que préconisent  quasiment tous les régimes. L’objectif est de retrouver ses propres repères de faim et de satiété pour répondre à ses besoins On travaille sur le comportement alimentaire pour que les effets agissent sur du long terme. On abordera vos croyances et représentations, votre histoire, vos habitudes…"
  },
    recette = [{

    }],
    conseil = [{
      texte : "Bien mâcher permet de mieux sentir les goûts et d’arriver à satiété. Cela évite de manger trop. Respecter ses rythmes et heures... de repas et de sommeil  (le manque de sommeil pertube les centres de faim et de satiété). On conseille un temps de repas d’un minimum de 20 minutes pour laisser le temps à l’estomac de communiquer avec  le cerveau et de renseigner sur la satiété. Manger trop vite peut amener à manger des quantités supérieures à nos besoins."
    }]
];
/*____________________ MAGNETISME ____________________*/

app.controller('magnetController', function(){
  this.magnet = magnetData;
});

var magnetData = [
  {
    titreDescriptif : "Définition du magnétisme",
    texteDescriptif : "Le magnétisme est un soin énergétique que je capte du ciel et de la terre et qui permet de soigner les maux du corps et de l’esprit. Qui permettent d’aider en cas de stress, de douleur, problèmes professionnels, problèmes relationnels… Le magnétisme peut aussi aider à se détendre et s’apaiser et/ou à faire remonter des émotions bloquées qui provoquent insomnie, stress…. Le magnétisme, comme jadis l'électricité ou la lumière, fait partie de ces énergies mystérieuses, dont on observe les effets sans en connaître les causes."
  }
];

/*____________________ APROPOS
 ____________________*/
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
