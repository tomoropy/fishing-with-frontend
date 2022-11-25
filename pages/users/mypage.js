import { parseCookies } from "../../helpers/index";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";

export default function MyPagePage({ token }) {
  const { remove, user, loading, setLoading } = useContext(AuthContext);
  console.log(token)

  // useEffect(() => {
  //   redirectLogin();
  // }, []);

  // const redirectLogin = async () => {
  //   if (Object.keys(user).length == 0) {
  //     router.push("/users/login");
  //   }
  // };

  // 退会処理
  const deleteUser = () => {
    if (
      confirm(
        "退会された場合、アカウント情報の復元はできません。本当に退会されますか？"
      )
    ) {
      remove();
    }
  };

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <h1>マイページ</h1>
          <p>{user.name}</p>
          <p>{user.profileText}</p>
          <p>{user.email}</p>

          <h2>投稿一覧</h2>

          <p>
            これは投稿サンプルです。これは投稿サンプルです。これは投稿サンプルです。これは投稿サンプルです。これは投稿サンプルです。
          </p>

          <Button onClick={deleteUser}>退会する</Button>
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ req }) {
  const token = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}
