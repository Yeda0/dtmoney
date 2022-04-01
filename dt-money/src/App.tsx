import Modal from 'react-modal'
import { useState } from 'react';
import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header/Index";
import { GlobalStyle } from "./styles/global";

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

      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}> 
              <h2>Cadastrar transação</h2>
          </Modal>
      <GlobalStyle/>
    </>
  );
}


