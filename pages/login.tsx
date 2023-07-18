import React from 'react';

const Login = () => {
  return (
    <div className='flex items-center justify-center w-100 h-[100vh]'>
      <div className='rounded p-10 bg-black text-center uppercase'>
        <h3 className='font-bold text-white'>Talky</h3>
        <form action="" className='flex flex-col gap-4 mt-10 text-black'>
          <input type="text" className='focus:outline-0 border-4 border-indigo-600 py-1 px-4 rounded' name="" id="" placeholder='Your Name' />
          <input type="email" className='focus:outline-0 border-4 border-indigo-600 py-1 px-4 rounded' name="" id="" placeholder='Your Email' />
          <input type="password" className='focus:outline-0 border-4 border-indigo-600 py-1 px-4 rounded' name="" id="" placeholder='Your Password' />
          <button className="px-5 py-2 bg-indigo-600 transition duration-300 hover:bg-indigo-700 text-white uppercase rounded">Create User</button>
        </form>
      </div>
    </div>
  );
};

export default Login;