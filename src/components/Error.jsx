import { Box, Typography } from "@mui/material";
import {
  useRouteError,
  useNavigate,
} from "react-router-dom";
const ERRORS = {
  500: "Внутренняя ошибка сервера",
  404: "Ресурс не найден",
  503: "Сервис недоступен",
};
export const Error = () => {
  const error = useRouteError();
  const message = ERRORS[error.status] || "Something goes wrong!";
  const navigate = useNavigate(-1);
  return (
    <Box sx={{ fontSize: 40, textAlign: "center" }}>
      {message}
      <Typography
        sx={{ fontSize: 25, textDecoration: "underline" }}
        variant="body1"
        onClick={() => navigate(-1)}
      >
        Вернуться назад
      </Typography>
    </Box>
  );
};
