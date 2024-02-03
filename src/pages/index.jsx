import { css } from "@emotion/react";

import { Title } from "./Title";
import { ToggleModeButton } from "./ToggleModeButton";
import { TopImage } from "./TopImage";

const contents = css`
  max-width: 540px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  font-family: "Montserrat", "Zen Kaku Gothic New", sans-serif;
`;

const header = css`
  display: flex;
  justify-content: right;
  padding-top: 16px;
  padding-right: 16px;
`;

const titleWrap = css`
  margin-top: 120px;
`;

const buttonWrap = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  & button {
    width: 200px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #4b361f;
    background-color: white;
  }
`;

const footer = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 64px;
  color: #4b361f;
`;

export default function Home() {
  return (
    <div css={contents}>
      <header css={header}>
        <ToggleModeButton />
      </header>
      <main>
        <div css={titleWrap}>
          <Title />
        </div>
        <TopImage />
        <div css={buttonWrap}>
          <button type="button" onClick={() => console.log("準備から始める")}>
            準備から始める
          </button>
          <button
            type="button"
            onClick={() => console.log("タイマーから始める")}
          >
            タイマーから始める
          </button>
        </div>
      </main>
      <footer css={footer}>
        <small>© 2024 Yuko Kano</small>
      </footer>
    </div>
  );
}
