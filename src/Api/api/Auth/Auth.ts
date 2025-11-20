import { apiSlice } from "../../EntryApi";

export const UserApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    Registration: builder.mutation({
      query: (data) => ({
        url: "/users/register/",
        method: "POST",
        body: data,
      }),
    }),

     Login: builder.mutation({
      query: (data) => ({
        url: "/users/login/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation } = UserApi;
