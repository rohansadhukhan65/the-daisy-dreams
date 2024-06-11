import "@/styles/main.scss";
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const pop = Poppins({ subsets:['latin'], weight: ["400", "500", "700"] });


export default function App({ Component, pageProps }: AppProps) {
  return <main className={pop.className}> <Component  {...pageProps} /></main>;
}
