import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/pay", async (req, res) => {
  const TOKEN = "8612014614:AAELQBe7_WY2g2-7-n3BMo1YSsp-4pykXx4";
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
