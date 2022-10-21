import Image from 'next/image';
// media 
import img1 from '../media/testimonial-1.png';
import img2 from '../media/testimonial-2.png';

export default function Testimonials() {
    return(
        <div className='bg-grayBrown flex justify-center px-16 py-32'>
            <div className='w-[50%] mr-4'>
                <h2 className='text-white font-header text-[53px] font-bold pb-8'>
                    See how women have been impacted by the <span className='text-orangeBrown'>power of love:</span>
                </h2>
                <div className='bg-cream shadow-lg rounded-br-[150px] pr-20 pl-10 py-10'>
                    <h3 className='font-header text-[30px] font-bold text-darkBrown pb-8'>
                        “Once Marni held me accountable, it was easier for me to finally recognize when Mr. Right (Mark) came along.”
                    </h3>
                    <p className='font-body text-[21px] text-grayBrown pb-8'>
                        If I hadn’t followed the guiding hand of Marni, I wouldn’t have been ready to accept the moments and 
                        opportunities presented to me every day.
                    </p>
                    <div className='flex gap-x-8'>
                        <div className='w-[62px]'>
                            <Image src={img1} />
                        </div>
                        <span className='font-header font-italic text-[30px]'>Janice</span>
                    </div>
                </div>
            </div>
            <div className='w-[50%] ml-4'>
                <div className='bg-cream shadow-lg rounded-tl-[150px] pl-20 pr-10 py-10'>
                        <h3 className='font-header text-[30px] font-bold text-darkBrown pb-8'>
                            “I am now much more grounded and confident and I feel like I’m living the life that I wanted to live now.”</h3>
                        <p className='font-body text-[21px] text-grayBrown pb-8'>
                            When I first joined the program, the best initial results I got were me actually loving who I am. I think 
                            I always had an appreciation for myself, but I didn’t truly believe that I was worthy of great things.
                        </p>
                        <div className='flex gap-x-8'>
                            <div className='w-[62px]'>
                                <Image src={img2} />
                            </div>
                            <span className='font-header font-italic text-[30px]'>Jill</span>
                        </div>
                    </div>
            </div>
            <div>

            </div>
        </div>
    );
}