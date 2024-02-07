import { css } from "@emotion/react";

import { useContext, useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { KeyVisualImage } from "@/components/KeyVisualImage/";
import { Button } from "@/components/Button";

import { modeContext, setModeContext } from "@/components/modeProvider";
import { MarginWrapper } from "@/components/MarginWrapper";

const contents = css`
  max-width: 540px;
  height: 100%;
  margin: 0 auto;
  font-family: "Montserrat", "Zen Kaku Gothic New", sans-serif;
`;

const titleWrap = css`
  margin-top: 64px;
`;

const buttonWrap = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const nightMode = css`
  min-height: 100vh;
  background-color: #472712;
`;

const lightMode = css`
  min-height: 100vh;
  background-color: #fff4e5;
`;

export default function Home() {
  const [mode, setMode] = useState(true); // こんなところでuseState使っていいのか？
  const modeStyle = mode ? lightMode : nightMode;

  /* Providerのvalueは{()}ではなく、{{}} */

  return (
    <modeContext.Provider value={mode}>
      <setModeContext.Provider value={setMode}>
        <div css={modeStyle}>
          <div css={contents}>
            <Header />
            <main>
              <MarginWrapper value={64}>
                <Title />
              </MarginWrapper>
              <KeyVisualImage />
              <div css={buttonWrap}>
                <Button text="準備から始める" type="primary" />
                <Button text="タイマーから始める" type="secondary" />
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </setModeContext.Provider>
    </modeContext.Provider>
  );
}
