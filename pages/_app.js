import "../styles/globals.css";
import dynamic from "next/dynamic";
import MainLayout from "../layout/main";
// const PlayerWithNoSSR = dynamic(() => import("../components/Player"), {
//   ssr: false,
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component.getLayout ? (
        Component.getLayout(<Component {...pageProps} />)
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  );
}

export default MyApp;
