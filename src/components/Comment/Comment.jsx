import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import { useLightMode } from "@/contexts/ModeProvider";

const fetchData = async () => {
  try {
    const response = await axios.get("/api/getData");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const commentRange = 10;

const getRandomInt = () => {
  return Math.floor(Math.random() * commentRange);
};

const defaultComment = {
  name: "aaa",
  comment: "hoge",
};

const image = css`
  height: auto;
`;

const personComment = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 0 16px;
`;

const profile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const nameStyle = (mode) => css`
  font-size: 10px;
  text-align: center;
  color: ${mode ? "#4b361f" : "#f3dbb5"};
`;

const commentStyle = css`
  padding: 8px;
  background-color: white;
  flex-basis: 75%;
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;
`;

export const Comment = () => {
  const mode = useLightMode();
  const [comment, setComments] = useState(defaultComment);

  useEffect(() => {
    const fetch = async () => {
      try {
        const rawdata = await fetchData();
        setComments({
          name: rawdata[getRandomInt()].name,
          companyCatchPhrase: rawdata[getRandomInt()].company.catchPhrase,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [mode]); // 依存配列指定ないと無限に通信しちゃう、今回はモード切り替えで変わるようにする

  return (
    <div css={personComment}>
      <div css={profile}>
        <Image src="/coffee.png" width="50" height="100" alt="" css={image} />
        <p css={nameStyle(mode)}>{comment.name}</p>
      </div>
      <p css={commentStyle}>{comment.companyCatchPhrase}</p>
    </div>
  );
};
