const convertTime = () => {
    const input = parseInt(document.getElementById('hoursInput').value);
    if (isNaN(input) || input < 0) {
        document.getElementById('result').innerText = 'Введіть коректне число';
        return;
    }

}