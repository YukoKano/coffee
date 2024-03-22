import { css } from "@emotion/react";
import { useLightMode } from "@/contexts/ModeProvider";

const modeTitle = (mode) => css`
  text-align: center;
  color: ${mode ? "#4b361fx" : "#f3dbb5"};
`;

export const Title = () => {
  const mode = useLightMode(); // 1つだけ呼び出す時は{}で括る そうでないとオブジェクトが返る
  const style = modeTitle(mode);

  return (
    <>
      <h1 css={style}>Coffee Timer</h1>
      <p css={style}>1 cup of hand drip coffee</p>
    </>
  );
};
