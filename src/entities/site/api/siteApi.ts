import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from 'src/app/config';
import { ISite } from '../model';


export const siteApi = createApi({
  reducerPath: 'siteApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSites: builder.query<ISite[], any>({
      query: () => `sites`,
    }),
  }),
});

export const {
  useGetSitesQuery,
} = siteApi;
