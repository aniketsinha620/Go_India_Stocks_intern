import React from 'react'
import CardData from "../assest/data.js"
const ImageCard = () => {

    return (
        <div className=' flex flex-col gap-5 p-2 w-[100%]  flex justify-center align-center items-center'>
            {CardData.map((card, index) => (
                <div key={index} className='md:w-[90%]  border border-solid border-grey p-2  rounded'>
                    <img src={card.img} alt="" />
                    <h3 className='flex align-center justify-center font-bold '>{card.title}</h3>
                    <p className='text-[12px]'>{card.text}</p>
                </div>
            ))}

        </div>
    )
}

export default ImageCard
