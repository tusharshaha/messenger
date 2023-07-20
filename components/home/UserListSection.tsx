import { useGetUsersQuery } from '@/redux/api/apiSlice';
import Image from 'next/image';
import React from 'react';

const UserListSection: React.FC = () => {
  const { data, isLoading } = useGetUsersQuery(undefined, { refetchOnMountOrArgChange: true });
  return (
    <div className='w-25 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-blue-300 py-4 px-2 border-r border-slate-500'>
      <div className='flex flex-col gap-2'>
        {isLoading && <p>Loading...</p>}
        {
          data?.map((ele, i) => <div key={i} className='flex items-center gap-2 rounded p-2 hover:bg-sky-950 cursor-pointer'>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
              <Image src={ele.avatar} height={70} width={70} alt="avatar" />
            </div>
            <div>
              <h5>{ele.name}</h5>
              <span className='font-normal text-slate-300'>new message</span>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default UserListSection;