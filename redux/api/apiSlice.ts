import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../features/user.reducer";

interface LoginBody {
  email: string,
  password: string
}
interface SignupBody extends LoginBody {
  name: string,
}
interface GetMessageBody {
  from: string,
  to: string
}
interface MessageBody extends GetMessageBody {
  message: string,
}
interface Message {
  fromSelf: boolean,
  message: string
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/auth/getAllUser",
      providesTags: ["Users"]
    }),

    
    signup: builder.mutation<User, SignupBody>({
      query: (data: SignupBody) => ({
        url: "/auth/signup",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Users"]
    }),

    login: builder.mutation<User, LoginBody>({
      query: (data)=> ({
        url: "/auth/login",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Users"]
    }),
    
    sendMessage: builder.mutation<undefined, MessageBody>({
      query: (data: MessageBody) => ({
        url: "/message/sendMessage",
        method: "POST",
        body: data
      })
    }),

    getAllMessage: builder.mutation<Message[], GetMessageBody>({
      query: (data: GetMessageBody) => ({
        url: "/message/getAllMessage",
        method: "POST",
        body: data
      }),
    }),
  })
})

export const { useGetUsersQuery, useGetAllMessageMutation, useSignupMutation, useSendMessageMutation, useLoginMutation } = userApi;