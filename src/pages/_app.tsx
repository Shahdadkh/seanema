import sloth from "@/assets/fonts/Sloth/fontSloth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/components/Common/base.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sloth.className}>
      <Component {...pageProps} />
    </main>
  );
}
