import Button from "../Button"

type Prop = {
    number: number
}

export default function Header({number}: Prop) {
    return(
        <div className="flex justify-between items-center h-[2.5rem] small:w-[400.894px] large:w-[902.748px]">
            <span className="text-white font-main text-[1.125rem]">Bimestre {number}</span>
            <div className="flex small:justify-self-end">
                <Button/>
            </div>
        </div>       
    )
}