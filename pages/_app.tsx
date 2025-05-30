import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '../css/Home.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
