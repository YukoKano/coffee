import { css } from "@emotion/react";

const ButtonType = {
  primary: "primary",
  secondary: "secondary",
};

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

const defineButtonStyle = (type) => {
  const ButtonStyle = {
    primary: primary, // cssのprimary
    secondary: secondary, // cssのsecondary
  };
  return ButtonStyle[type] || primary; // なければprimaryを返す
};

export const Button = ({ text, type }) => {
  const style = defineButtonStyle(type);
  const message = () => console.log(text); // 関数は事前に定義する

  return (
    <button css={style} type="button" onClick={message}>
      {text}
    </button>
  );
};
