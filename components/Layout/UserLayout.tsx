import { NextPage } from "next";
import React, { FC } from "react";
import Footer from "../footer";
import Header from "../header";

type Props = {
  children: React.ReactNode;
};
export const layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
