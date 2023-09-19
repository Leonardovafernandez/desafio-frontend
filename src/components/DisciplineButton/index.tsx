import useMain from '../../hooks/useMain';

type Props = {
    children: React.ReactNode;
}

type FunctionCardProp = {
    name: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia',
    discipline: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia'
}

type UseMainProviderProps = {
    discipline: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia',
    setDiscipline: (showModal: string) => void, 
}

export default function DisciplineButton({ children }: Props) {
    const { 
        discipline,
        setDiscipline, 
      } = useMain() as UseMainProviderProps;
    
    let name: 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia' = 'Biologia';

    if (typeof children === 'string' && (children === 'Biologia' || children === 'Artes' || children === 'Geografia' || children === 'Sociologia')) {
        name = children as 'Biologia' | 'Artes' | 'Geografia' | 'Sociologia';
    }

    function defineCardClass({ name, discipline }: FunctionCardProp): string | undefined {
        const classMap = {
            Biologia: 'bg-biologyPrimary',
            Artes: 'bg-artPrimary',
            Geografia: 'bg-geographyPrimary',
            Sociologia: 'bg-sociologyPrimary',
        };

        const defaultClass = 'w-[8.125rem] h-[3.3125rem] rounded-[1.25rem]';

        if (discipline === name) {
            return `${defaultClass} ${classMap[name]}`
        }

        if (discipline !== name) {
            return `${defaultClass} ${classMap[name]}  bg-opacity-40`
        }
    }
    
    function selectButton(name: string): void {
        setDiscipline(name);
      }

    return (
        <button className={defineCardClass({ name, discipline })}
        onClick={()=>selectButton(name)}
        >{children}</button>
    )
}