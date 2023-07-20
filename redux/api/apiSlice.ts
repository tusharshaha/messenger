import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../features/user.reducer";

export interface UserBody {
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
    getUsers: builder.query<User[], void>({
      query: () => "/auth/getAllUser"
    }),
    signup: builder.mutation<User, UserBody>({
      query: (data: UserBody) => ({
        url: "/auth/signup",
        method: "POST",
        body: data
      })
    })
  })
})

export const { useGetUsersQuery, useSignupMutation } = userApi;