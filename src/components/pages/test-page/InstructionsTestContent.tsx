import React, { FC } from "react";
import InstructionItem from "./InstructionItem";
import TestBlock from "./TestBlock";

const InstructionsTestContent: FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <TestBlock className="pt-8 ">
      <h2 className="text-2xl font-semibold">Instructions :</h2>

      <div className="space-y-2 mt-8 w-full ">
        <InstructionItem label="Vous pouvez interrompre le test à tout moment et reprendre plus tard." />
        <InstructionItem label="Vous pouvez repasser le test autant de fois que vous le souhaitez." />
        <InstructionItem label="La barre de progression en haut de l'écran affiche votre progression ainsi que le temps restant pour terminer le test. Si vous manquez de temps, pas de panique : vous pourrez quand même terminer le test." />
        <InstructionItem label="Vous pouvez passer une question et y revenir à la fin de l'examen." />
        <InstructionItem label="Vous pouvez également utiliser l'option « Marquer pour vérification » pour revenir aux questions dont vous n'êtes pas certain de connaître la réponse avant d'envoyer votre test." />
        <InstructionItem label="Vous pouvez terminer le test et voir vos résultats immédiatement à l'aide du bouton Arrêter." />

        <InstructionItem label="Vous pouvez terminer le test et voir vos résultats immédiatement à l'aide du bouton Arrêter." />
        <InstructionItem label="Vous pouvez terminer le test et voir vos résultats immédiatement à l'aide du bouton Arrêter." />
        <InstructionItem label="Vous pouvez terminer le test et voir vos résultats immédiatement à l'aide du bouton Arrêter." />
        <InstructionItem label="Vous pouvez terminer le test et voir vos résultats immédiatement à l'aide du bouton Arrêter." />
      </div>
    </TestBlock>
  );
};

export default InstructionsTestContent;
