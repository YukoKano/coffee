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
  width: 100%;
  height: auto;
`;

const ToggleModeButton = ({ mode, setMode }) => {
  const handleClick = (e) => {
    // e.preventDefault();
    setMode(!mode);
  };
  return (
    <>
      <input id="mode" type="checkbox" onChange={handleClick} />
      <label htmlFor="mode">toggle mode</label>
    </>
  );
};

export default function Home() {
  const [mode, setMode] = useState(false);
  const modeStyle = mode ? nightMode : lightMode;

  return (
    <main css={modeStyle}>
      <ToggleModeButton mode={mode} setMode={setMode} />
      <h1>Coffee Timer</h1>
      <p>for handdrip</p>
      <Image
        css={image}
        src="/coffee-barista.png"
        width={500}
        height={500}
        alt="hoge"
        priority
      />
      <button type="button">準備から始める</button>
      <button type="button">タイマーから始める</button>
    </main>
  );
}
