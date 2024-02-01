import Head from "next/head";
import Image from "next/image";
import { css } from "@emotion/react";

const image = css`
  width: 100%;
  height: auto;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Timer App</title>
        <meta name="description" content="Coffee Timer App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        css={image}
        src="/coffee-barista.png"
        width={500}
        height={500}
        alt="hoge"
        priority
      />
    </>
  );
}
