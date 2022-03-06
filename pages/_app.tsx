import "../src/style/index.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Layout } from "src/layout";

const MyApp = (props: AppProps) => {
  return (
    <>
      <Head>
        <meta name="description" content="Starter Template by Next.js and TailwindCSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Layout>
          <props.Component {...props.pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
