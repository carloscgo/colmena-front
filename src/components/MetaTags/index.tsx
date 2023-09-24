import Head from "next/head";
import { appName } from "@/utils/common";

export default function MetaTags() {
  return (
    <Head>
      <title>{appName}</title>
      <meta name="description" content={appName} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
