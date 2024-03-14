import { css } from "@emotion/react";

import { useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { KeyVisualImage } from "@/components/KeyVisualImage";
import { Comment } from "@/components/Comment";

import { ModeProvider } from "@/contexts/ModeProvider";
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
  const [mode, setMode] = useState(true);
  const modeStyle = mode ? lightMode : nightMode;

  return (
    <ModeProvider value={mode} setValue={setMode}>
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
            <MarginWrapper value={6}>
              <Comment />
            </MarginWrapper>
          </main>
          <Footer />
        </div>
      </div>
    </ModeProvider>
  );
}
