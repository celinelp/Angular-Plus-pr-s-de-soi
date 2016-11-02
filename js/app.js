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
            this.texte1 = "";
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
      titre : "Muffins coco-chocoloat au tahin (sans beurre)",
      nbPerso : "pour 6 muffins",
      tempPrepa : "120 minutes",
      ingredients : ["140 g de farine","50 g de sucre","1 sachet de levure chimique","40 g de noix de coco en poudre","60 g de pépites de chocolat noir (il est possible de faire des grosses pépites en coupant du chocolat à patisserie)",
      "1/2 cuillère à café de cannelle","1 cuillère à soupe de tahin (se trouve en épicerie bio)","10 cl de lait","1 œuf"],
      etapes : ["Préchauffer le four à 180° (Thermostat 6)","Mélanger la farine, la noix de coco, la levure, le sucre, le chocolat et la cannelle","A côté, mélanger le tahin, l’œuf et le lait","Ajouter les liquides (tahin, œuf et lait) aux ingrédients secs et homogénéiser la pâte","Etapes 2 Verser dans les moules à muffins et cuire 15-20 minutes","Attendre qu’ils aient refroidis pour démouler"]

      ingredients : ["140 grs de farine","50 grs de sucre","1 sachet de levure chimique","40 grs de noix de coco en poudre","60 grs de pépites de chocolat noir (il est possible de faire des grosses pépites en coupant du chocolat à patisserie)",
      "1/2 c/c de cannelle","1 c/s de tahin (se trouve en épicerie bio)","10 cl de lait","1 œuf"],
      etapes : ["Préchauffer le four à 180° (Thermostat 6)","Mélanger la farine, la noix de coco, la levure, le sucre, le chocolat et la cannelle","A côté, mélanger le tahin, l’œuf et le lait","Ajouter les liquides (tahin, œuf et lait) aux ingrédients secs et homogénéiser la pâte","Etapes 2 Verser dans les moules à muffins et cuire 15-20 minutes","Attendre qu’ils aient refroidis pour démouler"],
      image : "img/recetteMuffin.jpg"
    },{
      titre : "Soupe de panais aux pommes et épices",
      nbPerso : "pour 4 personnes",
      ingredients : ["300 g de panais","1 petite pomme de terre (100g)","2 pommes","2 gousses d’ail","1 pincée de cumin",
      "1 pincée de curry","1 pincée de cardamome","1 pincée de coriandre","1 noix de beurre salé"],
      etapes : ["Laver et éplucher le panais","Eplucher l’ail, la pomme de terre ainsi que la pomme puis l’épépiner","Couper en morceaux le panais, la pomme de terre et la pomme","Faire revenir rapidement avec le beurre, l’ail, le panias, la pomme de terre et la pomme","Recouvrir d’eau avec du gros sel et laisser cuire à couvert 30 min environ","Mixer","Ajouter les épices","Servir bien chaud"],
      image : "img/recettePanais.jpg"
    },{
      titre : "Crumble de flocons d’avoine aux 3 fruits",
      nbPerso : "pour 6 personnes",
      ingredients : ["3 pommes","2 poires","4 pruneaux","1 citron","60g de flocons d’avoine",
      "60g de beurre","30g de farine","30g de sucre"],
      etapes : ["Laver et éplucher les fruits","Couper les poires et les pommes en cubes","Les déposer dans un plat à gratin","Y ajouter les pruneaux macérés dans le jus de citron","Mélanger dans un saladier les flocons d’avoine, la farine, le sucre et le beurre froid en cubes","Emietter la préparation avec les doigts pour obtenir une texture sableuse et la répartir sur les fruits","Faire cuire 15 à 20 minutes à Th6/180°C jusqu’à coloration du crumble","Tous les fruits peuvent convenir à la préparation de ce dessert"],
      image : "img/recetteAvoine.jpg"
    },{
      titre : "Fenouils braisés",
      nbPerso : "pour 4 personnes",
      ingredients : ["1 citron","1 verre de vin blanc","1 branche de thym","2 gousses d’ail","sel, poivre","huile d’olive"],
      etapes : ["Nettoyer les bulbes de fenouil, les couper en 2 dans la longueur","Faire chauffer 1 cuillère à soupe d’huile d’olive, y mettre les fenouils à revenir pendant 10 minutes environ. Ils doivent se colorer un peu","Au bout de 5 minutes, ajouter les gousses d’ail pelées et coupées en 2","Verser ensuite le jus de citron, le vin blanc, ajouter le thym et assaisonner","Cuire à couvert pendant environ 30 minutes : les fenouils doivent être tendres et confits et le jus très réduit","Accompagner par exemple de riz et de saumon pour un repas complet"],
      image : "img/recetteFenouil.jpg"
    },{
      titre : "Cake d’automne (Ce dessert est très peu sucré et est délicieux. A tenter !)",
      nbPerso : "pour 8 personnes",
      ingredients : ["3 œufs","1 orange non traitée (bio)","1 pomme","60g d’abricots secs","40g de noix concassées","40 ml d’hule de pépins de raisons","200g de farine","1 sachet de levure  ou 1 c. à café de bicarbonate arrosé de jus de citron (pour activer le bicarbonate)","20g de cassonade","1 c. à café de cannelle"],
      etapes : ["Laver les fruits","Peler la pomme","Prélever le zeste de la moitié de l’orange","Dans un saladier, fouetter l’huile et le sucre","Ajouter les œufs battus un à un puis la cannelle, le zeste et le jus de l’orange","Incorporer la farine et mélanger jusqu’à ce que la préparation soit lisse","Ajouter les noix, les abricots et la pomme hachés","Verser dans un moule à cake anti-adhésif et cuire à th6/180°C, pendant 45 minutes","Laisser refroidir 5 min puis démouler"],
      image : "img/recetteCake.jpg"
    },{
      titre : "Velouté de châtaignes aux lardons",
      nbPerso : "pour 6 personnes",
      ingredients : ["500 g de châtaignes","300 g de lardons","1 oignon","1 carotte en rondelles","1 branche de céleri","2 c. à café d’huile d’olive","3 gousses d’ail hachées","Sel, poivre","2 c. à soupe de crème fraiche","1 bouquet de coriandre fraîche et persil"],
      etapes : ["Dans une marmite, faites revenir à feu doux tous ces légumes dans l’huile, pendant 5 minutes environ","Remuez de temps en temps","Rincez les châtaignes","Ajoutez-les ainsi que le bouquet garni et l’eau","Salez et portez à ébullition","Puis réduisez le feu et laisser cuire à couvert pendant 40 minutes","Quand les châtaignes sont bien cuites, retirez la cocotte du feu et enlever le bouquet garni","Mixez finement et ajoutez la crème","Faites chauffer une poêle et faites-y revenir les lardons sans matière grasse, jusqu’à ce qu’ils soient dorés","Ajoutez-les au moment de servir"],
      image : "img/recetteChataigne.jpg"
    },{
      titre : "Clafoutis aux pommes au lait végétal (facile et rapide !)",
      nbPerso : "pour 6 personnes",
      ingredients : ["3  ou 4 pommes","3 œufs","100 g de sucre ( 5 c. à soupe bombées)","120 g farine (6 c. à soupe bombées)","1/2 L de lait végétal (riz, avoine, amande, …, mon « chouchou » : « riz épeautre noisette »)","pour ceux qui aiment, vous pouvez rajouter 1 c. à café de fleur d’oranger"],
      etapes : ["Coupez les pommes en lamelle et disposez les dans le plat","Mélangez tous les ingrédients et versez sur les pommes","Thermostat 6/7. Cuire 35 min"],
      image : "img/recetteClafoutis.jpg"

    }],

    {
      conseil : "Bien mâcher permet de mieux sentir les goûts et d’arriver à satiété. Cela évite de manger trop. Respecter ses rythmes et heures... de repas et de sommeil  (le manque de sommeil pertube les centres de faim et de satiété). On conseille un temps de repas d’un minimum de 20 minutes pour laisser le temps à l’estomac de communiquer avec  le cerveau et de renseigner sur la satiété. Manger trop vite peut amener à manger des quantités supérieures à nos besoins.",
      conseil2 : "Diminuer le sucre dans vos recettes. Vous pouvez  baisser de 20 à 30 g voire la moitié de la quantité de sucre pour certains desserts. Manger moins sucré est une habitude."
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
