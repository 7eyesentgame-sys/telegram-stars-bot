import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/pay", async (req, res) => {
  const TOKEN = "ここにコード入力";
  const chat_id = req.query.id;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendInvoice`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: chat_id,
      title: "Reward Payment",
      description: "100 Stars",
      payload: "reward-100",
      currency: "XTR",
      prices: [{ label: "Reward", amount: 100 }]
    })
  });

  res.send("OK");
});

app.listen(3000);
