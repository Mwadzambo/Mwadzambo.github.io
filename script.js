document.getElementById("analyze-btn").addEventListener("click", () => {
    const urlInput = document.getElementById("game-url").value;
    if (!urlInput) {
    alert("Please enter a game URL.");
    return;
    }
    // Placeholder: Simulating a backend call
    const predictions = {
    nextCrashPoint: "22.74x",
    safeCashOut: "16.50x",
    riskAnalysis: "Low Risk"
    };
    // Display predictions
    const resultsDiv = document.getElementById("predictions");
    resultsDiv.innerHTML = `
    <p><strong>Next Crash Point:</strong> ${predictions.nextCrashPoint}</p>
    <p><strong>Safe Cash Out:</strong> ${predictions.safeCashOut}</p>
    <p><strong>Risk Analysis:</strong> ${predictions.riskAnalysis}</p>
    `;
    });