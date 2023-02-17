import React, { FC } from "react";
import Accordeon from "./Accordeon";

const Accordeons: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <Accordeon
        number={1}
        title="Pourquoi devrais-je passer le simulateur d'examen PMP ?"
      >
        examen PMP nécessite une étude approfondie et rigoureuse. Bien que vous
        ayez suivi une formation PMP complète, cela peut ne pas être suffisant
        pour réussir la certification PMP en toute confiance. Non seulement
        spécial à l'examen de certification PMP, mais également valable pour
        tous les autres examens, la clé du succès à l'examen est de voir autant
        de styles de questions différents que possible avant de passer le
        véritable examen. <br />
        <br />
        Le simulateur d'examen PMP vous aidera à voir les différents types de
        questions d'examen PMP réelles. Vous aurez l'impression d'avoir déjà
        fait le même examen lors de votre véritable examen PMP !
      </Accordeon>
      <Accordeon
        number={2}
        title="Quand dois-je passer les examens de simulation PMP ?"
      >
        Le meilleur moment pour passer les examens de simulation PMP est après
        avoir terminé votre formation de préparation PMP. Une fois que vous avez
        terminé votre formation PMP de 35 heures de contact, vous pouvez passer
        des examens de simulation PMP pour évaluer votre état de préparation.
        Une fois que vous êtes sûr que vous avez la connaissance de l'examen PMP
        et que vous êtes prêt à passer l'examen PMP, vous pouvez passer les
        examens du simulateur d'examen PMP. <br /> Si vous n'avez pas encore
        commencé votre préparation PMP,{" "}
        <a href="#" className="underline text-blue-500">
          vous pouvez lire notre plan d'étude PMP pour comprendre le contenu de
          la formation et faire votre préparation d’examen avec une session de
          formation Adaa Certif (présentiel ou en ligne)
        </a>
      </Accordeon>
      <Accordeon
        number={3}
        title="Puis-je voir gratuitement des exemples de questions ou une démo du simulateur d'examen PMP ?"
      >
        Bien sûr, nous avons créé une démo gratuite de 15 questions PMP dans le
        PMP Exam Simulator. Vous verrez les 15 exemples de questions PMP du
        simulateur d'examen et pourriez gratuitement le test pour mieux
        apprécier les atouts de ce simulateur d'examen PMP pour votre
        préparation à la réussite de l’examen.
      </Accordeon>
      <Accordeon
        number={4}
        title="Quelle est la durée d’accès au Simulateur ? "
      >
        <h3>a. EN MODE DEMO</h3>
        <p className="py-3">
          En mode démo, une fois que vous avez lancé le test, le PMP® Exam
          Simulator vous est ouvert en illimité pendant 7 jours pour les 15
          exemples de question.
        </p>
        <br />
        <h3>
          b. POUR LES ETUDIANTS FAISANT LA FORMATION DE PREPARATION A LA
          CERTIFICATION AVEC ADAA CERTIF
        </h3>
        <p>
          Un accès gratuit et illimité (7j/7 et 24h/24) pendant trois (03) mois
          dés le début de leur formation (faites en présentiel ou en ligne)
        </p>
        <br />
        <h3>
          c. POUR LES PERSONNES AYANT SOUSCRIT A UN ABONNEMENT AU PMP® EXAM
          SIMULATOR{" "}
        </h3>
        <p>
          Un accès illimité (7j/7 et 24h/24) pendant toute la période de
          validité de l’abonnement souscrit (mensuel ou trimestriel)
        </p>
      </Accordeon>
      <Accordeon
        number={5}
        title="Comment dois-je utiliser le simulateur d'examen PMP"
      >
        Le simulateur d'examen PMP comporte dix (10) tests d’entrainement de 30
        questions chacun, et neuf (09) examens PMP réels ayant 180 questions
        chacun. La distribution, la qualité et le contenu des questions sont le
        véritable examen PMP que vous passerez. Par conséquent, nous vous
        recommandons de passer chaque examen de simulation PMP comme si vous
        passiez le vrai examen PMP.
        <br />
        <br />
        Par exemple, choisissez une heure pour passer un examen de simulation
        PMP, concentrez-vous et réglez votre minuterie sur 230 minutes.
        Commencez à passer l'examen de simulation PMP et faites-le comme si vous
        étiez au centre d'examen PMP. Une fois que vous avez terminé le test,
        comme dans le vrai examen PMP, vous verrez vos résultats immédiatement.
        <br />
        <br />
        Vous pourrez voir les justifications de chaque question. Ainsi, vous
        aurez une chance de revoir vos mauvaises réponses et d'augmenter vos
        connaissances jusqu'à votre véritable examen PMP. Comme cela pourrait
        diminuer votre motivation et votre concentration, ne passez pas plus
        d'un examen de simulation PMP par jour.
      </Accordeon>
      <Accordeon
        number={6}
        title="Comment dois-je obtenir une note aux examens de simulation PMP pour programmer mon examen PMP ? 
      "
      >
        PMI n'indique pas de note de passage pour l'examen de certification PMP.
        Cependant, la croyance commune selon laquelle la note de passage répond
        à environ 62% de bonnes réponses, soit 144 sur les 180 questions de
        l'examen PMP.
        <br />
        <br />
        Nous vous recommandons d'obtenir au moins 70 % aux tests d'examen du
        PMP® Exam Simulator. Si vous pouvez obtenir plus de 70 % à chaque examen
        de simulation PMP, vous pouvez réserver votre examen PMP et le réussir
        en toute sérénité.
      </Accordeon>
      <Accordeon
        number={7}
        title="Que faire si je ne suis pas satisfait du PMP® Exam Simulator ? "
      >
        Les abonnements au PMP® Exam Simulator sont accompagnés d'une garantie
        complète de 30 jours (*) pour votre protection.
        <br />
        <br />
        Notre taux de remboursement global est inférieur à 1 % pour nos milliers
        d’étudiants qui ont utilisé notre PMP® Exam Simulator pour se former
        préparer à la certification PMP. Mais si, pour une raison quelconque,
        vous décidez d'annuler, envoyez simplement un e-mail à
        hello@adaacertif.com dans les 30 jours suivant l'inscription, et nous
        vous rembourserons intégralement votre paiement.
      </Accordeon>
    </div>
  );
};

export default Accordeons;
