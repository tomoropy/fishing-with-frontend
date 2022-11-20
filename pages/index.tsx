import { GetServerSideProps, NextPage } from "next";
import { API_URL } from "../config/config";

interface User {
  id: number;
  name: string;
  profileText: string;
  profileImage: string;
  headerImage: string;
  createdAt: string;
  email: String;
}

const IndexPage: NextPage = (props: any) => {
  const users: User[] = props.users;
  return (
    <>
      <h1> tihs is User Page</h1>
      {users.map((user: User) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.profileText}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch user
  const userRes = await fetch(`${API_URL}/users?page_id=1&page_size=5`);
  const users = await userRes.json();

  return {
    props: { users },
  };
};
