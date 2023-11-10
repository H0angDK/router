import { ListItem, Stack } from "@mui/material";
import { Suspense } from "react";
import { useLoaderData, NavLink, Await, useAsyncValue } from "react-router-dom";
import { Error } from "../Error";
const ListAlbums = () => {
  const photos = useAsyncValue();
  return (
    <>
      <Stack spacing={0}>
        {photos.map((photo) => (
          <ListItem key={photo.id}>
            <NavLink to={`${photo.id}`}>{photo.title}</NavLink>
          </ListItem>
        ))}
      </Stack>
    </>
  );
};
export const Albums = () => {
  const photos = useLoaderData();
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Await resolve={photos} errorElement={<Error />}>
          <ListAlbums />
        </Await>
      </Suspense>
    </div>
  );
};
export const loader = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=500"
    );
    if (!res.ok) {
      throw { status: 500 };
    }
    return res.json();
  } catch (error) {
    throw { status: 503 };
  }
};
