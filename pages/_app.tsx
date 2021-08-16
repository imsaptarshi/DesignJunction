import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SearchProvider } from "../providers/search.provider";
import { AdminProvider } from "../providers/admin.provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdminProvider>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </AdminProvider>
  );
}
export default MyApp;
