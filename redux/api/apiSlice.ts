import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserData {
  name: string,
  avatar: string
}

interface UserBody {
  name: string,
  email: string,
  password: string
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserData[], void>({
      query: () => "/auth/getAllUser"
    }),
    signup: builder.mutation<UserData, UserBody>({
      query: (data: UserBody) => ({
        url: "/auth/signup",
        method: "POST",
        body: data
      })
    })
  })
})

export const { useGetUsersQuery, useSignupMutation } = userApi;