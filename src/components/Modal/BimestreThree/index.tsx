import { useState } from 'react';
import close from '../../../assets/close.svg';
import useMain from '../../../hooks/useMain';
// import { toastFailWhite } from '../../../utils/toast.ts';
import api from '../../../services/api';
import DisciplineButton from '../../DisciplineButton';

type FormProps = {
    disciplina_id: number | undefined; 
    bimestre_id: number;
    nota: number;
}

type UseMainProviderProps = {
    discipline: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia',
    setDiscipline: (showModal: string) => void, 
    showModalThree: boolean;
    setShowModalThree: (showModal: boolean) => void;
}

export default function ModalThree() {
    const [value, setValue] = useState(0)
    const number: number = 3;    
    const { 
        showModalThree, 
        setShowModalThree,
        setDiscipline,
        discipline 
    } = useMain() as UseMainProviderProps;

    // const toast = {
    //     msg:"Nota cadastrada",
    //     classname: "toastWhite"
    // }

    // const toastError = {
    //     msg:"A nota Precisa ser um valor válido!",
    //     classname: "toastWhite"
    // }

    function closeModal() {
        setDiscipline('')
        setShowModalThree(!showModalThree)
    }
    
    async function handleSubmit() {
        const formSubmit: FormProps = {
            disciplina_id: defineDiscipline(discipline),
            bimestre_id: number,
            nota: value
        }

        function defineDiscipline(discipline:string): number {
            if (discipline === 'Biologia') return 1
            if (discipline === 'Artes') return 2
            if (discipline === 'Geografia') return 3
            if (discipline === 'Sociologia') return 4
            return 0
        }
        
        if (value < 0 || value > 10) {
            return alert("A nota Precisa ser um valor válido!")
            // toastFailWhite(toastError)
        }

        try {            
            await api.post('/grade', formSubmit);
            alert("Nota cadastrada")
            // toastFailWhite(toast)
            closeModal()
          } catch (error) {
            console.error((error as Error).message);
            closeModal()
          }
    }

    function handleFormCharge(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;

        const numericValue = parseFloat(value);
      
        if (!isNaN(numericValue)) {
          setValue(numericValue);
        }
    }
    
    return(
        <div className='modal'>
            <div className='flex flex-col justify-between w-fit h-fit bg-[#0F0F0F] px-[3rem] py-[2rem] modal-card'>
                <div className='flex justify-between small:mb-8'>
                    <span className='font-main text-[2rem] font-medium'>Bimestre {number}</span>
                    <img className='cursor-pointer' src={close} alt="fechar" onClick={closeModal} />
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='font-main font-medium text-[1.125rem]'>Disciplina</span>
                    <div className='flex large:justify-between small:justify-center gap-[1.13rem] small:flex-wrap small:mb-4'>
                        <DisciplineButton >Biologia</DisciplineButton>
                        <DisciplineButton >Artes</DisciplineButton>
                        <DisciplineButton >Geografia</DisciplineButton>
                        <DisciplineButton >Sociologia</DisciplineButton>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='font-main font-medium text-[0.875rem]'>Nota</span>
                    <input className='text-center w-[6.3125rem] h-[3rem] rounded-[0.75rem] bg-[#0F0F0F] border-solid border-[1px] border-[#424242] px-4' 
                    placeholder='7.4'
                    onChange={(e) => handleFormCharge(e)}
                    />
                </div>
                <div className='flex justify-end small:mt-6'>
                    <button className='w-[11.5rem] px-8 py-4 rounded-[0.75rem] font-main font-semibold text-[1rem] bg-button text-black'
                    onClick={()=>handleSubmit()}>Confirmar</button>
                </div>
            </div>
        </div>       
    )
}