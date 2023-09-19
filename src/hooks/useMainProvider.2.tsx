import { useState } from 'react';
import { GradeData, ProviderProps } from './useMainProvider';



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

  // async function getGrades() {
  //   try {
  //     const response = await api.get<GradeData[]>('/grades');
  //     setData(response.data);
  //     defineData(response.data);
  //   } catch (error) {
  //     console.error((error as Error).message);
  //   }
  // }

  function defineData(data: GradeData[]) {

    data.forEach(data => {
      if (data.bimestre === "PRIMEIRO") {
        if (data.disciplina === "Biologia") {
          setBiologyOne(data);
        }
        if (data.disciplina === "Artes") {
          setArtOne(data);
        }
        if (data.disciplina === "Geografia") {
          setGeographyOne(data);
        }
        if (data.disciplina === "Sociologia") {
          setSociologyOne(data);
        }
      }

      if (data.bimestre === "SEGUNDO") {
        if (data.disciplina === "Biologia") {
          setBiologyTwo(data);
        }
        if (data.disciplina === "Artes") {
          setArtTwo(data);
        }
        if (data.disciplina === "Geografia") {
          setGeographyTwo(data);
        }
        if (data.disciplina === "Sociologia") {
          setSociologyTwo(data);
        }
      }

      if (data.bimestre === "TERCEIRO") {
        if (data.disciplina === "Biologia") {
          setBiologyThree(data);
        }
        if (data.disciplina === "Artes") {
          setArtThree(data);
        }
        if (data.disciplina === "Geografia") {
          setGeographyThree(data);
        }
        if (data.disciplina === "Sociologia") {
          setSociologyThree(data);
        }
      }

      if (data.bimestre === "QUARTO") {
        if (data.disciplina === "Biologia") {
          setBiologyFour(data);
        }
        if (data.disciplina === "Artes") {
          setArtFour(data);
        }
        if (data.disciplina === "Geografia") {
          setGeographyFour(data);
        }
        if (data.disciplina === "Sociologia") {
          setSociologyFour(data);
        }
      }
    });
  }

  // useEffect(() => {
  //   getGrades();
  // }, [discipline]);

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
    setData,
    biologyOne,
    artOne,
    geographyOne,
    sociologyOne,
    biologyTwo,
    artTwo,
    geographyTwo,
    sociologyTwo,
    biologyThree,
    artThree,
    geographyThree,
    sociologyThree,
    biologyFour,
    artFour,
    geographyFour,
    sociologyFour,
    defineData
  };
}
