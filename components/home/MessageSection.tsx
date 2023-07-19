import React, { useContext, useEffect, useState } from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import { IoSend, IoCall, IoVideocam } from "react-icons/io5";
import Image from 'next/image';
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import { WebsocketContext } from '@/context/websocket.context';

const MessageSection: React.FC = () => {
  const socket = useContext(WebsocketContext);
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("connected");
    });
    socket.on("message", (data)=>{
      console.log(data);
    })
    return () => {
      console.log("unregister");
      socket.off("connect");
      socket.off("message");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const handleEmojiPicker = () => {
    setShowEmoji(prev => !prev);
  }
  const handleEmojiClick = (emoji: EmojiClickData) => {
    let msg = message;
    msg += emoji.emoji;
    setMessage(msg);
  }

  const handleSendMessage = () => {
    if(message.length === 0) return;
    const regex = /(?:\b(?:https?|ftp|file):\/\/)?(?:www\.)?\S+\.\S+\b/gi;

    if (regex.test(message)) {
      alert("Your message is suspicious!");
      const updatedMsg = message.replace(regex, "");
      return setMessage(updatedMsg);
    }
    socket.emit("message", message);
    return setMessage('');
  }
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div className='grow flex flex-col justify-between'>
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
            <button onClick={handleEmojiPicker} className='text-blue-400 absolute top-3 left-5'>
              <BsEmojiSmile />
            </button>
            <input
              type="text" placeholder='Write a message ...'
              className='rounded-full ps-12 pe-4 py-2 focus:outline-0 bg-neutral-700 w-full'
              onKeyDown={handleKeyDown}
              value={message} onChange={(e) => setMessage(e.target.value)}
            />
            {/* emoji picker  */}
            {
              showEmoji && <div className='absolute bottom-16 left-10'><EmojiPicker
                theme={Theme.DARK}
                width={340} height={360}
                onEmojiClick={handleEmojiClick}
                previewConfig={{showPreview: false}}
                skinTonesDisabled
              /></div>
            }
          </div>
          <button onClick={handleSendMessage} className='text-blue-400 text-2xl'>
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;