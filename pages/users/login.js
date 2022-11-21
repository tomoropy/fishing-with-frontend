import { Button, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../context/AuthContext";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, setError } = useContext(AuthContext);

  useEffect(() => {
    if (error !== "") toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name, password });

    setError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item>
            <h1>ログイン</h1>
          </Grid>
          <ToastContainer />
          <Grid item xs={8}>
            <TextField
              label="ユーザーネーム"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="パスワード"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" type="submit">
              ログイン
            </Button>
          </Grid>
          <Grid>
            <p>
              まだ登録されていない方は{" "}
              <Link href="/users/signup" style={{ color: "blue" }}>
                サインアップ
              </Link>
            </p>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
