import { parseCookies } from "../../helpers/index";
import { useRouter } from "next/router";
import { Button, Grid, Input, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { API_URL } from "../../config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/system";

export default function MyPagePage({ data }) {
  const router = useRouter() 
  const { remove, user, loading } = useContext(AuthContext);
  const [values, setValues] = useState({
    name: user.name,
    profileText: user.profileText,
    email: user.email,
    password: "",
  });

  const [nameEditFlag, setNameEditFlag] = useState(false);
  const [profileTextEditFlag, setProfileTextEditFlag] = useState(false);
  const [emailEditFlag, setEmailEditFlag] = useState(false);
  const [passwordEditFlag, setPasswordEditFlag] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitされました");

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }

    if (values.password == "") {
      toast.error("パスワードを入力してください");
      return;
    }

    console.log(JSON.stringify(values))
    const res = await fetch(`${API_URL}/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify(values),
    });

    console.log(res);

    if (!res.ok) {
      toast.error(res.statusText);
    } else {
      toast.success("ユーザー情報を変更しました");
      router.reload()
    }
  };

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
      <ToastContainer />
      {loading ? (
        <p>loading...</p>
      ) : (
      <>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <h1>マイページ</h1>
          <h2>プロフィール</h2>
          {profileTextEditFlag ? (
            <>
              <TextField
                name="profileText"
                value={values.profileText}
                onChange={handleInputChange}
              />
              <Button onClick={() => setProfileTextEditFlag(false)}>
                キャンセル
              </Button>
            </>
          ) : (
            <>
              <p>{user.profileText}</p>
              <Button onClick={() => setProfileTextEditFlag(true)}>編集</Button>
            </>
          )}

          <h2>なまえ</h2>
          <p>{user.name}</p>
          <Button>編集</Button>
          <h2>Eメール</h2>
          <p>{user.email}</p>
          <Button>編集</Button>

          <h2>パスワード (必須)</h2>
          <TextField
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
          <Button onClick={handleSubmit} type="submit">
            確定
          </Button>

          <h2>投稿一覧</h2>

          <p>
            これは投稿サンプルです。これは投稿サンプルです。これは投稿サンプルです。これは投稿サンプルです。これは投稿サンプルです。
          </p>

          <Button onClick={deleteUser}>退会する</Button>
        </Grid>
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ req }) {
  const data = parseCookies(req);

  return {
    props: {
      data,
    },
  };
}
