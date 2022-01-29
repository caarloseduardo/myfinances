import React from 'react';
import ReactDOM from 'react-dom';

import {
  Overlay, Container, FormContainer,
} from './styles';

interface ModalProps {
  title: string;
  buttonLabel: string;
}

const Modal: React.FC<ModalProps> = ({
  children, title,
}) => {
  const modalDiv = document.querySelector('#modal-root');
  if (!modalDiv) {
    throw new Error("The element #portal wasn't found");
  }

  return (
    ReactDOM.createPortal(
      <Overlay>
        <Container>
          <h1>{title}</h1>

          <FormContainer>
            {children}
          </FormContainer>
        </Container>
      </Overlay>,
      modalDiv,
    )
  );
};

export default Modal;
