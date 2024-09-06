import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './store/store';
import Root from './routes/root.tsx';
import ErrorPage from './error-page.tsx';
import { loader as rootLoader } from './routes/root.tsx';
import UsersTable from './components/UsersTable/UsersTable.tsx';
import User from './routes/user.tsx';
import UsersPosts from './routes/posts.tsx';
import UserPost from './routes/userPost.tsx';
import About from './routes/aboutMe.tsx';
import MainPage from './routes/mainPage.tsx';

import './index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "users",
        element: <UsersTable />,
      },
      {
        path: "users/:userId",
        element: <User />,
      },
      {
        path: "posts",
        element: <UsersPosts />,
      },
      {
        path: "posts/:postId",
        element: <UserPost />,
      },
      {
        path: "about-me",
        element: <About />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
