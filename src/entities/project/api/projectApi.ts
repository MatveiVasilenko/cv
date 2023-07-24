import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from 'src/app/config';
import { IProjectLight } from '../model';


export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProjects: builder.query<IProjectLight[], any>({
      query: () => `projects`,
    }),
  }),
});

export const {
  useGetProjectsQuery,
} = projectApi;
