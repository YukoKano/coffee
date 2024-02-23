import { css } from "@emotion/react";
import {
  useLightMode,
  useSetMode,
} from "../../context/modeProvider/modeProvider";

const input = css`
  display: none;
`;

const label = css`
  position: relative;
  display: block;
  width: 64px;
  height: 32px;
  border-radius: 16px;
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

const labelLightMode = css`
  ${label};
  background-color: #e8b96b;
  &::after {
    right: auto;
    left: 4px;
    background-image: url("sun.png");z
  }
`;

const labelNightMode = css`
  ${label};
  background-color: #9d7755;
  &::after {
    left: auto;
    right: 4px;
    background-image: url("moon.png");
  }
`;

export const ToggleModeButton = () => {
  const mode = useLightMode();
  const setMode = useSetMode();

  const handleClick = () => {
    setMode(!mode);
  };
  return (
    <>
      <input css={input} id="mode" type="checkbox" onChange={handleClick} />
      <label css={mode ? labelLightMode : labelNightMode} htmlFor="mode" />
    </>
  );
};
