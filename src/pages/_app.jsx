import Head from "next/head";
import "@/styles/reset.css";
import "@/styles/global.css";

import { useState } from "react";
import { ModeContext } from "./modeProvider";

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState(true);
  return (
    <>
      <Head>
        <title>Coffee Timer App</title>
        <meta name="description" content="Coffee Timer App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Providerのvalueは{()}ではなく、{{}} */}
      <ModeContext.Provider value={{ mode, setMode }}>
        <Component {...pageProps} />
      </ModeContext.Provider>
    </>
  );
}
