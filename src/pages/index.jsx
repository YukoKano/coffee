import { useState } from "react";
import Image from "next/image";
import { css } from "@emotion/react";

const nightMode = css`
  background-color: #638889;
`;

const lightMode = css`
  background-color: #f9efdb;
`;

const image = css`
  width: 100%;
  height: auto;
`;

const ToggleModeButton = ({ mode, setMode }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setMode(!mode);
  };
  return <button onClick={handleClick}>toggle mode</button>;
};

export default function Home() {
  const [mode, setMode] = useState(false);
  const modeStyle = mode ? nightMode : lightMode;

  return (
    <main css={modeStyle}>
      <Image
        css={image}
        src="/coffee-barista.png"
        width={500}
        height={500}
        alt="hoge"
        priority
      />
      <ToggleModeButton mode={mode} setMode={setMode} />
    </main>
  );
}
