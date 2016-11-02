(function(){
  var app = angular.module('plusPresDeSoi', ["ngRoute","ngSanitize"]);


    app.run(function($rootScope) {
      $rootScope.activeDietetique = 1;
    });



  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl : 'partials/home/home.html',
      controller : "HomeController",
      controllerAs : "HomeCtrl"
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
      templateUrl : 'partials/dietetique/dietetique.html',
      controller : "dietController",
      controllerAs : "storeDiet"
    })
    .when('/magnetisme',{
      templateUrl : 'partials/magnetisme/magnetisme.html'
    })
    .when('/mention',{
      templateUrl : 'partials/mention/mention.html'
    });
  }]);
  app.controller('imageHeader',["$location","$rootScope", function($location,$rootScope){
    this.url = $location.path();
    this.page = "pg-home";
    this.texte1 = "Comment je m'aime ?";
    this.texte2 = "Comment je mange ?";
    this.changeImg = function (url,setActive = null){
      if (setActive != null){
        $rootScope.activeDietetique = setActive;
      }
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
    }]);
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
      detailAtelier : 'Objectif: Aborder ce qui influence notre comportement alimentaire, les croyances et les représentations.'
     },
   {
        numeroAtelier : 'Atelier N° 2',
        titreAtelier : 'Pourquoi on mange? Croyances et représentations',
        titreDetail : 'Pourquoi on mange? Croyances et représentations',
        detailAtelier : 'objectif : Informer sur les différents groupes d’aliments, leurs apports et ce qu’est un repas équilibré. '
     },
  {
       numeroAtelier : 'Atelier N° 3',
       titreAtelier : 'Comment s\'organiser? Les menus...',
       titreDetail : 'Comment s\'organiser? <br>Les menus...',
       detailAtelier : 'objectif : mettre en pratique de l’alimentation équilibrée sur une semaine : variété, idées de saison.'
     },
  {
       numeroAtelier : 'Atelier N° 4',
       titreAtelier : 'La lecture des étiquettes',
       titreDetail : 'La lecture des étiquettes',
       detailAtelier : 'objectif : mettre en pratique de l’alimentation équilibrée sur une semaine : variété, idées de saison.'
     },
  {
       numeroAtelier : 'Atelier N° 5',
       titreAtelier : 'L\'alimentation de la femme',
       titreDetail : 'L\'alimentation de la femme',
       detailAtelier : 'Objectif : Repérer les rythmes naturels de la femme et ses besoins nutritionnels, apprendre à choisir les aliments pour les respecter.'
     },
  {
       numeroAtelier : 'Atelier N° 6',
       titreAtelier : 'L\'estime de soi',
       titreDetail : 'L\'estime de soi',
       detailAtelier : 'Objectif : -Permettre le débat, les échanges et les réflexions sur la minceur, le poids et les régimes<br>Aborder les fausses croyances- comprendre ce qu’ est l’estime de soi.'
      }];

