import axios from "axios";

// ↓わかんない！！
export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://coffee.alexflipnote.dev/random.json"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
