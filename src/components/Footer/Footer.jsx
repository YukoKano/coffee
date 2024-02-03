import { css } from "@emotion/react";

import { modeContext } from "../modeProvider";
import { useContext } from "react";

const lightMode = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 64px;
  color: #4b361f;
`;

const darkMode = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 64px;
  color: #ffffff;
`;

export const Footer = () => {
  const { mode } = useContext(modeContext);
  const style = mode ? lightMode : darkMode;
  return (
    <footer css={style}>
      <small>© 2024 Yuko Kano</small>
    </footer>
  );
};
