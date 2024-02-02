import { useState } from "react";
import Image from "next/image";
import { css } from "@emotion/react";

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

const toggleButton = css`
  display: flex;
  justify-content: right;
  padding-top: 16px;
  padding-right: 16px;
`;

const input = css`
  display: none;
`;

const label = css`
  position: relative;
  display: block;
  width: 64px;
  height: 32px;
  border-radius: 16px;
  background-color: #bdc1ca;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    top: 50%;
    left: 4px;
    background-color: white;
    border-radius: 50%;
  }
`;

const labelNightMode = css`
  position: relative;
  display: block;
  width: 64px;
  height: 32px;
  border-radius: 16px;
  background-color: #e8b96b;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    top: 50%;
    right: 4px;
    background-color: white;
    border-radius: 50%;
  }
`;

const title = css`
  text-align: center;
  color: #4b361f;
  margin-top: 120px;
`;

const subtitle = css`
  text-align: center;
  color: #4b361f;
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

const ToggleModeButton = ({ mode, setMode }) => {
  const handleClick = (e) => {
    // e.preventDefault();
    setMode(!mode);
  };
  return (
    <>
      <input css={input} id="mode" type="checkbox" onChange={handleClick} />
      <label css={mode ? labelNightMode : label} htmlFor="mode" />
    </>
  );
};

export default function Home() {
  const [mode, setMode] = useState(false);
  const modeStyle = mode ? nightMode : lightMode;

  return (
    <main css={modeStyle}>
      <div css={toggleButton}>
        <ToggleModeButton mode={mode} setMode={setMode} />
      </div>
      <h1 css={title}>Coffee Timer</h1>
      <p css={subtitle}>for handdrip</p>
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
