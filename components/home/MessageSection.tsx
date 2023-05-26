import React from 'react';

const MessageSection: React.FC = () => {
  return (
    <div className='grow'>
      {/* top bar  */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span>icon</span>
          <div>
            <h4>Mijanur Rahaman</h4>
            <span className='font-normal text-slate-500'>Active Now</span>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <span>call</span>
          <span>video</span>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;