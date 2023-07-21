import React from 'react';
import UserListSection from './UserListSection';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex h-[100vh]'>
      <UserListSection></UserListSection>
      {children}
    </div>
  );
};

export default Layout;