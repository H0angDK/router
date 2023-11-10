import { Container, Box } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <Container
      sx={{
        mx: "auto",
        my: 1,
      }}
    >
      <Header />
      <Box
        sx={{
          px: 2,
          py: 1,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
};
