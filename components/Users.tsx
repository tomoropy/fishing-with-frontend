import useSWR from "swr";
import axios from "axios";
import { FC } from "react";

type User = {
  id: string;
  name: string;
  profileText: string;
  profileImage: string;
  headerImage: string;
  createdAt: string;
  email: string;
};

type Props = {
  page_id: number;
  page_size: number;
};

export const fetcher = async (url: string): Promise<any> => {
  return axios.get(url).then((res) => res.data);
};

export const Users: FC<Props> = (props: Props) => {
  const { page_id, page_size } = props;

  const { data, error } = useSWR(
    `http://localhost:8080/users?page_id=${page_id}&page_size=${page_size}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <p>this is user list</p>
      {data.map((user: User) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.profileText}</p>
        </div>
      ))}
    </>
  );
};
