export default function Footer() {
    return(
        <div className='flex justify-center w-[full] mx-16 my-8 gap-4'>
            <span className='font-body text-grayBrown text-[21px]'>Copyright © 2022 Dating with Dignity. All Rights Reserved.</span>
            <span className='font-body text-grayBrown text-[21px]'>|</span>
            <span className='font-body text-grayBrown text-[21px] cursor-pointer hover:underline'>Terms of Service</span>
            <span className='font-body text-grayBrown text-[21px] cursor-pointer hover:underline'>Privacy Policy</span>
        </div>
    );
}