import "../styles/globals.css";
import dynamic from "next/dynamic";
// const PlayerWithNoSSR = dynamic(() => import("../components/Player"), {
//   ssr: false,
// });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
