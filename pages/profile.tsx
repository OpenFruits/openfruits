import type { CustomNextPage } from "next";
import Head from "next/head";
import { FixedLayout } from "src/layout/FixedLayout";

const Profile: CustomNextPage = () => {
  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>

      <div>
        <h2>プロフィール</h2>
      </div>
    </>
  );
};

Profile.getLayout = FixedLayout;

export default Profile;
