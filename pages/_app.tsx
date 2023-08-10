import { Layout } from "../components/Layouts";
import { LoginModel } from "../components/Models/LoginModel";
import { RegisterModel } from "../components/Models/RegisterModal";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import EditModal from "@/components/Models/EditModal";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <LoginModel />
      <RegisterModel />
      <EditModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
