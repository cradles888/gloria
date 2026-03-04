import { redirect } from "next/navigation";
import { useState } from "react"

const buttonIcon = ({
    text,
    imageLink,
    altImage,
    isOpen = false
}) => {
    
    return (
        <button className={`inline-block gap-10 border border-dark40 rounded-4xl text-dark px-4 h-12`}>
            {text}
            <img className={`inline ${isOpen ? '-rotate-90' : 'rotate-90'}`} width={'24px'} src={imageLink} alt={altImage}/>
        </button>
    );
}

export default buttonIcon;