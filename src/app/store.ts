import { configureStore } from '@reduxjs/toolkit'
import { projectApi } from 'src/entities/project/api/projectApi'
import { siteApi } from 'src/entities/site/api/siteApi';

const apiMiddlewares = [
  projectApi.middleware,
  siteApi.middleware,
]

export const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
    [siteApi.reducerPath]: siteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
