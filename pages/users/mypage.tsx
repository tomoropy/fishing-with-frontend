import { Box, Grid, Hidden, ThemeProvider } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { theme } from "../../theme";
import axios from "axios";
import { GetServerSideProps } from "next";
import { API_URL } from "../../config";
import cookie from "cookie";

export default function MyPagePage({ data }: any) {
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
        <Grid container>
          {/* profile area */}
          <Grid item xs={3}>
            <Box
              sx={{
                position: "relative",
                width: 120,
                height: 120,
                borderRadius: 50,
                overflow: "hidden",
                marginY: 4,
                marginX: "auto",
              }}
            >
              <Image src="/sampleIcon.png" layout="fill" alt="header" />
            </Box>
          </Grid>
          <Grid item xs={9}>
            <h2>{data.name}</h2>
            <p>{data.profileText}</p>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookie = ctx.req?.headers.cookie;
  let token = "";
  if (cookie) token = cookie.substr(6);

  try {
    const res = await axios.get(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.data;

    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/users/login",
      },
    };
  }
};
