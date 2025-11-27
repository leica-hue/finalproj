const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Leica Marie Dacao</title>

      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

      <style>
        body {
          font-family: "Poppins", sans-serif;
          background: linear-gradient(120deg, #ff9ecd, #ffedbc, #c4f0ff);
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
          height: 100vh;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #333;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .card {
          background: rgba(255, 255, 255, 0.9);
          padding: 50px 60px;
          border-radius: 25px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          width: 420px;
          animation: popIn 1s ease forwards;
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Avatar */
        .avatar {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: #ffe1ef;
          border: 5px solid #ff7ebf;
          margin: 0 auto;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 3rem;
          color: #ff4f9a;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(255, 120, 180, 0.4);
        }

        h1 {
          margin: 0;
          font-size: 2rem;
          color: #ff4f9a;
          font-weight: 700;
        }

        h2 {
          margin-top: 5px;
          font-size: 1.2rem;
          color: #666;
          font-weight: 500;
        }

        .bio {
          margin-top: 20px;
          font-size: 1rem;
          color: #444;
          line-height: 1.5;
        }

        /* Quote glow */
        .quote {
          margin-top: 25px;
          font-size: 1.1rem;
          font-style: italic;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { text-shadow: 0 0 6px #ff7bc0; }
          to { text-shadow: 0 0 14px #ffb7de; }
        }

        /* Social Icons */
        .socials {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .socials a {
          font-size: 1.8rem;
          text-decoration: none;
          color: #ff4f9a;
          transition: 0.3s;
        }

        .socials a:hover {
          transform: scale(1.2);
          color: #d63384;
        }
      </style>
    </head>

    <body>
      <div class="card">
        
        <div class="avatar">L</div>

        <h1>Leica Marie Dacao</h1>
        <h2>BSIT-SM-4102</h2>

        <p class="bio">
          Hello! I'm Leica — a tech-savvy student who loves learning, creating,
          and exploring new ideas. Passionate about coding, design, and innovation.
        </p>

        <p class="quote">"Time is Gold."</p>

        <div class="socials">
          <a href="#" title="Facebook">🌸</a>
          <a href="#" title="Instagram">⭐</a>
          <a href="#" title="GitHub">🐱</a>
          <a href="#" title="Email">💌</a>
        </div>

      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`✨ Server running beautifully on port ${PORT} ✨`);
});
