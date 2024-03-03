import axios from "axios";

// async = 非同期しますよ！
async function handler(req, res) {
  // 処理をするよ！エラーがあったら受け取るよ！
  try {
    // await = この処理が返ってくるまで待ってね！
    const response = await axios.get(
      "https://coffee.alexflipnote.dev/random.json"
    );
    // 返ってきた処理をjsonで返すよ！
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Networkできちんと表示するよ！
    res.status(500).json({ error: "Error fetching data" });
  }
}

export default handler;
