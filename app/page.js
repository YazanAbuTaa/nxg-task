'use client';
import { Box, Container, Typography } from "@mui/material";
import useDataFetching from "./components/hooks/useApiData";
import Button from "@mui/material";
import MainMenu from "./components/MainMenu";

const Home = () => {
  const { data: users, loading } = useDataFetching('/api/users');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!users) {
    return <div>No users found</div>;
  }

  return (
    <div>
      <Container>
        <Box>
          <MainMenu/>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
