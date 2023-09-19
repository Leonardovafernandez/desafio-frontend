import { useEffect } from "react";
import BimestreContentFour from "./components/Bimestre/BimestreFour";
import BimestreContentOne from "./components/Bimestre/BimestreOne";
import BimestreContentThree from "./components/Bimestre/BimestreThree";
import BimestreContentTwo from "./components/Bimestre/BimestreTwo";
import { GradeData } from "./hooks/useMainProvider";
import api from "./services/api";
import useMain from "./hooks/useMain";

type UseMainProviderProps = {
  defineData: (data: GradeData[]) => void, 
  setData: (data: GradeData[]) => void,
  discipline: string
}

export default function App() {
  const { 
    defineData, 
    setData,
    discipline 
} = useMain() as UseMainProviderProps;

  async function getGrades() {
    try {
      const response = await api.get<GradeData[]>('/grades');
      setData(response.data);
      defineData(response.data);
    } catch (error) {
      console.error((error as Error).message);
    }
  }

  useEffect(() => {
    getGrades();
  }, [discipline]);

  return (
    <div className="bg-[#0F0F0F] h-screen w-screen flex justify-center overflow-scroll">
        <div className="w-fit mt-[3.38rem]">
          <BimestreContentOne bimestre={1}/>
          <BimestreContentTwo bimestre={2}/>
          <BimestreContentThree bimestre={3}/>
          <BimestreContentFour bimestre={4}/>
        </div>
    </div>
  )
}
