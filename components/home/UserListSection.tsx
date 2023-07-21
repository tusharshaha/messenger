import { WebsocketContext } from '@/context/websocket.context';
import { useGetUsersQuery } from '@/redux/api/apiSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

const UserListSection: React.FC = () => {
  const { data, isLoading, refetch } = useGetUsersQuery();
  const router = useRouter();
  const socket = useContext(WebsocketContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected")
    })
    socket.on("newUser", () => {
      refetch();
    })
    return () => {
      console.log("unregister");
      socket.off("connect");
      socket.off("message");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='w-25 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-blue-300 py-4 px-2 border-r border-slate-500'>
      <div className='flex flex-col gap-2'>
        {isLoading && <p>Loading...</p>}
        {
          data?.map(ele => <Link key={ele._id} className={router.query.user === ele._id ? "bg-sky-950": ''}  href={`/${ele._id}`}>
            <div className='flex items-center gap-2 rounded p-2 border border-sky-950 hover:bg-sky-950 cursor-pointer'>
              <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                <Image src={ele.avatar} height={70} width={70} alt="avatar" />
              </div>
              <div>
                <h5>{ele.name}</h5>
                <span className='font-normal text-slate-300'>new message</span>
              </div>
            </div>
          </Link>)
        }
      </div>
    </div>
  );
};

export default UserListSection;