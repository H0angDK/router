import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Album } from "./Album";
import { GridAlbums } from "./GridAlbums";
import { Typography } from "@mui/material";

export const AlbumPage = () => {
  const { users, photos, photo } = useLoaderData();
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={photo}>
          {(photo) => (
            <Typography variant="h4">
              {photo.title}
            </Typography>
          )}
        </Await>
        <Await resolve={users}>
          <Album />
        </Await>
        <Await resolve={photos}>
          <GridAlbums />
        </Await>
      </Suspense>
    </>
  );
};

export const loader = async ({ params: { id } }) => {
  try {
    const usersRes = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const photosRes = await fetch(
      `https://jsonplaceholder.typicode.com/photos`
    );
    const photoRes = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    if (!usersRes.ok || !photosRes.ok || !photoRes.ok) {
      throw { status: 500 };
    }
    const photos = photosRes.json();
    const photo = photoRes.json();
    const users = usersRes.json();
    return defer({ users, photos, photo });
  } catch (error) {
    throw { status: 404 };
  }
};
