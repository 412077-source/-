const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const resultDisplay = document.getElementById('result');

let isUpdating = false;

function formatValue(value) {
  return Number.isFinite(value) ? value.toFixed(2) : '';
}

function showResult(celsius, fahrenheit) {
  resultDisplay.textContent = `攝氏：${formatValue(celsius)} °C  ／  華氏：${formatValue(fahrenheit)} °F`;
}

function clearResult() {
  resultDisplay.textContent = '請輸入攝氏或華氏溫度來進行轉換。';
}

function convertFromCelsius(value) {
  const c = parseFloat(value);
  if (Number.isNaN(c)) {
    clearResult();
    return;
  }
  const f = c * 9 / 5 + 32;
  fahrenheitInput.value = formatValue(f);
  showResult(c, f);
}

function convertFromFahrenheit(value) {
  const f = parseFloat(value);
  if (Number.isNaN(f)) {
    clearResult();
    return;
  }
  const c = (f - 32) * 5 / 9;
  celsiusInput.value = formatValue(c);
  showResult(c, f);
}

celsiusInput.addEventListener('input', () => {
  if (isUpdating) return;
  isUpdating = true;
  const value = celsiusInput.value.trim();
  if (value === '') {
    fahrenheitInput.value = '';
    clearResult();
  } else {
    convertFromCelsius(value);
  }
  isUpdating = false;
});

fahrenheitInput.addEventListener('input', () => {
  if (isUpdating) return;
  isUpdating = true;
  const value = fahrenheitInput.value.trim();
  if (value === '') {
    celsiusInput.value = '';
    clearResult();
  } else {
    convertFromFahrenheit(value);
  }
  isUpdating = false;
});

clearResult();
