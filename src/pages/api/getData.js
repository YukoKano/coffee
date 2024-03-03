// {}つけない！
import axios from "axios";

// req, resの順番！
const handler = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data" });
  }
};

export default handler;
