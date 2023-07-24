import { WebsocketContext } from '@/context/websocket.context';
import { useGetUsersQuery } from '@/redux/api/apiSlice';
import { addCUser, removeCUser } from '@/redux/features/currentChat.reducer';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiExit } from "react-icons/bi";
import { User, removeUser } from '@/redux/features/user.reducer';

const UserListSection: React.FC<{currentUser: User}> = ({currentUser}) => {
  const { data, isLoading } = useGetUsersQuery();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const filterUsers = data?.filter((ele) => ele._id !== user._id);
  const handleLogout = ()=>{
    dispatch(removeUser());
    dispatch(removeCUser());
  }
  return (
    <div className='w-25 py-4 px-2 border-r border-slate-500'>
      <div className='contacts'>
        {isLoading && <p>Loading...</p>}
        {(!isLoading && !filterUsers?.length) && <p className='text-center'>No User</p>}
        {
          filterUsers?.map(ele => <div key={ele._id} onClick={() => dispatch(addCUser(ele))} className={`${currentUser._id === ele._id ? "bg-sky-950" : ''} flex items-center gap-2 rounded p-2 border border-sky-950 hover:bg-sky-950 cursor-pointer`}>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
              <Image src={ele.avatar} height={70} width={70} alt="avatar" />
            </div>
            <div>
              <h5>{ele.name}</h5>
            </div>
          </div>)
        }
      </div>
      <div className=''>
        <div className='flex items-center gap-2 rounded p-2 bg-sky-900'>
          <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
            <Image src={user.avatar} height={70} width={70} alt="avatar" />
          </div>
          <div className='flex flex-col gap-2'>
            <h5>{user.name} (You)</h5>
            <button title='Logout' onClick={handleLogout} className='text-2xl text-blue-400'>
              <BiExit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListSection;