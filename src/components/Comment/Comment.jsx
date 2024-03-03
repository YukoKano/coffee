import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/react";

const fetchData = async () => {
  try {
    const response = await axios.get("/api/getData");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const defaultComment = {
  name: "aaa",
  comment: "hoge",
};

const image = css`
  height: auto;
`;

const profile = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const personComment = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const nameStyle = css`
  font-size: 10px;
`;

const commentStyle = css`
  padding: 8px;
  background-color: white;
`;

export const Comment = () => {
  const [comment, setComments] = useState(defaultComment);

  useEffect(() => {
    const fetch = async () => {
      try {
        const rawdata = await fetchData();
        setComments({ name: rawdata[0].name, comment: "hogehoge" });
        console.log(comment);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, []); // 依存配列ないと無限に通信しちゃう

  return (
    <div css={personComment}>
      <div css={profile}>
        <Image src="/coffee.png" width="50" height="100" alt="" css={image} />
        <p css={nameStyle}>{comment.name}</p>
      </div>
      <p css={commentStyle}>{comment.comment}</p>
    </div>
  );
};
