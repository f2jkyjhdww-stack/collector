export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("collector running");
  }

  const { token } = req.body;

  // 这里先简单打印（你可以在Vercel日志看到）
  console.log("收到token:", token);

  return res.json({
    code: 0,
    msg: "success",
    data: token
  });
}
