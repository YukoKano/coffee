import Image from "next/image";
import { css } from "@emotion/react";

const image = css`
  margin: 64px auto;
  width: 160px;
  height: auto;
`;

export const KeyVisualImage = () => {
  return (
    <Image
      css={image}
      src="/coffee.png"
      width={500}
      height={500}
      alt="coffee"
      priority
    />
  );
};
