import Image from "next/image";
import { css } from "@emotion/react";

const image = css`
  margin: 120px auto;
  width: 50%;
  height: auto;
`;

export const TopImage = () => {
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
