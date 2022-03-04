import type { CustomNextPage } from "next";
import Head from "next/head";
import { FixedLayout } from "src/layout/FixedLayout";

const Experience: CustomNextPage = () => {
  return (
    <>
      <Head>
        <title>Experience Page</title>
      </Head>

      <div>
        <h2>経験</h2>
      </div>
    </>
  );
};

Experience.getLayout = FixedLayout;

export default Experience;
