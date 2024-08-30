const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give me a Valid Height ${height}`;
  } else if (weight === '' || height < 0 || isNaN(weight)) {
    results.innerHTML = `please give me a Valid weight ${weight}`;
  } else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    //Show the results
    if (bmi < 18.6) {
        results.innerHTML= `Your BMI is ${bmi} ,  You are in UnderWeight`;
    }else if( bmi >= 18.6 && bmi < 24.9){
        results.innerHTML= `Your BMI is ${bmi} , You are in NormalWeight`
    }else{
        results.innerHTML = `Your BMI is ${bmi} , You are OverWeight`;
    }
  }
});
