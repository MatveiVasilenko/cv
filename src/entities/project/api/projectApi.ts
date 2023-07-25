import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from 'src/app/config';
import { IProject, IProjectLight } from '../model';


export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProjects: builder.query<IProjectLight[], any>({
      query: () => `projects`,
    }),
    getProject: builder.query<IProject, {
      id: string;
    }>({
      query: ({ id }) => `projects/${id}`,
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectQuery,
} = projectApi;
