import React from 'react';
import { ImAttachment } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import { IoSend, IoCall, IoVideocam } from "react-icons/io5";
import Image from 'next/image';

const MessageSection: React.FC = () => {
  return (
    <div className='grow max-h-screen flex flex-col justify-between'>
      {/* top bar  */}
      <div className='flex items-center px-4 py-2 justify-between border-b border-slate-500 sticky top-0'>
        <div className='flex items-center gap-2'>
          <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
            <Image src='/avatar.jpeg' height={70} width={70} alt="avatar" />
          </div>
          <div>
            <h4>Mijanur Rahaman</h4>
            <span className='font-normal text-slate-300'>Active Now</span>
          </div>
        </div>
        <div className='flex gap-6 items-center text-2xl text-blue-400'>
          <button><IoCall /></button>
          <button><IoVideocam /></button>
        </div>
      </div>
      {/* bottom bar  */}
      <div className='sticky bottom-0 px-4 py-2'>
        <div className='flex gap-4 items-center'>
          <div className='relative flex grow'>
            <button className='text-blue-400 absolute top-3 left-5'><ImAttachment /></button>
            <input type="text" placeholder='Write a message ...' className='rounded-full ps-12 py-2 focus:outline-0 bg-neutral-700 grow' />
            <button className='text-blue-400 absolute top-3 right-5'><BsEmojiSmile /></button>
          </div>
          <button className='text-blue-400 text-2xl'><IoSend /></button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;