import { Modal } from "flowbite-react";
import React, { FC } from "react";
import Button from "../../uikit/Button";

interface QuestionEndModalProps {
  className?: string;
  show: boolean;
  onClose: () => any;
  onClick?: () => any;
}

const QuestionEndModal: FC<QuestionEndModalProps> = ({
  className = "",
  show,
  onClick,
  onClose,
}) => {
  return (
    <Modal show={show} size="2xl" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className={`${className}`}>
          <h3 className="mb-5 text-xl font-bold">
            Êtes-vous certain de vouloir terminer ? 
          </h3>
          <p className="text-lg pt-1 pb-10">Vous avez ignoré 18 questions.</p>
          <div className="flex justify-end  gap-4">
            <Button label=" Vérifier les questions" defaultColor={false} className="text-secondary hover:bg-gray-200 font-bold" onClick={onClick} />
            <Button label="Terminer le test" className="bg-secondary text-white font-extrabold" onClick={onClick} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default QuestionEndModal;
