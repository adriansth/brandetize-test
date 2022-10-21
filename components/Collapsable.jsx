import Image from 'next/image';
// Media
import img from '../media/mask-group.png';
// Icons 
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline';
// React
import { useState } from 'react';

export default function Collapsable() {

    const [isOpenFirst, setIsOpenFirst] = useState(false);
    const [isOpenSecond, setIsOpenSecond] = useState(false);
    const [isOpenThird, setIsOpenThird] = useState(false);

    const handleClickFirst = (e) => {
        e.preventDefault();
        if (isOpenFirst) {
            setIsOpenFirst(false);
        } else {
            setIsOpenFirst(true);
        }
    }

    const handleClickSecond = (e) => {
        e.preventDefault();
        if (isOpenSecond) {
            setIsOpenSecond(false);
        } else {
            setIsOpenSecond(true);
        }
    }

    const handleClickThird = (e) => {
        e.preventDefault();
        if (isOpenThird) {
            setIsOpenThird(false);
        } else {
            setIsOpenThird(true);
        }
    }

    return(
        <div className='flex justify-center items-center p-16 w-full gap-x-24'>
            <div className='w-[60%]'>
                <div>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-darkBrown font-header font-bold text-[30px] pb-8'>Let go of limiting beliefs</h3>
                        {
                            isOpenFirst ? (
                                <MinusCircleIcon 
                                    className='w-10 text-salmon cursor-pointer hover:text-lightSalmon' 
                                    onClick={handleClickFirst}
                                />
                            ) : (
                                <PlusCircleIcon 
                                    className='w-10 text-salmon cursor-pointer hover:text-lightSalmon'
                                    onClick={handleClickFirst}
                                />
                            ) 
                        }
                    </div>
                    {
                        isOpenFirst && 
                        <p className='text-grayBrown font-body text-[20px] pr-16'>
                            If you don’t think you deserve a good man, you’re grappling with accepting that a relationship is 
                            not in the cards for you, or you think you have to settle for a less than ideal soul mate, we’ll help 
                            you identify and learn to let go of what’s holding you back.
                        </p>   
                    }
                </div>
                <div className='h-[2px] w-[100%] bg-grayBrown my-8'></div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-darkBrown font-header font-bold text-[30px] pb-8'>Break down barriers</h3>
                        {
                            isOpenSecond ? (
                                <MinusCircleIcon 
                                    className='w-10 text-salmon cursor-pointer hover:text-lightSalmon' 
                                    onClick={handleClickSecond}
                                />
                            ) : (
                                <PlusCircleIcon 
                                    className='w-10 text-salmon cursor-pointer hover:text-lightSalmon'
                                    onClick={handleClickSecond}
                                />
                            ) 
                        }
                    </div>
                    {
                        isOpenSecond && 
                        <p className='text-grayBrown font-body text-[20px] pr-16'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate animi ea deleniti porro excepturi 
                            repellat nihil laborum quae suscipit perferendis similique enim veniam, maiores temporibus aut nostrum cumque, 
                            cupiditate amet repudiandae nobis, autem itaque reprehenderit ex corrupti. Assumenda nulla, veniam, molestias, 
                            labore consequuntur velit aut quae adipisci at quidem dolores!
                        </p>
                    }
                </div>
                <div className='h-[2px] w-[100%] bg-grayBrown my-8'></div>
                <div>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-darkBrown font-header font-bold text-[30px] pb-8'>Fall in love with your true self</h3>
                        {
                            isOpenThird ? (
                                <MinusCircleIcon 
                                    className='w-10 text-salmon cursor-pointer hover:text-lightSalmon' 
                                    onClick={handleClickThird}
                                />
                            ) : (
                                <PlusCircleIcon 
                                    className='w-10 text-salmon cursor-pointer hover:text-lightSalmon'
                                    onClick={handleClickThird}
                                />
                            ) 
                        }
                    </div>
                    {
                        isOpenThird && 
                        <p className='text-grayBrown font-body text-[20px] pr-16'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi similique deserunt quaerat id. Dolor 
                            repellat ex nesciunt! Sint voluptates eligendi voluptatibus totam distinctio id doloribus illo laudantium 
                            sequi deserunt doloremque nesciunt, qui praesentium corrupti aut velit assumenda sit sunt nobis quod molestias. 
                            Dolores praesentium quae earum cumque assumenda? Inventore, est.
                        </p>
                    }
                </div>
                <div className='h-[2px] w-[100%] bg-grayBrown my-8'></div>
            </div>
            <div className='w-[40%]'>
                <Image src={img} />
            </div>
        </div>
    );
}