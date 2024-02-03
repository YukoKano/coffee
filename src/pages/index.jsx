import Image from "next/image";
import { css } from "@emotion/react";
import { useContext } from "react";
import { modeContext } from "./modeProvider";

import { Title } from "./Title";
import { ToggleModeButton } from "./ToggleModeButton";

const nightMode = css`
  background-color: #472712;
`;

const lightMode = css`
  background-color: #fff4e5;
`;

const image = css`
  margin: 0 auto;
  width: 80%;
  height: auto;
`;

const toggleButtonWrap = css`
  display: flex;
  justify-content: right;
  padding-top: 16px;
  padding-right: 16px;
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

export default function Home() {
  const { mode } = useContext(modeContext);
  const modeStyle = mode ? lightMode : nightMode;

  return (
    <main css={modeStyle}>
      <div css={toggleButtonWrap}>
        <ToggleModeButton />
      </div>
      <Title />
      <Image
        css={image}
        src="/coffee-barista.png"
        width={500}
        height={500}
        alt="hoge"
        priority
      />
      <div css={buttonWrap}>
        <button type="button">準備から始める</button>
        <button type="button">タイマーから始める</button>
      </div>
    </main>
  );
}
