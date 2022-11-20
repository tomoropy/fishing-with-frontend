import { GetServerSideProps, NextPage } from "next";
import { API_URL } from "../../config";
import { User } from "../../types/user";

const UserPage: NextPage = (props: any) => {
  const user: User = props.user;

  return (
    <>
      <h1>This is User id = {user.id} Page</h1>
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.profileText}</p>
        <p>{user.email}</p>
      </div>
    </>
  );
};

export default UserPage;

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  // Fetch user
  const userRes = await fetch(`${API_URL}/users/${id}`);
  const user = await userRes.json();

  return {
    props: { user },
  };
};
