const height = document.getElementById("height");
const weight = document.getElementById("weight");
const form = document.getElementById("form");
const bmiValue = document.getElementById("bmi-value");
const bmiCategory = document.getElementById("bmi-category");
const resultContainer = document.getElementById("result");
const changeMetricButton = document.getElementById("change-metric-button");
const labelWeight = document.getElementById("label-weight");
const labelHeight = document.getElementById("label-height");
const resetButton = document.getElementById("reset-button");

let isMetric = true;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const w = parseFloat(weight.value);
	const h = parseFloat(height.value);
	if (w <= 0 || h <= 0) {
		alert("Please enter positive numbers for weight and height.");
		return;
	}

	let BMI;
	if (isMetric) {
		BMI = w / ((h / 100) * (h / 100));
	} else {
		BMI = (w * 703) / (h * h);
	}

	resultContainer.classList.remove("hidden");
	bmiValue.textContent = BMI.toFixed(2);

	if (BMI < 18.5) {
		bmiCategory.textContent = "Underweight";
		bmiValue.style.color = "#eab308";
	} else if (BMI < 25) {
		bmiCategory.textContent = "Normal";
		bmiValue.style.color = "#22c55e";
	} else if (BMI < 30) {
		bmiCategory.textContent = "Overweight";
		bmiValue.style.color = "#f87171";
	} else {
		bmiCategory.textContent = "Obese";
		bmiValue.style.color = "#ef4444";
	}
});

changeMetricButton.addEventListener("click", () => {
	isMetric = !isMetric;

	if (isMetric) {
		labelWeight.innerText = "Weight (kg)";
		labelHeight.innerText = "Height (cm)";
		changeMetricButton.innerText = "LB";
	} else {
		labelWeight.innerText = "Weight (lb)";
		labelHeight.innerText = "Height (in)";
		changeMetricButton.innerText = "KG";
	}
});
resetButton.addEventListener("click", () => {
	resultContainer.classList.add("hidden");
	bmiValue.style.color = "";
});
