import plus from '../../assets/Plus.svg';
import useMain from '../../hooks/useMain';

export default function Button() {
    const { showModal, setShowModal } = useMain();

    return(
        <button className='flex items-center gap-[0.63rem] bg-button  mr-[2.56rem] py-[0.15rem] rounded-[0.75rem]'
        onClick={() => setShowModal(!showModal)}>
            <span className='text-black text-[1rem] font-main font-semibold'>Lançar nota</span>
            <img src={plus} alt="Adicionar" />
        </button>       
    )
}