/*_____________________ HOME _____________________*/
app.controller('HomeController', function($rootScope, $scope, $sce){

  this.setActiveDietetique = function(input){
    $rootScope.activeDietetique = input;
  }

  $scope.HomeVueCtrlData = [
  {
    txtBgVert:  $sce.trustAsHtml('"On ne voit bien qu’avec le coeur, l’essentiel est invisible pour les yeux" <br> St Exupéry, extrait Le Petit Prince.'),
    txtBgMarron:  $sce.trustAsHtml('\"Le magnétisme, comme jadis l\'électricité ou la lumière, fait partie de ces énergies mystérieuses,<br> dont on observe les effets sans en connaître les causes.\" <br>Citation Anonyme ')
  },
    {
      imgAtelierMois: "img/homeAtelier.jpg",
      txtAtelierMois: "Depuis plus de deux siècles, il règne à son sujet une énorme confusion. Des centaines de livres en ont traité, des milliers de débats, de  colloques ont réuni praticiens et chercheurs pour en parler, sans parvenir à se mettre d'accord sur une explication simple, évidente ou simplement plausible.",

      imgConseil: "img/homeConseil.jpg",
      txtConseil: "Depuis plus de deux siècles, il règne à son sujet une énorme confusion. Des centaines de livres en ont traité, des milliers de débats, de  colloques ont réuni praticiens et chercheurs pour en parler, sans parvenir à se mettre d\'accord sur une explication simple, évidente ou simplement plausible.",

      imgRecette: "img/homeRecette.jpg",
      txtRecette: "Depuis plus de deux siècles, il règne à son sujet une énorme confusion. Des centaines de livres en ont traité, des milliers de débats, de  colloques ont réuni praticiens et chercheurs pour en parler, sans parvenir à se mettre d'accord sur une explication simple, évidente ou simplement plausible."
    }
];
});




  /*____________________ CONTACT ____________________*/
  app.controller('ContactController', function(){
    this.ContactVueCtrlData = ContactBackCtrldata;
    this.contact = ContactData;
    this.ContactData = {};

    this.addcontact = function(contact){
      console.log(this.ContactData);
    contact.data.push(this.ContactData);
    this.ContactData = {};
    }
  });

  var ContactData = [{
    Nom: "",
    Prenom: "",
    Email : "",
    Message : "",
    Particulier:"",
    Professionnel: ""
  }]

var ContactBackCtrldata = [

  {
    adresse_1: "34 rue de la Tannerie 28000 Chartres" ,
    adresse_2: "7 Rue du Préau 28300 Berchères-Saint-Germain",
    ficheContactName: " Guillet Mélina",
    ficheContactNum: " 06.72.31.97.12",
    ficheContactMail: " melinaguillet26@gmail.com"
  }

  ];
