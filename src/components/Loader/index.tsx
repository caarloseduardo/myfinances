import React from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from './styles';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  const loaderDiv = document.querySelector('#loader-root');
  if (!loaderDiv) {
    throw new Error("The element #portal wasn't found");
  }

  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    loaderDiv,
  );
};

export default Loader;
