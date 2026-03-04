'use client'
import { useState } from 'react';
import ButtonParam from './ui/button-select-param'
import Range from '@/components/filter/ui/range';

const filter = () => {
   
    return(
        <div className='my-6'>
            <div className='flex flex-wrap gap-2'>
            <ButtonParam text={'1'}/>
            <ButtonParam text={'2'}/>
            <ButtonParam text={'3'}/>
            <ButtonParam text={'4+'}/>
                <Range/>
            
            </div>
        </div>
    )
}

export default filter;