/*____________________ DIETETIQUE ____________________*/
app.controller('dietController', ["$scope","$rootScope","$sce","$location","$anchorScroll", function($scope,$rootScope,$sce,$location,$anchorScroll){
  $scope.tab = parseInt($rootScope.activeDietetique);

  /* remplissage panel tab conseil-recette */
  this.changeTab = function(tab,hash,$anchorScroll){
    $scope.tab = tab;
  }
  /* remplissage des modals chroniques */
  this.choiceDietElement = function(element){
     $scope.elementDietModal = element;
  }
  /* ancre vers le tab recette-conseil */
  /*if ($rootScope.activeDietetique === 2){
    $location.hash('dietTabs');
    $anchorScroll();
  };*/


  $scope.diet = [
   {titreDescriptif : "Définition de la diététique",
   texteDescriptif : $sce.trustAsHtml("La diététique est la science de l’alimentation équilibrée qui contribue à être en bonne santé."),
   texteDescriptif2 : $sce.trustAsHtml("<span style='font-size:20px;'><strong>Séance d’une heure:</strong> le suivi demande plusieurs mois de consultation et la fréquence dépend des besoins de chacun.</span>"),

  },

    aide = ["Équilibrer vos repas","Répondre à vos besoins en quantité et en qualité (goût de l’aliment, intérêt nutritionnel, choix des aliments)","Retrouver le plaisir dans votre alimentation, tout en m’adaptant à vos goûts et à votre rythme de vie (organisation, idées menu)","Avoir des idées pour varier, cuisiner facile, de saison, en faisant attention à votre budget","Continuer ou mettre en place une activité physique adaptée"],

  

    monApproche = $sce.trustAsHtml("Je ne fais pas de « régime » mais je vous propose une <strong>alimentation équilibrée adaptée à vos besoins</strong>. Je vous propose d’aborder votre comportement alimentaire ainsi que vos croyances et représentations, votre histoire, vos habitudes.<br> Je vous accompagnerais pour que vous puissiez mettre en place des changements petit à petit et ainsi vous sentir bien et prendre soin de votre santé.<br><br><center><span style='font-size:22px;'>Comment perdre du poids durablement ?</span></center><br>Pour perdre du poids de façon durable, il ne faut pas réduire les quantités avec sa tête mais retrouver <strong>ses repères sensoriels ( faim, satiété )</strong> pour manger en fonction de ses besoins. <br> Agir sur l’alimentation est fondamental mais pas suffisant. Le fait de manger en grosse quantité ou pas assez, de ne pas varier, de ne pas aimer les fruits et légumes, de grignoter … est lié à notre rythme de vie  mais aussi à ce qui va influencer notre comportement alimentaire : stress, frustrations, situations subies ou « mal digérées », mal-être, inconscient, problèmes relationnels privés ou professionnels, « mots qu’on ravale »… et on compense ensuite par la nourriture. Tant que <strong>les problèmes à la source</strong> ne sont pas réglés , les changements alimentaires seront difficiles à mettre en place ou ne dureront pas dans le temps et la prise de poids pourrait reprendre. C’est pourquoi je propose en parallèle d’un suivi diététique, un accompagnement en magnétisme et/ou libération émotionnelle pour apprendre à s’aimer et à prendre « soin de soi ».  En résumé, je travaille sur le lien qu’il y a entre le comportement alimentaire, l’estime de soi et  nos émotions."),

    recette = [{
      titre : "MUFFINS COCO-CHOCOLAT AU TAHIN (sans beurre)",
      nbPerso : "pour 6 muffins",
      tempPrepa : "120 minutes",
      ingredients : ["140 g de farine","50 g de sucre","1 sachet de levure chimique","40 g de noix de coco en poudre","60 g de pépites de chocolat noir (il est possible de faire des grosses pépites en coupant du chocolat à patisserie)",
      "1/2 cuillère à café de cannelle","1 cuillère à soupe de tahin (se trouve en épicerie bio)","10 cl de lait","1 œuf"],
      etapes : ["Préchauffer le four à 180° (Thermostat 6)","Mélanger la farine, la noix de coco, la levure, le sucre, le chocolat et la cannelle","A côté, mélanger le tahin, l’œuf et le lait","Ajouter les liquides (tahin, œuf et lait) aux ingrédients secs et homogénéiser la pâte","Etapes 2 Verser dans les moules à muffins et cuire 15-20 minutes","Attendre qu’ils aient refroidis pour démouler"]
    }],

    {
      conseil : "Bien mâcher permet de mieux sentir les goûts et d’arriver à satiété. Cela évite de manger trop. Respecter ses rythmes et heures... de repas et de sommeil  (le manque de sommeil pertube les centres de faim et de satiété). On conseille un temps de repas d’un minimum de 20 minutes pour laisser le temps à l’estomac de communiquer avec  le cerveau et de renseigner sur la satiété. Manger trop vite peut amener à manger des quantités supérieures à nos besoins."
    },{
    semaineDuGout : "pdf/semaineDuGout.pdf",
    brinDeVie : "img/articleBrinDeVie.png"
    }
];

}]);
/*____________________ MAGNETISME ____________________*/

app.controller('magnetController', function($scope,$sce){



$scope.magnetData = [
  {
    titreDescriptif : "Définition du magnétisme",
    texteDescriptif : $sce.trustAsHtml("Le magnétisme est un soin d’énergie vitale qui permet de soigner les maux du corps et de l’esprit.<br> Il soulage les douleurs&nbsp;: zonas,&nbsp; verrues, brûlures, eczéma, troubles fonctionnels et nerveux, stress, insomnie, fatigue, deuil, …<br>Je suis un canal de l’énergie du ciel et de la terre et cette énergie va aider la personne à l’endroit où elle en a besoin.<br> La personne soignée reste habillée et est allongée sur une table de massage..<br><small>Attention : le magnétisme ne se substitue pas à un suivi médical, ni à un traitement médicamenteux.<samll><br><span style='font-size:20px;'>Séance d’une heure: La personne peut avoir besoin d’une ou plusieurs séances</span>…")
  }
];

});


