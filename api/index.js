export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    console.log("收到数据：", data);

    return res.status(200).json({
      code: 0,
      msg: "success"
    });
  }

  return res.status(200).send("collector running");
}
