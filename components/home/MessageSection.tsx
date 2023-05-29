import React from 'react';
import { ImAttachment } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";

const MessageSection: React.FC = () => {
  return (
    <div className='grow max-h-screen flex flex-col justify-between'>
      {/* top bar  */}
      <div className='flex items-center justify-between border-b border-blue-400 sticky top-0'>
        <div className='flex items-center gap-2 px-4 py-2'>
          <span>icon</span>
          <div>
            <h4>Mijanur Rahaman</h4>
            <span className='font-normal text-slate-300'>Active Now</span>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <span>call</span>
          <span>video</span>
        </div>
      </div>
      {/* bottom bar  */}
      <div className='sticky bottom-0 px-4 py-2'>
        <div className='flex gap-2 items-center'>
          <div className='relative flex grow'>
            <button className='text-slate-400 absolute top-3 left-5'><ImAttachment /></button>
            <input type="text" placeholder='Write a message ...' className='rounded-full ps-12 py-2 focus:outline-0 bg-neutral-700 grow' />
            <button className='text-slate-400 absolute top-3 right-5'><BsEmojiSmile /></button>
          </div>
          <span>send</span>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;