/*____________________ APROPOS ____________________*/
app.controller('AproposController', function($scope,$sce){
  $scope.tab = "1";

$scope.aproposData = [
 {imageBio: "img/melina9.jpg",
  textBio: $sce.trustAsHtml("Née en Mayenne, confrontée à l’âge de 11 ans à un problème de santé important, j’ai eu une véritable prise de conscience sur le fait que l’alimentation est une clé essentielle de notre SANTE. J‘ai commencé à 16 ans à faire un travail sur moi, pour vivre mieux, pour me connaître <br>et pour avancer. C’est à Tours que j’ai eu mon diplôme de diététique, en 1999. Je suis tombée amoureuse de cette ville et y ai vécu 10 ans.<br> Après mes études et pendant 7 ans,  j’ai travaillé en tant que diététicienne-téléconseillère dans un service consommateurs : j’ai beaucoup appris sur la communication et le conseil personnalisé. Par la suite, j’ai eu envie de réaliser des animations sur l’alimentation auprès de différents publics.<br> Malgré ma volonté de rester sur Tours, la vie m’a menée en Eure et Loir.<br> J’ai en effet trouvé le travail dont je rêvais à Dreux. En effet depuis fin 2007, je suis Chargée de prévention surpoids-obésité au Centre Hospitalier de Dreux où je réalise des animations auprès de différents publics.<br>Je réalise également des consultations de prévention et de prise en charge surpoids-obésité auprès des enfants et adolescents  et  la coordination de différents projets tels que ''&nbsp;<strong>la semaine du goût</strong>&nbsp;''.<br> La rencontre avec les différentes cultures a été une richesse que je n’aurais jamais soupçonnée. Je suis dans un domaine qui s’appelle l’éducation pour la santé. L’objectif est  d’accompagner les personnes vers des changements de comportement et d’informer sur les bienfaits d’une alimentation saine ainsi que la promotion de l’activité physique, sans jugement, ni dogmatisme ce qui leur permettra de faire des choix éclairés meilleurs pour leur santé morale et physique. Mon père était sourcier, je l’ai souvent suivi sur le terrain jusqu’au jour où  j’ai senti que je trouvais les sources aussi. Je n’ai jamais voulu utiliser mon don car je souhaitais être au clair avec moi-même et apprendre à me protéger.")},
  {textCitation: $sce.trustAsHtml('"On ne voit bien qu’avec le coeur,<br>l’essentiel est invisible pour les yeux" </br>St Exupéry. Extrait Le Petit Prince')}


];
$scope.presse = {
                  titre: "Article Chartres-Agglo- N°54 - Avril 2016 !",
                  img : "img/pressemel.png",

}
$scope.temoignages = [
                  { id : "1",
                    texte:"Après une séance d’émotionnel sur une situation de licenciement abusif en juin : au cours de l’été, j'ai perdu 3 kgs et cela m'a permis du coup de mieux m'entendre avec mon nouveau patron. ",
                    auteur:"Céline"},
                  { id : "louiza",
                    texte:"J'ai commencé à voir Mélina Guillet fin août et je sens déjà un changement important dans ma manière de manger. D'emblée, elle m'a fait replonger dans des émotions plus ou moins récentes, de manière bienveillante. Depuis, je sens que quelque chose change en moi sans que j'aie d'efforts à fournir: j'ai simplement envie de prendre soin de moi, notamment en mangeant mieux (plus de fruits, de légumes, moins de biscuits...). En suivant ses conseils, je me sens rassasiée en fin de repas (ce qui n'était en fait plus vraiment le cas depuis longtemps). Avec une approche complémentaire entre les émotions et la diététique, j'ai envie de découvrir des goûts nouveaux et de me faire plaisir en me réconciliant avec mon corps..",
                  auteur:"M."},
                  { id : "annna",
                    texte:" ",
                    auteur:" "},
                  { id : "pierre",
                    texte:"",
                  auteur:""},

];
});
})();
