import type { NextPage } from "next";
import Head from "next/head";

const Experience: NextPage = () => {
  const textClass = "text-black dark:text-white";

  return (
    <>
      <Head>
        <title>OpenFruits | Experience</title>
      </Head>

      <div className="prose">
        <h4 className={textClass}>2020.05 - 2020.09</h4>
        <ul className={textClass}>
          <li>案件：生産管理システムの開発</li>
          <li>担当業務：機能追加、プログラム修正</li>
          <li>使用技術：Java</li>
        </ul>
        <h4 className={textClass}>2020-9 - 2021-3</h4>
        <ul className={textClass}>
          <li>案件：勤怠管理システムのバージョンアップ</li>
          <li>
            担当業務：React導入
            <ul>
              <li>８割：jQueryからReactへのリプレイス</li>
              <li>２割：ScalaでAPI開発</li>
            </ul>
          </li>
          <li>使用技術：React・TypeScript・Scala</li>
        </ul>
        <h4 className={textClass}>2021.04 -</h4>
        <ul className={textClass}>
          <li>案件：体育会向け就活支援サービスの開発</li>
          <li>担当業務：企画、要件定義、設計、開発、リリース</li>
          <li>使用技術：Next.js・TypeScript・Firebase</li>
        </ul>
      </div>
    </>
  );
};

export default Experience;
