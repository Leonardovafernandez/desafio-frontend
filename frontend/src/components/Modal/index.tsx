import close from '../../assets/close.svg';
import useMain from '../../hooks/useMain';
import DisciplineButton from '../DisciplineButton';

type Prop = {
    number: number
}

export default function Modal({number}: Prop) {
    const { 
        showModal, 
        setShowModal,
        setDiscipline, 
    } = useMain()

    function closeModal() {
        setDiscipline('')
        setShowModal(!showModal)
    }

    return(
        <div className='modal'>
            <div className='flex flex-col justify-between w-[42.375rem] h-[23.6875rem] bg-[#0F0F0F] px-[3rem] py-[2rem]'>
                <div className='flex justify-between'>
                    <span className='font-main text-[2rem] font-medium'>Bimestre {number}</span>
                    <img className='cursor-pointer' src={close} alt="fechar" onClick={closeModal} />
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='font-main font-medium text-[1.125rem]'>Disciplina</span>
                    <div className='flex justify-between'>
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
                    />
                </div>
                <div className='flex justify-end'>
                    <button className='w-[11.5rem] px-8 py-4 rounded-[0.75rem] font-main font-semibold text-[1rem] bg-button text-black'>Confirmar</button>
                </div>
            </div>
        </div>       
    )
}