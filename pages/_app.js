import "../styles/globals.css";
import MainLayout from "../layout/main";
import { AuthContextProvider } from "../components/context/authContext";
import AdminLayout from "../layout/adminLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {Component.getLayout ? (
        Component.getLayout(
          <AuthContextProvider>
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          </AuthContextProvider>
        )
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
