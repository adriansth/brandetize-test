import { useState } from 'react';

// components 
import DayOne from '../components/DayOne';
import DayTwo from '../components/DayTwo';
import DayThree from '../components/DayThree';

export default function Agenda() {

    const [day, setDay] = useState(1);

    const handleClickOne = (e) => {
        e.preventDefault();
        if (day !== 1) {
            setDay(1);
        }
    }
    const handleClickTwo = (e) => {
        e.preventDefault();
        if (day !== 2) {
            setDay(2);
        }
    }
    const handleClickThree = (e) => {
        e.preventDefault();
        if (day !== 3) {
            setDay(3);
        }
    }

    return(
        <div className='flex p-16'>
            <div className='w-[50%]'>
                <h2 className='text-[80px] font-header text-darkBrown font-bold w-[400px]'>What's on agenda</h2>
            </div>
            {/* Days buttons */}
            <div>
                
            </div>
            <div className='w-[50%]'>
                <div 
                    className='bg-lightGrayBrown flex justify-around items-center h-[100px] rounded-full'
                >
                    {
                        day === 1 ? (
                            <span className='font-header font-bold text-darkBrown text-[41px] bg-cream cursor-pointer w-1/3 text-center m-4 rounded-full'>Day 1</span>
                        ) : (
                            <span 
                                className='font-header font-bold text-darkBrown text-[41px] cursor-pointer w-1/3 text-center m-4'
                                onClick={handleClickOne}
                                >
                                    Day 1
                            </span>
                        )
                    }
                    {
                        day === 2 ? (
                            <span className='font-header font-bold text-darkBrown text-[41px] bg-cream cursor-pointer w-1/3 text-center m-4 rounded-full'>Day 2</span>
                        ) : (
                            <span 
                                className='font-header font-bold text-darkBrown text-[41px] cursor-pointer w-1/3 text-center m-4'
                                onClick={handleClickTwo}
                                >
                                    Day 2
                            </span>
                        )
                    }
                    {
                        day === 3 ? (
                            <span className='font-header font-bold text-darkBrown text-[41px] bg-cream cursor-pointer w-1/3 text-center m-4 rounded-full'>Day 3</span>
                        ) : (
                            <span 
                                className='font-header font-bold text-darkBrown text-[41px] cursor-pointer w-1/3 text-center m-4'
                                onClick={handleClickThree}
                                >
                                    Day 3
                            </span>
                        )
                    }
                </div>
                {/* Days content */}
                {
                    day === 1 && (
                        <DayOne />
                    )
                }
                {
                    day === 2 && (
                        <DayTwo />
                    )
                }
                {
                    day === 3 && (
                        <DayThree />
                    )
                }
            </div>
        </div>
    );  
}