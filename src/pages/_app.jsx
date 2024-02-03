import Head from "next/head";
import "@/styles/reset.css";
import "@/styles/global.css";
import { css } from "@emotion/react";

import { useState } from "react";
import { modeContext } from "../components/modeProvider";

const nightMode = css`
  background-color: #472712;
`;

const lightMode = css`
  background-color: #fff4e5;
`;

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState(true); // こんなところでuseState使っていいのか？
  const modeStyle = mode ? lightMode : nightMode;
  return (
    <>
      <Head>
        <title>Coffee Timer App</title>
        <meta name="description" content="Coffee Timer App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Providerのvalueは{()}ではなく、{{}} */}
      <modeContext.Provider value={{ mode, setMode }}>
        {/* ↓このdivはCSSのために入れないといけないか？ */}
        <div css={modeStyle}>
          <Component {...pageProps} />
        </div>
      </modeContext.Provider>
    </>
  );
}
