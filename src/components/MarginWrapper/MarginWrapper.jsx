import { css } from "@emotion/react";

const margin = ({ value = 32 }) => css`
  margin-top: ${value}px;
`;

export const MarginWrapper = ({ children, value }) => {
  console.log(value);
  return <div css={margin(value)}>{children}</div>;
  // value渡せてない……
};
