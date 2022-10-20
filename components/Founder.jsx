import Image from 'next/image';

// media 
import img from '../media/marni-image-cluster.png';
import cosmopolitan from '../media/cosmopolitan-logo.png';
import abc from '../media/abc-logo.png';
import drPhil from '../media/dr-phil-logo.png';
import glamour from '../media/glamour-logo.png';
import oprah from '../media/oprah-logo.png';

export default function Founder() {
    return(
        <div className='w-screen pt-16 px-16'>
            <div className='flex justify-center gap-x-20'>
                <div className='w-[632px]'>
                    <Image src={img} />
                </div>
                <div className='w-[40%]'>
                    <h2 className='text-[92px] font-header font-bold text-normalBrown mb-10'>Meet our founder, <span className='text-lightSalmon'>Marni</span></h2>
                    <p className='text-[27px] mb-10 text-grayBrown'>
                        Having been married for 17 years, divorced, and successfully dated again in today's complex social environment, and now happily married, Marni understands what it feels like to be
                        lonely and sick of wasting time going on dates and having relationships with unavailable man that go nowhere.
                    </p>
                    <p className='text-[27px] mb-10 text-grayBrown'>
                        Through her own journwy to find love, Marni discovered that creating a process to shorten the journey for other women suffering from the inability to create emotionally safe and
                        fulfilling life relationships was truly the mission of her soul and purpose.
                    </p>
                    <button className='bg-salmon h-[70px] rounded-full w-[450px] text-white text-[24px] font-bold shadow-lg'>Discover Marni's Proven Process</button>
                </div>
            </div>
            <div className='flex items-center justify-around h-[100px] mt-20'>
                <div className='w-[80px]'>
                    <Image src={oprah} />
                </div>
                <div className='w-[170px]'>
                    <Image src={drPhil} />
                </div>
                <div className='w-[270px]'>
                    <Image src={cosmopolitan} />
                </div>
                <div className='w-[220px]'>
                    <Image src={glamour} />
                </div>
                <div className='w-[100px]'>
                    <Image src={abc} />
                </div>
            </div>
        </div>
    );
}