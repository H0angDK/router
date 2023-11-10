import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { User } from "./User";
import { UserAlbums } from "./UserAlbums";
export const UserPage = () => {
  const { user, photos } = useLoaderData();
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={user}>
          <User />
        </Await>
        <Await resolve={photos}>
          <UserAlbums />
        </Await>
      </Suspense>
    </>
  );
};

export const loader = async ({ params: { id } }) => {
  try {
    const userRes = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const photosRes = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
    if (!userRes.ok || !photosRes.ok) {
      throw { status: 500 };
    }
    const user = userRes.json();
    const photos = photosRes.json();
    return defer({ user, photos });
  } catch (error) {
    throw { status: 404 };
  }
};
