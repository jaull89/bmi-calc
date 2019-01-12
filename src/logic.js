export function getBMI(feet, inches, pounds) {
  const m = (feet * 12 + inches) * 0.0254;
  const kg = pounds * 0.453592;
  const bmi = kg / (m*m);
  return bmi;
}

export function getBodyType(bmi) {
  if (bmi > 40){
    return "Obese"
}
  if (40 > bmi && bmi > 30){
    return "Overweight"
}
  if (bmi < 20){
    return "Underweight"
}
  else {
    return "Healthy"
}
}