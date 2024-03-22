"use client"
import { useState } from 'react';
import ImageCard from "@/components/ImageCard";
import Commentcard from "@/components/Commentcard";

export default function Home() {
  const [activeTab, setActiveTab] = useState('comment');
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  const renderCommentCards = () => {
    const commentCards = [];
    for (let i = 0; i < 12; i++) {
      commentCards.push(<Commentcard key={i} />);
    }
    return commentCards;
  };

  return (
    <div>
      <div className='block md:hidden'>
        <div className=''>
          <div className="flex items-center justify-between bg-grey  w-[100%]  ">
            <div className='h-[60px] w-[3px] bg-black absolute rounded-corner'></div>
            <div
              className={`cursor-pointer p-3 w-[50%] text-white ${activeTab === 'comment' ? 'border-solid border-2 border-b-red-500 bg-[#03045e] border-r-[#03045e]' : ' bg-[#0096c7] font-semibold'}`}
              onClick={() => setActiveTab('comment')}
            >
              Discussion Forum
            </div>
            <div
              className={`cursor-pointer p-3 w-[50%] text-white ${activeTab === 'image' ? 'border-solid border-2 border-b-red-500 bg-[#03045e] border-l-[#03045e] ' : 'bg-[#0096c7] font-semibold'}`}
              onClick={() => setActiveTab('image')}
            >
              Market Stories
            </div>
            <div className='h-[60px] w-[3px] bg-black absolute rounded-corner top-0 right-0'></div>
          </div>
        </div>

        <div className="flex w-full">
          <div className={`flex flex-col gap-3 md:w-[200%] w-[100%] ${activeTab === 'comment' ? 'md:block' : 'hidden'} p-3`}>
            {renderCommentCards()}
          </div>
          <div className={`md:w-[80%] w-[100%] ${activeTab === 'image' ? 'block' : 'hidden'}`}>
            <ImageCard />
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className={`flex w-[100%]  p-0  ${isOpen ? 'gap-5' : ''}`}>
          <div className="flex ml-4 flex-col gap-3 w-[80%]  pt-3">

            <h1 className='bg-gray-200 text-red-500 p-2 rounded text-[20px] font-bold w-[95%]'>DISSCUSSION FOURM</h1>
            {renderCommentCards()}

          </div>
          <div className="w-[30%] p-3 flex flex-col justify-center items-center">
            <h1 className='bg-gray-200 w-[85%]  text-red-500 p-2 rounded text-[20px] font-bold w-[95%]'>MARKET STORIES</h1>

            <ImageCard isOpen={isOpen} toggleNavbar={toggleNavbar} />
          </div>
        </div>
      </div>
    </div >
  );
}
