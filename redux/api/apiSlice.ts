import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../features/user.reducer";

export interface UserBody {
  name: string,
  email: string,
  password: string
}
interface MessageBody {
  message: string,
  from: string,
  to: string
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
    })
  })
})

export const { useGetUsersQuery, useSignupMutation, useSendMessageMutation } = userApi;