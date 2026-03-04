const cardWB = ({
    title,
    text,
    image,
    alt
}) => {
    return (
        <div className="relative rounded-4xl w-full h-[40vh] lg:w-1/2 lg:min-h-[600px] overflow-hidden">
            <div className="absolute z-10 inset-0 flex flex-col justify-start my-4 p-6">
                <p className="text-white text-4xl font-medium mb-2">{title}</p>
                <p className="text-white/90 text-xl">{text}</p>
            </div>
            <img
                className="absolute inset-0 w-full h-full object-cover bg-top-left"
                src={image}
                alt={alt}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent"></div>
            <div className="w-16 h-16 rounded-full absolute bottom-8 right-6 bg-white flex justify-center items-center">
                <img src="/arrow-right.svg" alt="next" />
            </div>
        </div>
    );
}
export default cardWB;