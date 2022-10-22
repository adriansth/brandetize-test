export default function DayTwo() {
    return(
        <div>
            {/* Main text */}
            <div className='my-32'>
                <h2 className='text-[35px] font-header text-darkBrown font-bold my-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, accusamus?</h2>
                <p className='text-[20px] font-body text-grayBrown mb-8'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint architecto earum cum doloremque, ex porro fuga excepturi modi deleniti, possimus, consequuntur 
                    dolor perspiciatis cupiditate quos necessitatibus non facilis perferendis error? Amet veniam voluptatum laborum, obcaecati rem ullam consequuntur et provident alias 
                    voluptate maiores maxime adipisci! Iste ipsam eaque quam. Eligendi. 
                </p>
                <p className='text-[20px] font-body text-grayBrown'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae vel doloribus officiis sapiente, magni culpa, asperiores laborum odit omnis quia. Ex velit facilis 
                    itaque libero inventore, eos suscipit, sed voluptate odit dolor pariatur rerum explicabo! Veritatis obcaecati delectus minus, similique ducimus mollitia est porro voluptate. 
                    Fugiat ratione necessitatibus quibusdam?
                </p>
            </div>
            {/* Step 1 */}
            <div className='flex justify-center gap-20'>
                {/* Figures */}
                <div className='relative'>
                    <span className='font-bold text[30px] text-white bg-salmon py-2 px-4 rounded-full absolute z-10'>1</span>
                    <div className='bg-lightSalmon h-full w-1 opacity-50 ml-[18px] absolute z-0'></div>
                </div>
                {/* Text */}
                <div>
                    <h3 className='text-darkBrown font-header text-[30px] font-bold'>Lorem ipsum dolor sit amet.</h3>
                    <p className='text-grayBrown font-body text-[20px] py-16'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora obcaecati ut laboriosam veniam culpa, accusamus, ad delectus illo laudantium animi inventore, 
                        amet deserunt? Distinctio rem architecto vel! Quo, earum provident?
                    </p>
                </div>
            </div>
            {/* Step 2 */}
            <div>
                <div className='flex justify-center gap-20'>
                    {/* Figures */}
                    <div className='relative'>
                        <span className='font-bold text[30px] text-white bg-salmon py-2 px-[15px] rounded-full absolute z-10'>2</span>
                        <div className='bg-lightSalmon h-full w-1 opacity-50 ml-[18px] absolute z-0'></div>
                    </div>
                    {/* Text */}
                    <div>
                        <h3 className='text-darkBrown font-header text-[30px] font-bold'>Lorem ipsum dolor sit amet.</h3>
                        <p className='text-grayBrown font-body text-[20px] py-16'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex dicta illo qui dignissimos nihil, mollitia, temporibus aspernatur similique rerum fugiat! Modi 
                            assumenda deserunt natus inventore mollitia, ratione distinctio aspernatur!
                        </p>
                    </div>
                </div>
            </div>
            {/* Step 3 */}
            <div>
                <div className='flex justify-center gap-20'>
                    {/* Figures */}
                    <div className='relative'>
                        <span className='font-bold text[30px] text-white bg-salmon py-2 px-[15px] rounded-full absolute z-10'>3</span>
                        <div className='bg-lightSalmon h-full w-1 opacity-50 ml-[18px] absolute z-0'></div>
                    </div>
                    {/* Text */}
                    <div>
                        <h3 className='text-darkBrown font-header text-[30px] font-bold'>Lorem ipsum dolor sit amet.</h3>
                        <p className='text-grayBrown font-body text-[20px] py-16'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime unde velit officia odit reiciendis hic qui, molestiae totam quasi nostrum culpa mollitia cum soluta quas 
                            ea sapiente in temporibus! Quibusdam!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}