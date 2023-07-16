import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/components/Home/css/base.css";
import "@/components/Home/css/embla.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
