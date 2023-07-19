import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface UserData {
  name: string,
  avatar: string
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserData[], void>({
      query: () => "/auth/getAllUser"
    })
  })
})

export const { useGetUsersQuery } = userApi;