type Props = {
    text: string
}

export default function Tooltip({text}: Props){
    return(
        <div className="z-100 h-fit w-fit text-center rounded-[0.75rem] text-white bg-[#0F0F0F] border-solid border-[1px] border-[#424242] px-8 py-2 absolute left-0 bottom-11">
            <span>{text}</span>
        </div>
    )
}