import { Box, Typography } from "@mui/material";
import { useAsyncValue } from "react-router-dom";
export const User = () => {
  const { name, username, phone, email, website } = useAsyncValue();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h4">{name}</Typography>
      <span>username:  {username}</span>
      <span>phone:  {phone}</span>
      <span>email:  {email}</span>
      <span>site:  {website}</span>
    </Box>
  );
};
