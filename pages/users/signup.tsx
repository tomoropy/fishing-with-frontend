import {
  Button,
  FormGroup,
  Grid,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // const { register, error } = useContext(AuthContext);

  // useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!");
      return;
    }

    // register({ username, email, password });
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
            <h1>ユーザー登録</h1>
          </Grid>
          <ToastContainer />
          <Grid item xs={8}>
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <TextField
              label="パスワード (確認)"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="ユーザーネーム"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={7}
              placeholder="自己紹介文"
              style={{ width: 400 }}
            />
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" type="submit">
              サインアップ
            </Button>
          </Grid>
          <Grid>
            <p>
              すでに登録済みの方は{" "}
              <Link href="/users/login" style={{ color: "blue" }}>
                ログイン
              </Link>
            </p>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SignUpPage;
