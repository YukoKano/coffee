import { css } from "@emotion/react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import { KeyVisualImage } from "@/components/KeyVisualImage/";
import { Button } from "@/components/Button";

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

export default function Home() {
  return (
    <div css={contents}>
      <Header />
      <main>
        <div css={titleWrap}>
          <Title />
        </div>
        <KeyVisualImage />
        <div css={buttonWrap}>
          <Button text="準備から始める" type="primary" />
          <Button text="タイマーから始める" type="secondary" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
