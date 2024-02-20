import { css } from "@emotion/react";
import { Button } from "@/components/Button";

const buttonWrap = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const StepButtons = () => {
  return (
    <div css={buttonWrap}>
      <Button text="準備から始める" type="primary" />
      <Button text="タイマーから始める" type="secondary" />
    </div>
  );
};
