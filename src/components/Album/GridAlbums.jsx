import { Box, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useAsyncValue, useRouteLoaderData } from "react-router-dom";

export const GridAlbums = () => {
  const photos = useAsyncValue();
  const { photo } = useRouteLoaderData("album");
  const [photoRender, setPhotoRender] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const photoData = await photo;
      setPhotoRender(
        photos.filter((photo) => photoData.albumId === photo.albumId)
      );
    };
    getUser();
  }, [photos, photo]);
  return (
    <Box sx={{ mx: "auto", width: "90%" }}>
      <Grid container gap={2}>
        {photoRender.map((photo) => (
          <Grid key={photo.id}>
            <Box>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
