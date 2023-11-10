import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Users, loader as usersLoader } from "./components/User/Users";
import { Albums, loader as albumsLoader } from "./components/Album/Albums";
import { UserPage, loader as userLoader } from "./components/User/UserPage";
import { AlbumPage, loader as albumLoader } from "./components/Album/AlbumPage";
import { Error } from "./components/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: async () => redirect("/users")
      },
      {
        path: 'albums',
        children: [
          {
            index: true,
            element: <Albums />,
            loader: albumsLoader
          },
          {
            path: ':id',
            element: <AlbumPage />,
            id: "album",
            loader: albumLoader
          }
        ],
      },
      {
        path: 'users',
        children: [
          {
            index: true,
            element: <Users />,
            loader: usersLoader,
          },
          {
            path: ':id',
            element: <UserPage />,
            loader: userLoader,
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
