import { css } from "@emotion/react";

import { ToggleModeButton } from "@/components/ToggleModeButton";

const header = css`
  display: flex;
  justify-content: right;
  padding-top: 16px;
  padding-right: 16px;
`;

export const Header = () => {
  return (
    <header css={header}>
      <ToggleModeButton />
    </header>
  );
};
