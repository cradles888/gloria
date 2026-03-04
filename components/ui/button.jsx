const Button = ({
    text='',
    size,
    variant,
    className='',
    isLoading = false,
    disabled,
    link
    }) => {
    const variants = {
        accent: 'bg-accent text-white',
        white:  'bg-white text-dark',
        outline: 'bg-transparent border border-dark40',
    }

    const sizes = {
        sm: 'px-6 py-2 text-md rounded-4xl',
        md: 'py-3 px-8 text-md rounded-4xl',
        lg: 'text-md rounded-4xl',
        xl: '',

    }

    return(
    <button href={link} className={`min-w-max
            ${variants[variant]}
            ${sizes[size]}
            ${className}
            ${isLoading ? 'cursor-wait opacity-70' : ''}
        `} disabled={isLoading || disabled}>{text}
    </button>
);
}

export default Button;