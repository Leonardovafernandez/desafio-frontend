
export type ProviderProps = {
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

export type GradeData = {
  id: number,
  bimestre: string,
  disciplina: string,
  nota: number,
  criadoem: string,
  atualizadoem: string
  }

