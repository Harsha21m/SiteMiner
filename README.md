# 🔍 SiteMiner
SiteMiner is an AI-powered web application that enables users to extract meaningful content from any publicly accessible webpage and leverage the power of artificial intelligence to analyze and understand that content. Whether it's summarizing articles, extracting insights from blogs, or asking questions about complex web data, SiteMiner provides a smooth and interactive experience.

This tool is especially useful for researchers, students, journalists, and content writers who frequently work with online information. It combines real-time web scraping with intelligent AI-based conversation to simplify content analysis and comprehension. The interface is clean, mobile-responsive, and user-friendly, offering a seamless browsing experience across devices.

With built-in support for external AI APIs and proper security using environment variables, SiteMiner ensures both performance and protection in its architecture.

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
```
## 🔐 Environment Setup
Create a .env file in the root directory:
```env
RAPIDAPI_KEY=your_rapidapi_key
OPENAI_API_KEY=your_openai_api_key
```

## ▶️ Running the App
```bash
npm start
```
Visit the app in your browser at:
```bash
http://localhost:3000
```
## 🗂️ Project Structure
```bash
├── public/             # Static files (CSS, JS, images)
├── views/              # EJS templates
├── .env                # Environment variables (not tracked by Git)
├── app.js              # Main server logic
├── package.json        # Project dependencies and scripts
└── README.md           # Documentation
```
## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.
