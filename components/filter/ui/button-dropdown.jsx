import { redirect } from "next/navigation";
import { useState } from "react"

const buttonIcon = ({
    text,
    imageLink,
    altImage,
    isOpen = false
}) => {

    const [isOpenList, setIsOpenList] = useState(false)
    const [isPressedParam, setIsPressedParam] = useState(null)
    const [paramSort, setParamSort] = useState(['Дешевле','Дороже','С большей площадью','С маленькой площадью'])

    const openDropdownList = () => {
        setIsOpenList(!isOpenList)
    }

    const statusParam = (indexParam) => {
        setIsPressedParam(isPressedParam === indexParam ? null : indexParam)
    }

    return (
        <div className="grid gap-4 w-70">
            <button className={`flex items-center justify-between gap-10 border border-dark40 rounded-4xl text-dark px-4 h-12`}>
                {text}
                <img className={`inline ${isOpenList ? 'rotate-270' : 'rotate-90'} transition duration-300 ease-in-out`} width={'24px'} src={imageLink} alt={altImage} onClick={openDropdownList} />
            </button>
            <div className={`absolute mt-16 bg-white w-70 border border-dark40 rounded-4xl transform transition-all duration-300 ease-in-out ${
                isOpenList ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
                {paramSort.map((text, index) => (
                    <div 
                        key={index} 
                        className={`flex ${isPressedParam === index ? 'bg-accent ' : ''} ${isPressedParam === index && index === 3 ? 'rounded-b-4xl bg-accent' : ''} ${isPressedParam === index && index === 0 ? 'rounded-t-4xl bg-accent text-white' : ''} justify-between items-center py-4 px-6  cursor-pointer `}
                        onClick={() => statusParam(index)}
                    >
                        <span className={`text-dark ${isPressedParam === index ? 'text-white ' : ''}`}>{text}</span>
                        {/* <div className={`w-4 h-4 rounded-full transition-all duration-100 ${
                            isPressedParam === index ? 'bg-accent border-transparent' : 'border border-dark40'
                        } border border-dark40`} /> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default buttonIcon;