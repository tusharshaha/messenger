import { WebsocketContext } from '@/context/websocket.context';
import { useGetUsersQuery } from '@/redux/api/apiSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';

const UserListSection: React.FC = () => {
  const { data, isLoading, refetch } = useGetUsersQuery();
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const socket = useContext(WebsocketContext);
  const filterUsers = data?.filter((ele) => ele._id !== user.id);
  const users = [
    { _id: 1, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 2, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 3, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 4, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 5, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 6, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 7, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 8, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 9, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 10, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 11, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 12, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 13, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 14, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 15, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 16, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 17, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 18, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 19, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },
    { _id: 20, name: "tus", avatar: "https://i.ibb.co/Z2bBfyD/avatar3.jpg" },

  ]
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
    <div className='w-25 py-4 px-2 border-r border-slate-500'>
      <div className='contacts'>
        {isLoading && <p>Loading...</p>}
        {
          filterUsers?.map(ele => <Link key={ele._id} className={router.query.user === ele._id ? "bg-sky-950" : ''} href={`/${ele._id}`}>
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
      <div className=''>
        <div className='flex items-center gap-2 rounded p-2 bg-sky-900'>
          <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
            <Image src={user.avatar} height={70} width={70} alt="avatar" />
          </div>
          <div>
            <h5>{user.name} (You)</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListSection;