# 🔍 SiteMiner

SiteMiner is an AI-powered web application that allows users to scrape text content from any public webpage and interact with an AI assistant to summarize or ask questions based on that content.

## 🚀 Features

- **Web Scraping**: Extracts clean, readable text from a given URL using Cheerio.
- **AI Assistant**: Chat interface that answers queries or summarizes scraped content.
- **Responsive UI**: Mobile-friendly, clean layout using HTML, CSS, Bootstrap, and EJS.


## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Scraping**: Axios
- **API's**: OpenAI API and RapidAPI AI
- **Version Control**: Git & GitHub

## 📦 Installation

```bash
git clone https://github.com/yourusername/siteminer.git
cd siteminer
npm install

1. Set up Environment Variables
Inside your project folder (siteminer), create a .env file in the root directory (same place as app.js and package.json):

env
Copy
Edit
RAPIDAPI_KEY=your_rapidapi_key
OPENAI_API_KEY=your_openai_key

2. Start the Server
In the terminal, from the root folder:

bash
Copy
Edit
npm start
Now, visit your app at:

arduino
Copy
Edit
http://localhost:3000
