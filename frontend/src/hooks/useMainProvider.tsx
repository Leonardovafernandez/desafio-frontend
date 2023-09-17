import { useEffect, useState } from 'react';

type ProviderProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  discipline: string;
  setDiscipline: (showModal: string) => void;
}

export default function useMainProvider(): ProviderProps {
  const [showModal, setShowModal] = useState(false);
  const [discipline, setDiscipline] = useState('');
  const [name, setName] = useState('');
  
  useEffect(() => {
  }, [discipline]);

  return {
    showModal,
    setShowModal,
    discipline,
    setDiscipline,
  }
}