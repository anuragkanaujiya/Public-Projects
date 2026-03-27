<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Projects</title>

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }

    body {
      background: linear-gradient(135deg, #0f172a, #020617);
      color: white;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      background: linear-gradient(90deg, #38bdf8, #6366f1);
      -webkit-background-clip: text;
      color: transparent;
    }

    p {
      color: #94a3b8;
      margin-bottom: 40px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 25px;
      width: 100%;
      max-width: 900px;
    }

    .card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 25px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .card::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(120deg, transparent, rgba(255,255,255,0.1), transparent);
      opacity: 0;
      transition: 0.4s;
    }

    .card:hover::before {
      opacity: 1;
    }

    .card:hover {
      transform: translateY(-8px) scale(1.03);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .desc {
      font-size: 0.9rem;
      color: #cbd5f5;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  </style>
</head>

<body>

  <h1>🚀 My Projects</h1>
  <p>Built during my learning phase — improving every day.</p>

  <div class="grid">

    <a href="BMI-calculator/">
      <div class="card">
        <div class="title">📊 BMI Calculator</div>
        <div class="desc">Calculate body mass index instantly.</div>
      </div>
    </a>

    <a href="Currency-convertor/">
      <div class="card">
        <div class="title">💱 Currency Converter</div>
        <div class="desc">Convert currencies in real-time.</div>
      </div>
    </a>

    <a href="Rock-Paper-Scissor/">
      <div class="card">
        <div class="title">✊ Rock Paper Scissors</div>
        <div class="desc">Classic game with interactive UI.</div>
      </div>
    </a>

    <a href="Tic-Tac-Toe/">
      <div class="card">
        <div class="title">❌ Tic Tac Toe</div>
        <div class="desc">Play against another player.</div>
      </div>
    </a>

    <a href="calculator/">
      <div class="card">
        <div class="title">🧮 Calculator</div>
        <div class="desc">Basic arithmetic calculator.</div>
      </div>
    </a>

  </div>

</body>
</html>
