function calculatePower() {
    let basePower = document.getElementById("basePower").value;
    let finalPower = basePower * 1.5; // Example modifier
    document.getElementById("result").innerText = finalPower;
}
