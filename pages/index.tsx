import MessageSection from '@/components/home/MessageSection';
import UserListSection from '@/components/home/UserListSection';
import { WebsocketContext } from '@/context/websocket.context';
import privateRoute from '@/utils/privateRoute';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import React, { useContext, useEffect } from 'react';

const Home: React.FC = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentUser);
  const loginUser = useSelector((state: RootState) => state.auth.user);
  const socket = useContext(WebsocketContext);
  useEffect(() => {

    return () => {
      console.log("unregister");
      socket.off("connect");
      socket.off("message");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='flex h-[100vh]'>
      <UserListSection currentUser={currentChat} />
      <MessageSection currentChat={currentChat} loginUser={loginUser} />
    </div>

  );
};

export default privateRoute(Home);
