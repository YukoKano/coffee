import Image from "next/image";
import { css } from "@emotion/react";

import axios from "axios";

import { useEffect, useState } from "react";

const image = css`
  margin: 64px auto;
  width: 160px;
  height: auto;
`;

// ↓わかんない！！
const fetchData = async () => {
  try {
    const response = await axios.get("/api/proxy");
    console.log(response.data.file);
    return response.data.file;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const KeyVisualImage = () => {
  const [imagePath, setImagePath] = useState("");

  useEffect(() => {
    // ↓わかんない！！
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
    <Image
      css={image}
      src={imagePath}
      width={500}
      height={500}
      alt="coffee"
      priority
    />
  );
};
