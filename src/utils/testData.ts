import Certification from "../models/Certification";
import Offre from "../models/Offre";

export const listOfComments = [
  {
    image: '/assets/student1-removebg-preview.png',
    content: "« La formation Tech Lead d'Adaa est réellement en accord avec le monde de l'entreprise. Il était aussi important que la formation soit au niveau Bac +5, car j'avais déjà un Bac +3 : je ne suis pas déçu du tout, car l’apprentissage est progressif avec l’aide des mentors. »",
    job: 'Product Manager, Orange Cameroun',
    firstname: 'Danielle',
    lastname: 'KOTTO',
    certif: 'Certified PMP'
  },
  {
    image: '/assets/e7754d_8a380ca3a39e445ba2077a07d868e468_mv2-removebg-preview.png',
    content: "« J'ai suivi le simulateur d'examen PMP après avoir terminé ma préparation PMP. J'ai passé mon dernier mois à revoir mes notes que j'ai prises pendant mon étude PMP et j'ai passé des examens de simulation PMP dans ce simulateur. En moyenne, j'ai obtenu un score supérieur à 79 % et j'étais convaincu d'avoir vu plusieurs types de questions différents avant mon examen PMP. J'ai réussi l'examen PMP et ce simulateur d'examen PMP m'a aidé à avoir l'impression de refaire le même test lors de mon véritable examen. »",
    job: 'Product Manager, Orange Cameroun',
    firstname: 'Mathurin',
    lastname: 'Toukam',
    certif: 'Certified PMP'
  },
  {
    image: '/assets/leatitia_800x0_20201126122450-removebg-preview.png',
    content: "« En une phrase, une formation Adaa, c'est du challenge et du contenu de qualité. Dans la Tech, ce n'est pas tant ce qu'on sait qui compte, c'est ce qu'on est capable d'apprendre. Chez Adaa, on apprend vraiment à pêcher plutôt que d'attendre le poisson tout cuit dans le bec chaque jour. C'est donc un retour sur investissement vraiment intéressant ! »",
    job: 'Product Manager, Orange Cameroun',
    firstname: 'Claire',
    lastname: 'Kamdom',
    certif: 'Certified PMP'
  },
] as const;

export const listeCertifications: Certification[] = [
  {
    id: 1,
    logo: '/assets/logo_PMP-removebg-preview.png',
    title: 'PMP® Exam Simulator',
    level: 'Simulateur PMP',
    items: [
      `+28 PDU (heures de contact) pour aider votre éligibilité à l'éducation PM pour l'examen de certification PMP`,
      `+1 900 exemples de questions d'examen PMP réalistes`,
      `09 examens blancs PMP et le contenu du dernier PMBOK sont couverts`,
      `Basé sur le dernier PMBOK® - Project Management Body of Knowledge`,
      `Réponses et explications pour chaque question de simulation d'examen PMP`,
      `Un rapport détaillé de vos performances de simulation d'examen PMP et d'autres recommandations pour réussir votre examen `,
      `Assistance 24h/24 et 7j/7 de notre équipe d'experts`
    ]
  },
  {
    id: 2,
    logo: '/assets/cms-image-300x300-removebg-preview (1).png',
    title: 'PROFESSIONAL SCRUM MASTER 1 (PSM 1) Exam Simulator',
    level: 'Simulateur PSM1',
    items: [
      `+1 200 exemples de questions d'examen PSM 1 réalistes `,
      `09 examens blancs PMP et le contenu du dernier Guide SCRUM  sont couverts `,
      `Basé sur le dernier Guide Scrum 2021® `,
      `Réponses et explications pour chaque question de simulation d'examen `,
      `Un rapport détaillé de vos performances de simulation d'examen PSM 1 et d'autres recommandations pour réussir votre examen de certification PSM 1 lors de votre première tentative`,
      `Assistance 24h/24 et 7j/7 de notre équipe d'experts      `
    ]
  },
  {
    id: 3,
    logo: '/assets/formation-ITIL4-Foundation-removebg-preview (2).png',
    title: 'ITIL4 Exam Simulator',
    level: 'Simulateur ITIL4',
    items: [
      `+1 200 exemples de questions d'examen ITIL 4 ®  réalistes`,
      `09 examens blancs ITIL 4 Foundation sont couverts`,
      `Réponses et explications pour chaque question de simulation d'examen `,
      `Un rapport détaillé de vos performances de simulation d'examen ITIL 4 Foundation et d'autres recommandations pour réussir votre examen de certification ITIL 4 Foundation lors de votre première tentative.`,
      `Assistance 24h/24 et 7j/7 de notre équipe d'experts      `
    ]
  }
]


export const offres: Offre[] = [
  {
    name: 'Demo',
    price: null,
    reduction: null,
    fakePrice: null,
    description: 'Testez le PMP® Exam Simulator',
    btnLabel: 'Profitez d’une démo',
    features: [
      { key: 'Validité', value: '07 jours' },
      { key: 'Accès ', value: '7j/7 et 24h/24' },
      { key: 'Test d’entrainement', value: '01' },
      { key: 'Nombre de questions', value: '15' },
      { key: 'Nombre d’essai', value: 'illimité' },
      { key: 'Récap. en fin de test', value: 'Oui' },
      { key: 'Explication réponse', value: 'Oui' },
      { key: 'Vérification réponse', value: 'Oui' },
      { key: 'Corrigé ', value: 'Oui' },
    ],
  },
  {
    name: 'PLAN MENSUEL',
    price: 50,
    reduction: 49,
    fakePrice: 99,
    description: '30 jours de préparation',
    btnLabel: 'Commander',
    features: [
      { key: 'Validité', value: '30 jours' },
      { key: 'Accès ', value: '7j/7 et 24h/24' },
      { key: 'Test d’entrainement', value: '10' },
      { key: 'Nombre de questions', value: '300' },
      { key: 'Examens blancs', value: '09' },
      { key: 'Nombre de questions', value: '1620' },
      { key: 'Nombre d’essai', value: 'illimité' },
      { key: 'Récap. en fin de test', value: 'Oui' },
      { key: 'Explication réponse', value: 'Oui' },
      { key: 'Vérification réponse', value: 'Oui' },
      { key: 'Corrigé ', value: 'Oui' },
      { key: 'Assistance  ', value: 'Oui' },
      { key: 'Tableau de bord  ', value: 'Oui' },
    ],
    renouvellementText: '29,99 $USD en cas de renouvellement'
  },
  {
    name: 'PLAN TRIMENSUEL',
    price: 135,
    reduction: 65,
    fakePrice: 200,
    description: '90 jours de préparation',
    btnLabel: 'Commander',
    features: [
      { key: 'Validité', value: '30 jours' },
      { key: 'Accès ', value: '7j/7 et 24h/24' },
      { key: 'Test d’entrainement', value: '10' },
      { key: 'Nombre de questions', value: '300' },
      { key: 'Examens blancs', value: '09' },
      { key: 'Nombre de questions', value: '1620' },
      { key: 'Nombre d’essai', value: 'illimité' },
      { key: 'Récap. en fin de test', value: 'Oui' },
      { key: 'Explication réponse', value: 'Oui' },
      { key: 'Vérification réponse', value: 'Oui' },
      { key: 'Corrigé ', value: 'Oui' },
      { key: 'Assistance  ', value: 'Oui', priority: true  },
      { key: 'Tableau de bord  ', value: 'Oui'},
    ],
    renouvellementText: '99,99 $USD en cas de renouvellement',
    freeForStudent: true
  }
];