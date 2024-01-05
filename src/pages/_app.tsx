import 'bootstrap/dist/css/bootstrap.min.css'
// import "bootstrap/dist/css/bootstrap-with-purgecss.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Top from "@/components/top";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
    </>
  );
}
