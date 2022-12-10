import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import { DashBoard } from "../components/testDashBoard/Dashboard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DashBoard>
        <Component {...pageProps} />
      </DashBoard>
    </AuthProvider>
  );
}
