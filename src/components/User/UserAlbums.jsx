import { List, ListItem, Typography, Box } from "@mui/material";
import { Link, useAsyncValue } from "react-router-dom";

export const UserAlbums = () => {
  const photos = useAsyncValue();
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h4">Albums</Typography>
      <List>
        {photos.map((photo) => (
          <ListItem key={photo.id}>
            <Link to={`/albums/${photo.id}`}>{photo.title}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
