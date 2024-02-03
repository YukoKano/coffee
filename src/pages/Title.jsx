import { css } from "@emotion/react";
import { useContext } from "react";
import { modeContext } from "./modeProvider";

const lightModeTitle = css`
  text-align: center;
  color: #4b361f;
  margin-top: 120px;
`;

const darkModeTitle = css`
  text-align: center;
  color: #f3dbb5;
  margin-top: 120px;
`;

const lightModeSubtitle = css`
  text-align: center;
  color: #4b361f;
`;

const darkModeSubtitle = css`
  text-align: center;
  color: #f3dbb5;
`;

export const Title = () => {
  const { mode } = useContext(modeContext); // 1つだけ呼び出す時は{}で括る そうでないとオブジェクトが返る
  const titleStyle = mode ? lightModeTitle : darkModeTitle;
  const subtitleStyle = mode ? lightModeSubtitle : darkModeSubtitle;

  return (
    <>
      <h1 css={titleStyle}>Coffee Timer</h1>
      <p css={subtitleStyle}>for handdrip</p>
    </>
  );
};
