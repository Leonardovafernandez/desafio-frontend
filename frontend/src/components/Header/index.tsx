import Button from "../Button"

type Prop = {
    number: number
}

export default function Header({number}: Prop) {
    return(
        <div className="flex justify-between items-center h-[2.5rem] w-full">
            <span className="text-white font-main text-[1.125rem]">Bimestre {number}</span>
            <Button/>
        </div>       
    )
}