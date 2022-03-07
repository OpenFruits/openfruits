import type { NextPage } from "next";
import Head from "next/head";

const Profile: NextPage = () => {
  const textClass = "text-black dark:text-white";

  return (
    <>
      <Head>
        <title>OpenFruits | Profile</title>
      </Head>

      <div className="prose">
        <h2 className={textClass}>A Front-End Engineer based in Tokyo.</h2>
        <h3 className={textClass}>成長中毒, 25歳</h3>
        <div className="hover:bg-slate-200 dark:hover:bg-slate-700">
          <a
            className="no-underline"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/OpenFruits1996/status/1491843141665947650?ref_src=twsrc%5Etfw"
          >
            <blockquote className={textClass}>
              <p className="m-0">フロントエンドエンジニアというプレイヤーとして活躍したい</p>
              <small>- @OpenFruits1996 | February 10, 2022</small>
            </blockquote>{" "}
          </a>
        </div>
        <h4 className={textClass}>やりたいこと</h4>
        <ul className={textClass}>
          <li>Webフロントエンドを主戦場として生きる</li>
          <li>チーム開発を楽しむ</li>
          <li>定期的な海外旅行</li>
        </ul>
        <h4 className={textClass}>自信のあること</h4>
        <ul className={textClass}>
          <li>コミュニケーション：元営業マン</li>
          <li>ポシティブ：逆境こそ人生のネタ</li>
          <li>向上心：成長や達成感が生きがい</li>
          <li>タフ：鋼のメンタルと有り余った体力</li>
          <li>アルコール：生きがい２</li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
