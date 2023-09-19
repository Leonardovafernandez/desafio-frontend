import { useEffect, useState } from "react";
import plus from '../../../assets/Plus.svg';
import useMain from "../../../hooks/useMain";
import Card from "../../Card";
import ModalTwo from "../../Modal/BimestreTwo";
import Tooltip from "../../Tooltip";

type BimestreProps = {
    bimestre: number,
}

type GradeData = {
    id: number,
    bimestre: string,
    disciplina: "Biologia" | "Artes" | "Geografia" | "Sociologia",
    nota: number,
    criadoem: string,
    atualizadoem: string,
    key: number
}

type UseMainProviderProps = {
    showModalTwo: boolean;
    setShowModalTwo: (showModal: boolean) => void;
    biologyOne: GradeData; 
    artOne: GradeData;
    geographyOne: GradeData;
    sociologyOne: GradeData;
    biologyTwo: GradeData;
    artTwo: GradeData;
    geographyTwo: GradeData;
    sociologyTwo: GradeData;
    biologyThree: GradeData;
    artThree: GradeData;
    geographyThree: GradeData;
    sociologyThree: GradeData;
    biologyFour: GradeData;
    artFour: GradeData;
    geographyFour: GradeData;
    sociologyFour: GradeData;
}

export default function BimestreContentTwo({bimestre}: BimestreProps){
    const { 
        showModalTwo,
        setShowModalTwo,
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
    } = useMain() as UseMainProviderProps;
    const number: number = 2;
    const [data, setData] = useState<GradeData[]>()
    const [showTooltip, setShowTooltip] = useState(false)

    function defineData(bimestre: number) {
        if (bimestre === 1) {
            setData([{ ...biologyOne, key: 1}, { ...artOne, key: 2}, { ...geographyOne, key: 3}, { ...sociologyOne, key: 4}])
        }

        if (bimestre === 2) {
            setData([{ ...biologyTwo, key: 1}, { ...artTwo, key: 2}, { ...geographyTwo, key: 3}, { ...sociologyTwo, key: 4}])
        }

        if (bimestre === 3) {
            setData([{ ...biologyThree, key: 1}, { ...artThree, key: 2}, { ...geographyThree, key: 3}, { ...sociologyThree, key: 4}])
        }

        if (bimestre === 4) {
            setData([{ ...biologyFour, key: 1}, { ...artFour, key: 2}, { ...geographyFour, key: 3}, { ...sociologyFour, key: 4}])
        }          
    }

    function formatarData(dataString: string): string {
        const data = new Date(dataString);
      
        const dia = data.getDate();
        const mes = data.getMonth() + 1; 
        const ano = data.getFullYear();
      
        const diaFormatado = dia.toString().padStart(2, '0');
        const mesFormatado = mes.toString().padStart(2, '0');
      
        return `${diaFormatado}/${mesFormatado}/${ano}`;
      }

    useEffect(() => {
        defineData(bimestre)
    }, [data]);

    
    return(
        <div className="flex flex-col items-center w-fit small:max-w-fit">
            <div className="flex justify-between items-center h-[2.5rem] small:w-[400.894px] large:w-[902.748px]">
                <span className="text-white font-main text-[1.125rem]">Bimestre {number}</span>
                <div className="flex small:justify-self-end relative">
                    <button className='flex items-center gap-[0.63rem] bg-button  mr-[2.56rem] py-[0.15rem] rounded-[0.75rem]'
                      onClick={() => setShowModalTwo(!showModalTwo)}
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                        <span className='visible text-black text-[1rem] font-main font-semibold small:hidden'>Lançar nota</span>
                        <img src={plus} alt="Adicionar" />
                    </button>  
                    {showTooltip && <Tooltip text="Adicionar"/>}
                </div>
            </div> 
            <div className="flex large:gap-[2.31rem] small:gap-[0.31rem] justify-center mt-8 mb-6 small:flex-wrap">
                {data?.map(grade=>(
                    grade?.id ? 
                    <Card key={grade?.key} name={grade?.disciplina} data={grade?.atualizadoem ? formatarData(grade?.atualizadoem) : formatarData(grade?.criadoem)} value={grade?.nota} id={grade?.id}/>
                    : <div className='w-[197.967px] h-[146px]'></div> 
                ))}
            </div>
            {showModalTwo && <ModalTwo />}
        </div>
    )
}