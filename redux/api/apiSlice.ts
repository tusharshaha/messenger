import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../features/user.reducer";

export interface UserBody {
  name: string,
  email: string,
  password: string
}
export interface Users extends User{
  _id: string
}
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
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
    })
  })
})

export const { useGetUsersQuery, useSignupMutation } = userApi;