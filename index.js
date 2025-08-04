
import express from "express";
import axios from "axios";
import path from 'path';
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// ++++++++++++++++++++++++++++++++

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/scrape", (req, res) => {
  res.render("scrape", { result: null });
});

app.get("/result", (req, res) => {
  res.render("result", { result: null });
});

app.post("/scrape",async (req,res)=>{
  const {url, prompt} = req.body;

  try {
    const response = await axios.post(
      "https://llm-scraper.p.rapidapi.com/smartscraper",
      {
        source: url,
        prompt: prompt
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "llm-scraper.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.RAPID_API_SCRAPE_KEY
        }
      }
    );
  
   const scrapedData = response.data;
   res.render('result',{data:scrapedData});

}catch(error){
  console.error(error.message);
  res.status(500).send('something went wrong while scrapping.');
}
});


app.get("/chat", (req, res) => {
  res.render("chat", { result: null });
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.userQuery; 

  try {
    const response = await axios.post(
      "https://chat-gpt26.p.rapidapi.com/",
      {
        model: "GPT-4.1-Mini",
        messages: [
          { role: "user", content: userMessage }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "chat-gpt26.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.RAPID_API_CHAT_KEY
        }
      }
    );
   console.log(response.data);
    const reply = response.data.choices[0].message.content;

  res.render("chat", {
    userInput: userMessage,
    botResponse: reply,
  });
  
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    res.status(500).send("Something went wrong.");
  }
});





app.listen(3000,()=>{
    console.log("Server is running on port no 3000");
});