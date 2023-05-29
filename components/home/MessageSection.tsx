import React, { useRef, useState } from 'react';
import { ImAttachment } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import { IoSend, IoCall, IoVideocam } from "react-icons/io5";
import Image from 'next/image';
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';

const MessageSection: React.FC = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEmojiPicker = () => {
    setShowEmoji(prev => !prev);
  }
  const handleEmojiClick = (emoji: EmojiClickData) => {
    let msg = message;
    msg += emoji.emoji;
    setMessage(msg);
  }
  const handleAttachmentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileInputChange = (e: any) => {
    const file = e.target.files?.[0];
    const maxSize = 10 * 1024 * 1024;

  if (file && file.size > maxSize) {
    // File size exceeds the maximum limit
    alert('File size exceeds the maximum limit.');
    return;
  }
  };
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
            <button onClick={handleAttachmentClick} className='text-blue-400 absolute top-3 left-5'>
              <ImAttachment />
            </button>
            <input
              type="text" placeholder='Write a message ...'
              className='rounded-full ps-12 py-2 focus:outline-0 bg-neutral-700 grow'
              value={message} onChange={(e) => setMessage(e.target.value)}
            />
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".pdf, audio/mpeg, audio/wav, video/mp4, image/jpeg, image/jpg, image/png"
              onChange={handleFileInputChange}
            />
            <button onClick={handleEmojiPicker} className='text-blue-400 absolute top-3 right-5'>
              <BsEmojiSmile />
            </button>
            {/* emoji picker  */}
            {
              showEmoji && <div className='absolute bottom-16 right-10'><EmojiPicker
                theme={Theme.DARK}
                width={340} height={360}
                onEmojiClick={handleEmojiClick}
              /></div>
            }
          </div>
          <button className='text-blue-400 text-2xl'><IoSend /></button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;