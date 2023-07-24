import React, { useContext, useEffect, useState } from 'react';
import { BsEmojiSmile } from "react-icons/bs";
import { IoSend, IoCall, IoVideocam } from "react-icons/io5";
import Image from 'next/image';
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react';
import { WebsocketContext } from '@/context/websocket.context';
import { toast } from 'react-hot-toast';
import { useGetAllMessageMutation, useSendMessageMutation } from '@/redux/api/apiSlice';
import { User } from '@/redux/features/user.reducer';
import { Socket } from 'socket.io-client';

interface Res {
  error: { data: { message: string } };
}

interface Props {
  currentChat: User;
  loginUser: User;
  socket: Socket;
}

const MessageSection: React.FC<Props> = ({currentChat, loginUser}) => {
  const socket = useContext(WebsocketContext);
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const [getMessages, { isError, data: messages }] = useGetAllMessageMutation();
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if(currentChat._id){
      (async () => {
        await getMessages({ from: loginUser._id, to: currentChat._id })
      })()
      if (isError) {
        toast.error("Can't get messages!", { id: "message_error" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChat._id, loginUser._id])


  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("message", (data) => {
      console.log(data);
    })
    return () => {
      console.log("unregister");
      socket.off("connect");
      socket.off("message");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleEmojiPicker = () => {
    setShowEmoji(prev => !prev);
  }
  const handleEmojiClick = (emoji: EmojiClickData) => {
    let msg = message;
    msg += emoji.emoji;
    setMessage(msg);
  }

  const handleSendMessage = () => {
    if (message.length === 0) return;
    const regex = /(?:\b(?:https?|ftp|file):\/\/)?(?:www\.)?\S+\.\S+\b/gi;

    if (regex.test(message)) {
      toast.error("Your Message is suspisious!");
      const updatedMsg = message.replace(regex, "");
      return setMessage(updatedMsg);
    }
    sendMessage({
      message,
      from: loginUser._id,
      to: currentChat._id
    }).then(data => {
      const resData = data as Res;
      if (resData?.error?.data.message) {
        toast.error(resData.error?.data?.message, { id: "sendMessage" });
      }
    });
    socket.emit("message", message);
    return setMessage('');
  }
  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  if (!currentChat.name) {
    return <div className='flex grow flex-col items-center justify-center gap-5'>
      <h2>Welcome, {loginUser.name}!</h2>
      <h4>Please Select a chat to Start Conversation.</h4>
    </div>
  }
  return (
    <div className='grow flex flex-col justify-between'>
      {/* top bar  */}
      <div className='flex items-center px-4 py-2 justify-between border-b border-slate-500 sticky top-0'>
        <div className='flex items-center gap-2'>
          <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
            <Image src={currentChat.avatar} height={70} width={70} alt="avatar" />
          </div>
          <div>
            <h4>{currentChat.name}</h4>
            <span className='font-normal text-slate-300'>Active Now</span>
          </div>
        </div>
        <div className='flex gap-6 items-center text-2xl text-sky-500'>
          <button><IoCall /></button>
          <button><IoVideocam /></button>
        </div>
      </div>
      {/* message section  */}
      <div className='chat-message'>
        {
          messages?.map((ele, i) => <div key={i} className={`${ele.fromSelf ? "send" : "recieved"} message`}>
            <div className={`${ele.fromSelf ? "bg-blue-700" : "bg-sky-600"} message-container`}>
              <p>{ele.message}</p>
            </div>
          </div>)
        }
      </div>
      {/* bottom bar  */}
      <div className='sticky bottom-0 px-4 py-5'>
        <div className='flex gap-4 items-center'>
          <div className='relative flex grow'>
            <button onClick={handleEmojiPicker} className='text-sky-400 absolute top-3 left-5'>
              <BsEmojiSmile />
            </button>
            <input
              type="text" placeholder={`${isLoading ? "sending" : "Write a message"} ...`}
              className='rounded-full ps-12 pe-4 py-2 focus:outline-0 bg-sky-950 w-full'
              onKeyDown={handleKeyDown}
              value={message} onChange={(e) => setMessage(e.target.value)}
            />
            {/* emoji picker  */}
            {
              showEmoji && <div className='absolute bottom-16 left-10'><EmojiPicker
                theme={Theme.DARK}
                width={340} height={360}
                onEmojiClick={handleEmojiClick}
                previewConfig={{ showPreview: false }}
                skinTonesDisabled
              /></div>
            }
          </div>
          <button onClick={handleSendMessage} className='text-sky-500 text-2xl'>
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;