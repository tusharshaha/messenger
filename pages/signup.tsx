import { useSignupMutation } from '@/redux/api/apiSlice';
import { User, addUser } from '@/redux/features/user.reducer';
import { AppDispatch, RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

interface Res {
  error: { data: { message: string } };
  data: User;
}

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const dispatch = useDispatch<AppDispatch>();
  const [signup, { isLoading, isSuccess }] = useSignupMutation();
  const router = useRouter();
  useEffect(() => {
    if (isLoading) {
      toast.loading("Loading...", { id: "signup" });
    }
    if (isSuccess) {
      toast.success("Successfully Signup", { id: "signup" });
    }
  }, [ isLoading, isSuccess])
  const onSubmit: SubmitHandler<IFormInput> = async signupData => {
    signup(signupData)
      .then(data => {
        const resData = data as Res;
        console.log(resData);
        if (resData?.error?.data.message) {
          toast.error(resData.error?.data?.message, { id: "signup" });
        }else {
          dispatch(addUser(resData.data));
        }
      })
  };
  const user = useSelector((state: RootState) => state.auth.user);

  if (!!user.name) {
    router.replace("/")
    return <h1>Loading...</h1>
  }
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

          <button type='submit' disabled={isLoading} className="px-5 py-2 bg-indigo-600 transition duration-300 hover:bg-indigo-700 text-white uppercase rounded flex items-center justify-center gap-2">
            {isLoading && <span className='inline-block w-[20px] h-[20px] rounded-full border-4 border-blue-400 border-t-blue-200 animate-spin' />}
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;