import { Box, Grid, Hidden, ThemeProvider } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import { parseCookies } from "../../helpers/index";
import { theme } from "../../theme";

export default function MyPagePage({ data }) {
  const { user } = useContext(AuthContext);
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Box
          position="relative"
          sx={{
            height: 300,
          }}
        >
          <Image src="/sampleHeader.jpg" layout="fill" alt="header" />
        </Box>
        <Grid container spacing={2} style={{ wordBreak: "breakWord" }}>
          {/* profile area */}
          <Grid item sx={3} >
            <Box
              sx={{
                position: "relative",
                width: 150,
                height: 150,
                borderRadius: 50,
                overflow: "hidden",
              }}
            >
              <Image src="/sampleHeader.jpg" layout="fill" alt="header" />
            </Box>

            <Box>
              <h2>{user.name}</h2>
              <p>{user.profileText}</p>
            </Box>
          </Grid>
          <Grid item sx={9}>
            <h2>投稿一覧</h2>
            <p>
              これは投稿サンプルです。これは投稿サンプルです。これは投稿サンプルです。これは投稿サンプルです。これは投稿サンプルです。
            </p>
          </Grid>
        </Grid>
      </ThemeProvider>
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
