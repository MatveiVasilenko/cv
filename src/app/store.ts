import { configureStore } from '@reduxjs/toolkit'
import { projectApi } from 'src/entities/project/api/projectApi'

const apiMiddlewares = [
  projectApi.middleware,
]

export const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
