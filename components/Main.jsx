import Image from 'next/image';

// media 
import img from '../media/main-section-image.png';

export default function Main() {
    return(
        <div className='flex gap-x-36 px-[170px] h-screen'>
            {/* Main text container */}
            <div>
                <div className='w-full flex flex-col justify-center pt-8'>
                    <h1 className='font-header text-[60px] font-bold text-normalBrown'>Logo</h1>
                </div>
                <div className='flex flex-col justify-center h-[70%]'>
                    <h2 className='font-header text-[80px] font-bold text-normalBrown pb-5 w-[706px] leading-[98px]'>How to attract your dream partner</h2>
                    <p className='font-body text-[27px] text-grayBrown w-[706px] pb-10 leading-[38px]'>Overcome the beliefs that block your ability to connect with high quality men and learn the real reason why smart, successful women are still single after 40.</p>
                    <button className='bg-salmon h-[70px] rounded-full w-[400px] text-white text-[24px] font-bold shadow-lg hover:bg-lightSalmon'>Download Your Guide Now</button>
                </div>
            </div>
            {/* Main figure container */}
            <div className='w-full mb-10 relative'>
                {/* Figure */}
                <div className='bg-salmon opacity-[13%] h-full w-full rounded-b-full absolute'></div>
                {/* Image */}
                <div className='absolute w-[90%] top-24'>
                    <Image src={img} />
                </div>
            </div>
        </div>
    );
}