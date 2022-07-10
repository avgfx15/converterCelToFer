const TempCalc = () => {
  const tempInput = document.getElementById("temp").value;
  const tempUnit = document.getElementById("tempUnit");
  const selectedUnit = tempUnit.options[tempUnit.selectedIndex].value;

  const celToFar = (tempInput) => {
    const far = Math.round((tempInput / 5) * 9 + 32);
    return far;
  };
  const farToCel = (tempInput) => {
    const cel = Math.round(((tempInput - 32) * 5) / 9);
    return cel;
  };

  if (selectedUnit == "cel") {
    let result = celToFar(tempInput);
    document.getElementById("resultValue").innerHTML = `${result} Fahrenheat`;
  } else {
    result = farToCel(tempInput);
    document.getElementById("resultValue").innerHTML = `${result} Celsius`;
  }
};
