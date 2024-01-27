import { css } from "@emotion/react";

const style = css`
  color: red;
  margin: 8px;
`;

export default function Home() {
  return <p css={style}>hoge</p>;
}
