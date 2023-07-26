import { configureStore } from '@reduxjs/toolkit'
import { projectApi } from 'src/entities/project/api/projectApi'
import { siteApi } from 'src/entities/site/api/siteApi';
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import coreSlice from 'src/entities/core/slices/coreSlice';

const apiMiddlewares = [
  projectApi.middleware,
  siteApi.middleware,
]

export const store = configureStore({
  reducer: {
    coreSlice,
    [projectApi.reducerPath]: projectApi.reducer,
    [siteApi.reducerPath]: siteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
