import React from 'react';

const UserListSection: React.FC = () => {
  const userList = [
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
    {icon: "icon", name: "Tushar Kumar Shaha", message: "new message"},
  ]
  return (
    <div className='w-25 max-h-screen overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-blue-300 pe-4'>
      <div className='flex flex-col gap-4'>
        {
          userList.map((ele, i)=> <div key={i} className='flex items-center gap-2'>
            <span>{ele.icon}</span>
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