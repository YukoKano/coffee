import Image from "next/image";
import { css } from "@emotion/react";

import axios from "axios";

import { useEffect, useState } from "react";

const figure = css`
  margin: 64px auto;
`;

const image = css`
  margin: 0 auto;
  padding: 16px;
  width: auto;
  height: 200px;
  background-color: white;
`;

const fetchData = async () => {
  try {
    const response = await axios.get("/api/getCoffeeImage");
    return response.data.file;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // エラーを明言して表示させるよ
  }
};

export const KeyVisualImage = () => {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const imageData = await fetchData();
        setImagePath(imageData);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    };
    fetchImageData();
  }, []);

  return (
    <figure css={figure}>
      <Image
        css={image}
        src={imagePath}
        width={600}
        height={600}
        alt="coffee"
        priority
      />
    </figure>
  );
};
