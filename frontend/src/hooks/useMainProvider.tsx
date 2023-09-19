import { useEffect, useState } from 'react';
import api from '../services/api';

type ProviderProps = {
  showModalOne: boolean;
  setShowModalOne: (showModal: boolean) => void;
  showModalTwo: boolean;
  setShowModalTwo: (showModal: boolean) => void;
  showModalThree: boolean;
  setShowModalThree: (showModal: boolean) => void;
  showModalFour: boolean;
  setShowModalFour: (showModal: boolean) => void;
  discipline: string;
  setDiscipline: (showModal: string) => void;
  data: GradeData[];
  biologyOne: GradeData | undefined; 
  artOne: GradeData | undefined;
  geographyOne: GradeData | undefined;
  sociologyOne: GradeData | undefined;
  biologyTwo: GradeData | undefined;
  artTwo: GradeData | undefined;
  geographyTwo: GradeData | undefined;
  sociologyTwo: GradeData | undefined;
  biologyThree: GradeData | undefined;
  artThree: GradeData | undefined;
  geographyThree: GradeData | undefined;
  sociologyThree: GradeData | undefined;
  biologyFour: GradeData | undefined;
  artFour: GradeData | undefined;
  geographyFour: GradeData | undefined;
  sociologyFour: GradeData | undefined;
}

type GradeData = {
  id: number,
  bimestre: string,
  disciplina: string,
  nota: number,
  criadoem: string,
  atualizadoem: string
  }

export default function useMainProvider(): ProviderProps {
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  const [showModalThree, setShowModalThree] = useState(false);
  const [showModalFour, setShowModalFour] = useState(false);
  const [discipline, setDiscipline] = useState('');
  const [data, setData] = useState<GradeData[]>([]);

  const [biologyOne, setBiologyOne] = useState<GradeData>();
  const [artOne, setArtOne] = useState<GradeData>();
  const [geographyOne, setGeographyOne] = useState<GradeData>();
  const [sociologyOne, setSociologyOne] = useState<GradeData>();

  const [biologyTwo, setBiologyTwo] = useState<GradeData>();
  const [artTwo, setArtTwo] = useState<GradeData>();
  const [geographyTwo, setGeographyTwo] = useState<GradeData>();
  const [sociologyTwo, setSociologyTwo] = useState<GradeData>();

  const [biologyThree, setBiologyThree] = useState<GradeData>();
  const [artThree, setArtThree] = useState<GradeData>();
  const [geographyThree, setGeographyThree] = useState<GradeData>();
  const [sociologyThree, setSociologyThree] = useState<GradeData>();

  const [biologyFour, setBiologyFour] = useState<GradeData>();
  const [artFour, setArtFour] = useState<GradeData>();
  const [geographyFour, setGeographyFour] = useState<GradeData>();
  const [sociologyFour, setSociologyFour] = useState<GradeData>();

  async function getGrades() {
    try {
      const response = await api.get<GradeData[]>('/grades');
      setData(response.data);
      defineData(response.data);

    } catch (error: any) {
      console.error((error as Error).message); 
    }
  }

  function defineData(data:GradeData[]) {
    
    data.forEach(data => {
      if(data.bimestre === "PRIMEIRO"){
        if (data.disciplina === "Biologia") {
          setBiologyOne(data)
        }
        if (data.disciplina === "Artes") {
          setArtOne(data)
        }
        if (data.disciplina === "Geografia") {
          setGeographyOne(data)
        }
        if (data.disciplina === "Sociologia") {
          setSociologyOne(data)
        }
      }

      if(data.bimestre === "SEGUNDO"){
        if (data.disciplina === "Biologia") {
          setBiologyTwo(data)
        }
        if (data.disciplina === "Artes") {
          setArtTwo(data)
        }
        if (data.disciplina === "Geografia") {
          setGeographyTwo(data)
        }
        if (data.disciplina === "Sociologia") {
          setSociologyTwo(data)
        }
      }

      if(data.bimestre === "TERCEIRO"){
        if (data.disciplina === "Biologia") {
          setBiologyThree(data)
        }
        if (data.disciplina === "Artes") {
          setArtThree(data)
        }
        if (data.disciplina === "Geografia") {
          setGeographyThree(data)
        }
        if (data.disciplina === "Sociologia") {
          setSociologyThree(data)
        }
      }

      if(data.bimestre === "QUARTO"){
        if (data.disciplina === "Biologia") {
          setBiologyFour(data)
        }
        if (data.disciplina === "Artes") {
          setArtFour(data)
        }
        if (data.disciplina === "Geografia") {
          setGeographyFour(data)
        }
        if (data.disciplina === "Sociologia") {
          setSociologyFour(data)
        }
      }
    });
  }
  
  useEffect(() => {
    getGrades()
  }, [discipline]);

  return {
    showModalOne,
    setShowModalOne,
    showModalTwo,
    setShowModalTwo,
    showModalThree,
    setShowModalThree,
    showModalFour,
    setShowModalFour,
    discipline,
    setDiscipline,
    data,
    biologyOne, 
    artOne,
    geographyOne,
    sociologyOne, 
    biologyTwo,
    artTwo, 
    geographyTwo,
    sociologyTwo ,
    biologyThree,
    artThree,
    geographyThree,
    sociologyThree,
    biologyFour,
    artFour,
    geographyFour,
    sociologyFour
  }
}