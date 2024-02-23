import { css } from "@emotion/react";
import { useLightMode } from "../../context/modeProvider/modeProvider";

const lightModeTitle = css`
  text-align: center;
  color: #4b361f;
`;

const darkModeTitle = css`
  text-align: center;
  color: #f3dbb5;
`;

export const Title = () => {
  const mode = useLightMode(); // 1つだけ呼び出す時は{}で括る そうでないとオブジェクトが返る

  const titleStyle = mode ? lightModeTitle : darkModeTitle;
  const subtitleStyle = mode ? lightModeTitle : darkModeTitle;

  return (
    <>
      <h1 css={titleStyle}>Coffee Timer</h1>
      <p css={subtitleStyle}>1 cup of hand drip coffee</p>
    </>
  );
};
