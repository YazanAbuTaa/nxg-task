'use client';
import useDataFetching from "./components/hooks/useApiData";

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
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
