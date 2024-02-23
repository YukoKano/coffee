import { css } from "@emotion/react";

const margin = ({ value }) => css`
  margin-top: ${value * 8}px;
`;

export const MarginWrapper = ({ children, value }) => {
  return <div css={margin({ value })}>{children}</div>;
  // valueは{{}}で渡すっぽい
};
