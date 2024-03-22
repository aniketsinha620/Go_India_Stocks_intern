import Image from 'next/image';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { GoComment } from "react-icons/go";
import { IoShareSocial } from "react-icons/io5";

const Commentcard = () => {
    return (
        <div className='gap-3 bg-gray-200 pb-1 pr-1 md:w-[95%]'>
            <div className=' w-[100%] md:w-[100%] bg-white flex border gap-2 md:gap-0 border-grey border p-2 px-3 rounded-lg' style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}>
                <div className='w-[20%] ' >
                    <Image src="/images/download.jpeg" alt=""
                        className='w-[50px] h-[30px] rounded-full md:w-[50px] md:h-[50px]' />
                </div>


                <div className=' justify-between '>
                    <div className='flex justify-between '>
                        <div className='flex gap-2'>

                            <div className='font-bold  text-[10px] md:text-[20px]'>Lorem ipsum</div>
                            <button className='bg-blue-500 rounded-[12px] px-3 py-1 flex justify-center items-center align-center text-[5px] md:text-[14px]'>sector 2</button>
                        </div>
                        <div className='text-blue-600  text-[10px] md:text-[18px]'>
                            2 min ago
                        </div>

                    </div>
                    <div className=' mb-1 md:mb-3 mt-1 text-[8px] md:mt-2 md:text-[18px]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta tenetur magni neque explicabo ad incidunt. Quas, non fugit itaque ea eveniet quam at. Iusto aliquam at nisi exercitationem, dolore odit.
                    </div>
                    <div className='flex justify-around text-[8px] md:text-[15px] md:md-2'>
                        <div className='flex justify-center align-center items-center gap-2'><FaRegHeart /> 2K</div>
                        <div className='flex justify-center align-center items-center gap-2'><FaRegEye />2K</div>
                        <div className='flex justify-center align-center items-center gap-2'><GoComment />2K Comments</div>
                        <div className='flex justify-center align-center items-center gap-2'><IoShareSocial />Share</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commentcard
