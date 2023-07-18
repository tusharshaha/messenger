import { error } from 'console';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <div className='flex items-center justify-center w-100 h-[100vh]'>
      <div className='rounded p-10 bg-black text-center w-1/3'>
        <h3 className='font-bold text-white uppercase'>Talky</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-10 text-black'>
          <input {...register("name", { required: true })} className='focus:outline-0 border-4 border-indigo-600 py-1 px-4 rounded mb-5' placeholder='Your Name' />
          {errors.name && <span className='text-red-400 text-start mt-[-15px] mb-2'>Name is Required</span>}

          <input type='email' {...register("email", { required: true })} className='focus:outline-0 border-4 border-indigo-600 py-1 px-4 rounded mb-5' placeholder='Your Email' />
          {errors.email && <span className='text-red-400 text-start mt-[-15px] mb-2'>Email is Required</span>}
          
          <input type='password' {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*\d).{6,}$/ })} className='focus:outline-0 border-4 border-indigo-600 py-1 px-4 rounded mb-5' placeholder='Your Password' />{errors.password && <span className='text-red-400 text-start mt-[-15px] mb-2'>Minimum of 6 characters, including 1 number and 1 lowercase letter</span>}

          <button type='submit' className="px-5 py-2 bg-indigo-600 transition duration-300 hover:bg-indigo-700 text-white uppercase rounded">Create User</button>
        </form>
      </div>
    </div>
  );
};

export default Login;