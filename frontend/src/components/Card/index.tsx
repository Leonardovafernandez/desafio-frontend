import { ReactNode, useState } from 'react';
import trash from '../../assets/Trash.svg'
import chartGreen from '../../assets/ChartGreen.svg'
import chartRed from '../../assets/ChartRed.svg'
import chartYellow from '../../assets/ChartYellow.svg'
import api from '../../services/api';
import Tooltip from '../Tooltip';

type Prop = {
    name: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia',
    data: string,
    value: number,
    id: number
}

type FunctionCardProp = {
    name: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia',
}

type FunctionValueProp = {
    value: number,
}

export default function Card({name, data, value, id}: Prop) {
    const [showTooltip, setShowTooltip] = useState(false)
    
    function defineCardCLass({name}:FunctionCardProp): string | undefined {
        const classMap = {
            Biologia: 'bg-biologyPrimary',
            Artes: 'bg-artPrimary',
            Geografia: 'bg-geographyPrimary',
            Sociologia: 'bg-sociologyPrimary',
          };
        
          const defaultClass = 'z-1 h-[9.125rem] w-[9.8125rem] flex flex-col justify-between rounded-[1.25rem]';
          return classMap[name] ? `${defaultClass} ${classMap[name]}` : defaultClass;
    }

    function defineValueCLass({value}:FunctionValueProp): ReactNode | undefined {
        if (value < 7){
            return (
                <>
                    <img className='ml-[1rem]' src={chartRed} alt=''/>
                    <span className='font-main text-[0.75rem] font-normal text-redNote'>Nota: {value}</span>
                </>
            )
        }
        if (value >= 7 && value < 8 ){
            return (
                <>
                    <img className='ml-[1rem]' src={chartYellow} alt=''/>
                    <span className='font-main text-[0.75rem] font-normal text-yellowNote'>Nota: {value}</span>
                </>
            )
        }
        if (value >= 8){
            return (
                <>
                    <img className='ml-[1rem]' src={chartGreen} alt=''/>
                    <span className='font-main text-[0.75rem] font-normal text-greenNote'>Nota: {value}</span>
                </>
            )
        }
    }

    async function deleteGrade(id:number) {
        try {
          await api.delete(`/grade/${id}`);
        } catch (error: any) {
          console.error((error as Error).message); 
        }
      }

    return(
        <div className="flex gap-[0.56rem] card-note">
            <div className={defineCardCLass({ name })}>
                <div className='flex flex-col mt-[1rem] ml-[1rem]'>
                    <span className='font-main font-medium text-[1.125rem]'>{name}</span>
                    <span className='font-main text-[0.75rem] font-normal'>{data}</span>
                </div>
                <div className="flex items-center gap-[0.4rem] mb-[1.31rem] bg-[#0F0F0FB2] w-full h-[1.875rem]">
                    {defineValueCLass({ value })}
                </div>
            </div>
            <div className='w-fit h-fit relative'>
                <div className=' w-fit h-fit cursor-pointer hover:scale-[1.1]'
                    onClick={() => deleteGrade(id)}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <img src={trash} alt="Deletar"/>
                </div>            
                {showTooltip && <Tooltip text="Remover"/>}
            </div>
        </div>       
    )
}