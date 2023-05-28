import React from 'react';

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
          <div className='flex gap-2 items-center'>
            <span>icon</span>
            <span>icon</span>
            <span>icon</span>
          </div>
          <input type="text" placeholder='Aa' className='rounded-full px-4 grow bg-neutral-700'/>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;