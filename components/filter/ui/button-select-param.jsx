import { useState } from "react"

const buttonSelectParam = ({
    text,
}) => {

    const [isStateButton, setIsStateButton] = useState(false)

    const toggleParam = () => {
        setIsStateButton(!isStateButton)
    }

    return (
        <button onClick={toggleParam} className={`border border-dark40 rounded-4xl text-dark py-2 px-6 ${isStateButton ? 'bg-accent text-white border-transparent' : ''}`}>
            {text}
        </button>
    );
}

export default buttonSelectParam;