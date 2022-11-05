import "../styles/globals.css";
import dynamic from "next/dynamic";
import MainLayout from "../layout/main";
import { AuthContextProvider } from "./context/authContext";
// const PlayerWithNoSSR = dynamic(() => import("../components/Player"), {
//   ssr: false,
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <AuthContextProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AuthContextProvider>
      )}
    </>
  );
}

export default MyApp;
