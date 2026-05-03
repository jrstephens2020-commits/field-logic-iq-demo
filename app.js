function askAI() {
  const q = document.getElementById("question").value.toLowerCase();
  const response = document.getElementById("response");

  if (q.includes("valve")) {
    response.innerText =
      "Likely causes: stiction, poor tuning, or low supply pressure. Check actuator response and positioner.";
  } else if (q.includes("loop")) {
    response.innerText =
      "Check loop current, power supply, and total resistance. Verify 4-20mA signal range.";
  } else {
    response.innerText =
      "Check inputs, power, and signal integrity. Narrow down by isolating components.";
  }
}
