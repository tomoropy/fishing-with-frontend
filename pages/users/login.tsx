import { Button, Grid, TextField } from "@mui/material";
import Link from "next/link";

export default function LoginPage() {
  return (
  <>
      <Grid
      container
      spacing={3}
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Grid item xs={8}>
        <h1>ログイン</h1>
      </Grid>
      <Grid item xs={8}>
        <TextField label="Email" />
      </Grid>
      <Grid item xs={8}>
        <TextField label="Password" />
      </Grid>
      <Grid item xs={8}>
        <Button variant="contained">ログイン</Button>
      </Grid>
      <Grid>
        <p>まだ登録されていない方は  <Link href="/users/signup" style={{color: "blue"}}>サインアップ</Link></p>
      </Grid>
    </Grid>
  </>
  )
}

