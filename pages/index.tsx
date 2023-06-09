import MessageSection from '@/components/home/MessageSection';
import UserListSection from '@/components/home/UserListSection';
import privateRoute from '@/utils/privateRoute';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className='flex'>
      <UserListSection></UserListSection>
      <MessageSection></MessageSection>
    </div>
  );
};

export default privateRoute(Home);
