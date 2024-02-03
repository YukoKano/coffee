import { css } from "@emotion/react";
import { useContext } from "react";
import { modeContext } from "../modeProvider";

const input = css`
  display: none;
`;

const label = css`
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
    left: 4px;
    background-color: white;
    border-radius: 50%;
    background-image: url("sun.png");
    background-position: center;
    background-size: contain;
  }
`;

const labelNightMode = css`
  position: relative;
  display: block;
  width: 64px;
  height: 32px;
  border-radius: 16px;
  background-color: #9d7755;
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
    background-image: url("moon.png");
    background-position: center;
    background-size: contain;
  }
`;

export const ToggleModeButton = () => {
  const { mode, setMode } = useContext(modeContext);
  const handleClick = () => {
    setMode(!mode);
  };
  return (
    <>
      <input css={input} id="mode" type="checkbox" onChange={handleClick} />
      <label css={mode ? label : labelNightMode} htmlFor="mode" />
    </>
  );
};
