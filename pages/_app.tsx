import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SearchProvider } from "../providers/search.provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchProvider>
      <Component {...pageProps} />
    </SearchProvider>
  );
}
export default MyApp;
