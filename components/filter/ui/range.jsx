'use client'
import { useState } from 'react';
import { Range } from 'react-range';

const RangeInput = ({ step = 0.100, min = 0.0, max = 17.0 }) => {
    const [values, setValues] = useState([0, 17.0]);

    return (
        <div className='border border-dark40 rounded-4xl px-4'>
            <div className="flex  items-center justify-center text-sm text-dark50 w-52 my-3">
                <div className='flex gap-2 justify-start w-[12vw]'>
                    <p className='min-w-max'>От</p> 
                    <input type="text" value={values[0] + ' млн'} name="" id="" className='text-start text-dark font-medium inset-0 w-full transition outline-none' />
                </div>
                {/* <div className='w-12 h-px bg-dark'></div> */}
                <div className='flex justify-end w-[18vw]'>
                    <p className='min-w-max'>До</p> 
                    <input type="text" value={values[1] + ' млн'} name="" id="" className='text-end text-dark font-medium inset-0 w-[50%] outline-none' />
 
                </div>
            </div>
            <Range
                step={step}
                min={min}
                max={max}
                values={values}
                onChange={(newValues) => setValues(newValues)}
                renderTrack={({ props, children }) => {
                    // Вычисляем позиции ползунков в процентах
                    const leftPercent = ((values[0] - min) / (max - min)) * 100;
                    const rightPercent = ((values[1] - min) / (max - min)) * 100;

                    return (
                        <div
                            {...props}
                            className="relative w-full h-0.5"
                            style={{
                                ...props.style,
                            }}
                        >
                            <div
                                className="absolute h-full bg-accent rounded-full"
                                style={{
                                    left: `${leftPercent}%`,
                                    width: `${rightPercent - leftPercent}%`,
                                }}
                            />
                            {children}
                        </div>
                    );
                }}
                renderThumb={({ props, index }) => (
                    <div
                        {...props}
                        key={index}
                        className="w-2.5 h-2.5 bg-accent rounded-full focus:outline-none cursor-pointer"
                        style={{
                            ...props.style,
                        }}
                    />
                )}
            />
        </div>
    )
}

export default RangeInput;