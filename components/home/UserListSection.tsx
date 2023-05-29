import Image from 'next/image';
import React from 'react';

const UserListSection: React.FC = () => {
  const userList = [
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
    { name: "Tushar Kumar Shaha", message: "new message" },
  ]
  return (
    <div className='w-25 max-h-screen overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-blue-300 py-4 px-2'>
      <div className='flex flex-col gap-2'>
        {
          userList.map((ele, i) => <div key={i} className='flex items-center gap-2 rounded p-2 hover:bg-zinc-700 cursor-pointer'>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
              <Image src='/avatar.jpeg' height={70} width={70} alt="avatar" />
            </div>
            <div>
              <h5>{ele.name}</h5>
              <span className='font-normal text-slate-300'>{ele.message}</span>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default UserListSection;