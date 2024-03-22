import { css } from "@emotion/react";
import { useLightMode, useSetMode } from "@/contexts/ModeProvider";

const input = css`
  display: none;
`;

const label = (mode) => css`
  position: relative;
  display: block;
  width: 64px;
  height: 32px;
  border-radius: 16px;
  background-color: ${mode ? "#e8b96b" : "#9d7755"};
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    transform: translateY(-50%);
    top: 50%;
    left: ${mode ? "4px" : "auto"};
    right: ${mode ? "auto" : "4px"};
    background-color: white;
    border-radius: 50%;
    background-image: url("${mode ? "sun" : "moon"}.png");
    background-position: center;
    background-size: contain;
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
      <label css={label(mode)} htmlFor="mode" />
    </>
  );
};
