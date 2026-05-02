const input = document.getElementById("signalInput");
const result = document.getElementById("result");

const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");

const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

// Remove all active lights
function clearLights() {
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.remove("active");
}

// Set signal using buttons
function setSignal(color) {
    input.value = color;
}

// Check logic
checkBtn.addEventListener("click", () => {
    const color = input.value.trim().toLowerCase();
    clearLights();

    if (color === "red") {
        redLight.classList.add("active");
        result.textContent = "🛑 Stop!";
        result.style.color = "red";
    } 
    else if (color === "yellow") {
        yellowLight.classList.add("active");
        result.textContent = "⚠️ Ready!";
        result.style.color = "gold";
    } 
    else if (color === "green") {
        greenLight.classList.add("active");
        result.textContent = "✅ Go!";
        result.style.color = "lightgreen";
    } 
    else {
        result.textContent = "❌ Invalid color!";
        result.style.color = "orange";
    }
});

// Reset
resetBtn.addEventListener("click", () => {
    input.value = "";
    result.textContent = "";
    clearLights();
});