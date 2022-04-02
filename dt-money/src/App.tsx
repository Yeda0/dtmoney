import Modal from 'react-modal'
import { useState } from 'react';
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header/Index";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header openNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      
      <GlobalStyle/>
    </>
  );
}


