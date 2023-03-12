import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider
