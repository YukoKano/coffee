import { css } from "@emotion/react";

const primary = css`
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 48px;
  background: #924a18;
  font-size: 18px;
  color: #ffffff;
  border: none;
  border-radius: 8px;
`;

const secondary = css`
  background-color: #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 48px;
  border: 1px solid #924a18;
  font-size: 18px;
  color: #924a18;
  border-radius: 8px;
`;

export const Button = ({ text, type }) => {
  let style = "";
  if (type === "primary") {
    style = primary;
  } else if (type === "secondary") {
    style = secondary;
  }

  return (
    <button css={style} type="button" onClick={() => console.log(text)}>
      {text}
    </button>
  );
};
