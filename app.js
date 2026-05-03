function showScreen(type) {
  const screen = document.getElementById("screen");

  if (type === "ai") {
    screen.innerHTML = `
      <h2>AI Assist</h2>
      <p>Ask a question:</p>
      <input id="question" placeholder="Why is my valve hunting?" />
      <button onclick="askAI()">Ask</button>
      <p id="response"></p>
    `;
  }

  if (type === "troubleshoot") {
    screen.innerHTML = `
      <h2>Troubleshooting</h2>
      <p>System:</p>
      <button onclick="showResult('valve')">Valve</button>
      <button onclick="showResult('loop')">4-20mA Loop</button>
      <p id="result"></p>
    `;
  }

  if (type === "calculator") {
    screen.innerHTML = `
      <h2>Calculator</h2>
      <p>Voltage (V):</p>
      <input id="voltage" />
      <p>Resistance (Ω):</p>
      <input id="resistance" />
      <button onclick="calculateCurrent()">Calculate Current</button>
      <p id="calcResult"></p>
    `;
  }
}

function askAI() {
  const response = document.getElementById("response");
  response.innerText = "Check valve positioner and supply pressure.";
}

function showResult(type) {
  const result = document.getElementById("result");

  if (type === "valve") {
    result.innerText = "Possible stiction or tuning issue.";
  }

  if (type === "loop") {
    result.innerText = "Check loop resistance and power supply.";
  }
}

function calculateCurrent() {
  const v = document.getElementById("voltage").value;
  const r = document.getElementById("resistance").value;
  const current = v / r;

  document.getElementById("calcResult").innerText =
    "Current: " + current.toFixed(2) + " A";
}
