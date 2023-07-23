import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../features/user.reducer";

export interface UserBody {
  name: string,
  email: string,
  password: string
}
interface GetMessageBody {
  from: string,
  to: string
}
interface MessageBody extends GetMessageBody {
  message: string,
}
interface Message {
  fromSelf: Boolean,
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

    
    signup: builder.mutation<User, UserBody>({
      query: (data: UserBody) => ({
        url: "/auth/signup",
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

export const { useGetUsersQuery, useGetAllMessageMutation, useSignupMutation, useSendMessageMutation } = userApi;