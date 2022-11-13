import "../styles/globals.css";
import MainLayout from "../layout/main";
import { AuthContextProvider } from "../components/context/authContext";
import AdminLayout from "../layout/adminLayout";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component.getLayout ? (
        Component.getLayout(
          <ThemeProvider>
            <AuthContextProvider>
              {/* <AdminLayout> */}
              <Component {...pageProps} />
              {/* </AdminLayout> */}
            </AuthContextProvider>
          </ThemeProvider>
        )
      ) : (
        <ThemeProvider>
          <AuthContextProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </AuthContextProvider>
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
