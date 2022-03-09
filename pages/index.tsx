import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DualingImage from "public/dualing.png";
import NextSandboxImage from "public/next-sandbox.png";
import NextStaterImage from "public/next-starter.png";
import ParableBoxImage from "public/parable-box.png";
import WithAthHPImage from "public/withath-hp.jpeg";
import { useEffect, useState } from "react";
import { GithubIcon } from "src/component/icon/Github";
import { GithubOutlineIcon } from "src/component/icon/GithubOutline";
import { LinkIcon } from "src/component/icon/Link";
import { TwitterIcon } from "src/component/icon/Twitter";
import { ZennIcon } from "src/component/icon/Zenn";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const LINK_ITEMS = [
    {
      label: "Github | OpenFruits",
      icon: <GithubIcon fill="#181717" size={60} />,
      href: "https://github.com/OpenFruits",
    },
    {
      label: "Twitter | @OpenFruits1996",
      icon: <TwitterIcon fill="#1DA1F2" size={60} />,
      href: "https://twitter.com/OpenFruits1996",
    },
    {
      label: "Zenn | たくみ",
      icon: <ZennIcon fill="#3EA8FF" size={60} />,
      href: "https://zenn.dev/taku1115",
    },
  ];

  const PROJECT_ITEMS = [
    {
      title: "Next Starter",
      image: NextStaterImage,
      href: "https://next-starter-tawny.vercel.app/",
      github: "https://github.com/OpenFruits/next-starter",
    },
    {
      title: "Next Sandbox",
      image: NextSandboxImage,
      href: "https://next-sandbox-eight.vercel.app/",
      github: "https://github.com/OpenFruits/next-sandbox",
    },
    {
      title: "Parable Box",
      image: ParableBoxImage,
      href: "https://parable-box.vercel.app/",
      github: "https://github.com/OpenFruits/parable-box",
    },
    {
      title: "Dualing.app",
      image: DualingImage,
      href: "https://www.dualing.app/",
    },
    {
      title: "WithAth-hp",
      image: WithAthHPImage,
      href: "https://with-ath.vercel.app/",
      github: "https://github.com/OpenFruits/withath-hp",
    },
  ];

  return (
    <>
      <Head>
        <title>OpenFruits | Home</title>
      </Head>
      <h2 className="pb-2 text-xl">Links</h2>
      {isLoading ? (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-3">
          {[...Array(LINK_ITEMS.length)].map((_, index) => (
            <li key={`loading_${index}`} className="max-w-[230px] bg-slate-200 rounded-sm border animate-pulse">
              <div className="h-[135px]" />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-3">
          {LINK_ITEMS.map((item) => (
            <li
              key={item.label}
              className="max-w-[230px] text-gray-700 hover:text-gray-900 hover:bg-slate-50 dark:bg-slate-100 dark:hover:bg-slate-200 rounded-sm border"
            >
              <Link href={item.href}>
                <a target="_blank" rel="noreferrer">
                  <div className="grid place-items-center h-24">{item.icon}</div>
                  <p className="p-2 text-sm border-t dark:border-slate-300">{item.label}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <h2 className="py-2 text-xl">Projects</h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-3">
        {PROJECT_ITEMS.map((item) => (
          <li key={item.title} className="max-w-[230px] text-gray-700 dark:bg-slate-100 rounded-sm border">
            <div className="grid place-items-center h-24">
              <Image src={item.image} alt={item.title} placeholder="blur" width={230} height={96} />
            </div>
            <p className="p-2 text-sm border-t dark:border-slate-300">{item.title}</p>
            <div className="flex gap-4 justify-center mb-2 text-sm">
              {item.github ? (
                <Link href={item.github}>
                  <a target="_blank" rel="noreferrer">
                    <button className="flex gap-2 items-center p-1 hover:text-white hover:bg-slate-800 rounded-md border border-gray-500">
                      <GithubOutlineIcon fill="none" size={20} />
                      Github
                    </button>
                  </a>
                </Link>
              ) : null}
              <Link href={item.href}>
                <a target="_blank" rel="noreferrer">
                  <button className="flex gap-2 items-center p-1 hover:text-white hover:bg-emerald-500 rounded-md border border-gray-500 hover:border-transparent">
                    <LinkIcon fill="none" size={20} />
                    Link
                  </button>
                </a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
