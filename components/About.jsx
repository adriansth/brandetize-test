import Image from 'next/image';

// media 
import img1 from '../media/shape-cluster-1.png';
import img2 from '../media/shape-cluster-2.png';
import img3 from '../media/shape-cluster-3.png';

export default function About() {
    return(
        <div className='pt-8 py-20'>
            <h2 className='font-header font-bold text-normalBrown text-center text-[53px]'>What you'll achieve:</h2>
            <div className='flex justify-center gap-x-48 mt-[48px] h-[80%] items-center'>
                <div className='w-[300px] font-body text-grayBrown flex flex-col h-[500px]'>
                    <Image src={img1} />
                    <p>Why you don't need to settle for unhapiness in this One area of your life.</p>
                </div>
                <div className='w-[300px] font-body text-grayBrown flex flex-col h-[500px] justify-end'>
                    <Image src={img2} />
                    <p>Why you CAN have it all (and how to stop attracting the wrong guys who are intimidated by your success).</p>
                </div>
                <div className='w-[300px] font-body text-grayBrown flex flex-col h-[500px]'>
                    <Image src={img3} />
                    <p>How to break down the walls that keep your authentic self hidden from your forever partner.</p>
                </div>
            </div>
        </div>
    );
}