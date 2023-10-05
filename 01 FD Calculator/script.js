function calculateMaturityAmount() {
    //get input from user
    const principle = parseFloat(document.getElementById('principle').value);
    const tenure = parseFloat(document.getElementById('tenure').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    //perform the calculation

    const maturityAmount = principle + (principle * interestRate * tenure) / 100;

    // display the result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;


}

//attach the listener to the calculate btn
document.getElementById('calculateBtn').addEventListener('click', calculateMaturityAmount);