import { Box } from "@mui/material";
import { Link, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

export const Users = () => {
  const users = useLoaderData();
  return (
    <Suspense fallback={<>Loading...</>}>
      <Await resolve={users}>
        {(users) => (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {users.map((user) => (
              <Link key={user.id} to={`${user.id}`}>
                {user.name}
              </Link>
            ))}
          </Box>
        )}
      </Await>
    </Suspense>
  );
};

export const loader = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw { status: 500 };
    }
    return res.json();
  } catch (error) {
    throw { status: 503 };
  }
};
