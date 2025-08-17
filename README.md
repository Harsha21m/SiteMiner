# SiteMiner

**SiteMiner** is an AI-powered web application that allows users to scrape textual content from any public webpage and interact with an AI assistant to summarize or answer questions about that content.  
Built with **Node.js**, **Express**, and **EJS**, it combines web scraping and AI for quick insights — perfect for researchers, content writers, and learners.

---

## 🚀 Features

- **Web Scraping Tool** – Enter any valid URL and extract meaningful text using Cheerio and Axios.
- **AI Chat Assistant** – Ask questions or request summaries from the scraped data using AI.
- **Responsive UI** – Works on both desktop and mobile with a clean.

---

## 🛠️ Tech Stack

**Frontend:** HTML, CSS, JavaScript, Bootstrap  
**Backend:** Node.js, Express.js  
**Templating Engine:** EJS  
**API Integration:** RapidAPI's
**Version Control:** Git & GitHub  
**Deployment:** Vercel

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/siteminer.git
cd siteminer

# Install dependencies
npm install
```
## 🔐 Environment Setup
Create a .env file in the root directory and add your API key:
```ini
RAPID_API_SCRAPE_KEY=your_rapidapi_scrape_key
RAPID_API_CHAT_KEY=your_rapidapi_chat_key
```
---
## ▶️ Running the App
```bash
node index.js
```
Then visit: <span style="color:blue">http://localhost:3000</span>

---
## 📁 Project Structure
```bash
├── public/             # Static files
├── views/              # EJS templates
├── .env                # Environment variables
├── index.js              # Main server logic
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```
---
Contributions, issues, and feature requests are welcome!<br>
## 🔗 Live Demo
👉 [Try SiteMiner Here](https://site-miner.vercel.app/)<br>
Thanks for checking out **SiteMiner**! 🚀  
Happy coding! ✨
