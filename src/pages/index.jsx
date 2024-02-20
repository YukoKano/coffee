import { css } from "@emotion/react";

import { useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { KeyVisualImage } from "@/components/KeyVisualImage/";

import { modeContext, setModeContext } from "@/context/modeProvider";
import { MarginWrapper } from "@/components/MarginWrapper";
import { StepButtons } from "@/components/StepButtons";

const contents = css`
  max-width: 540px;
  height: 100%;
  margin: 0 auto;
  font-family: "Montserrat", "Zen Kaku Gothic New", sans-serif;
`;

const Mode = css`
  min-height: 100vh;
`;

const nightMode = css`
  ${Mode};
  background-color: #472712;
`;

const lightMode = css`
  ${Mode};
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
              <MarginWrapper value={8}>
                <Title />
              </MarginWrapper>
              <KeyVisualImage />
              <MarginWrapper value={4}>
                <StepButtons />
              </MarginWrapper>
            </main>
            <Footer />
          </div>
        </div>
      </setModeContext.Provider>
    </modeContext.Provider>
  );
}
