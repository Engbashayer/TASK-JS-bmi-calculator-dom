function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  let hightpow = height / 100;

  hightpow = Math.pow(hightpow, 2);

  let BMI = weight / hightpow;

  let result = BMI; // Example calculation

  window.alert(`The result is:${result}`);

  // You are going to write the code here before the curly braces 👇🏻

  //challeng 2

  if (result < 18.5) {
    window.alert("you are underweight");
  } else if (result >= 18.5 && result <= 24.9) {
    window.alert("you are  healthy weight");
  } else if (result >= 25 && result <= 29.9) {
    window.alert("you are overweight");
  } else if (result > 30) {
    window.alert("you are  obesity");
  }

  if (age >= 19 && age <= 24) {
    if (result >= 19 && result <= 24) {
      window.alert("healthy");
    } else {
      window.alert("Not healthy");
    }
  } else if (age >= 25 && age <= 34) {
    if (result >= 20 && result <= 25) {
      window.alert("healthy");
    } else {
      window.alert("Not healthy");
    }
  } else if (age >= 35 && age <= 44) {
    if (result >= 21 && result <= 26) {
      window.alert("healthy");
    } else {
      window.alert("Not healthy");
    }
  } else if (age >= 45 && age <= 54) {
    if (result >= 22 && result <= 27) {
      window.alert("healthy");
    } else {
      window.alert("Not healthy");
    }
  } else if (age >= 55 && age <= 64) {
    if (result >= 23 && result <= 28) {
      window.alert("healthy");
    } else {
      window.alert("Not healthy");
    }
  } else if (age > 65) {
    if (result >= 20 && result <= 25) {
      window.alert("healthy");
    } else {
      window.alert("Not healthy");
    }
  }
}
