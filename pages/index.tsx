import { NextPage } from "next";
import { Users } from "../components/Users";

const IndexPage: NextPage = (props: any) => {
  return <Users page_id={1} page_size={5} />;
};

export default IndexPage;
