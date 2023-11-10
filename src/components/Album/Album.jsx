import { Link, useAsyncValue, useRouteLoaderData } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export const Album = () => {
  const users = useAsyncValue();
  const [user, setUser] = useState({});
  const { photo } = useRouteLoaderData("album");
  useEffect(() => {
    const getUser = async () => {
      const photoData = await photo;
      setUser(users.find((user) => user.id === photoData.albumId));
    };
    getUser();
  }, [photo, users]);
  return (
    <Box sx={{ py: 1 }}>
      Created by: <Link to={`/users/${user.id}`}>{user.name}</Link>
    </Box>
  );
};
