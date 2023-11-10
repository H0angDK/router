import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        borderBottom: 2,
        py: 1,
        fontSize: 18,
        gap: 3,
        justifyContent: "flex-end",
      }}
    >
      <NavLink
        to="/albums"
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive ? "red" : "",
            fontWeight: isActive ? "bold" : "",
          };
        }}
      >
        Albums
      </NavLink>
      <NavLink
        to="/users"
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive ? "red" : "",
            fontWeight: isActive ? "bold" : "",
          };
        }}
      >
        User
      </NavLink>
    </Box>
  );
};
