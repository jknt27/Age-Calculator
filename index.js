function calculateCutoffAge(date) {
  let bday = new Date(date)
  // Replace date below to update for future.
  const cutoffDate = new Date("2024/08/31");
  const diff = Math.abs(cutoffDate - bday);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  return age
}

function calculateCurrentAge(date) {
  let bday = new Date(date)
  // Replace date below to update for future.
  const cutoffDate = new Date();
  const diff = Math.abs(cutoffDate - bday);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  return age
}

// Updates to accomodate typing instead of clicking.
var date_input = document.getElementById('birth_date');
date_input.valueAsDate = new Date();
// document.getElementById('tooyoung').innerHTML = "";
   
date_input.onchange = function(){
  let age = calculateCutoffAge(this.value);
  let currentAge = calculateCurrentAge(this.value);
  // Replace date below to remove confusion.
  document.getElementById('currentage').innerHTML = "Student is currently: " + currentAge + " yr";
  document.getElementById('age').innerHTML = "Age by August 2024: " + age + " yr";
  
  if (age <= 35 && age > 0) {
    if (age < 6) {
      document.getElementById('tooyoung').innerHTML = "EM UNDERAGE";
    } else {
      document.getElementById('tooyoung').innerHTML = " ";
    }
    // AN
    if (age === 6) {
      document.getElementById('AN').innerHTML = "AU NHI CAP 0";
    } else if (age === 7) {
      document.getElementById('AN').innerHTML = "AU NHI CAP 1";
    } else if (age === 8) {
      document.getElementById('AN').innerHTML = "AU NHI CAP 2";
    } else if (age === 9) {
      document.getElementById('AN').innerHTML = "AU NHI CAP 3";
    } else {
      document.getElementById('AN').innerHTML = " ";
    }

    // TN
    if (age === 10) {
      document.getElementById('TN').innerHTML = "THIEU NHI CAP 1";
    } else if (age === 11) {
      document.getElementById('TN').innerHTML = "THIEU NHI CAP 2";
    } else if (age === 12) {
      document.getElementById('TN').innerHTML = "THIEU NHI CAP 3";
    } else {
      document.getElementById('TN').innerHTML = " ";
    }

    // NS 
    if (age === 13) {
      document.getElementById('NS').innerHTML = "NGHIA SI CAP 1";
    } else if (age === 14) {
      document.getElementById('NS').innerHTML = "NGHIA SI CAP 2";
    } else if (age === 15) {
      document.getElementById('NS').innerHTML = "NGHIA SI CAP 3";
    } else {
      document.getElementById('NS').innerHTML = " ";
    }

    // HS
    if (age === 16) {
      document.getElementById('HS').innerHTML = "HIEP SI CAP 1";
    } else if (age === 17) {
      document.getElementById('HS').innerHTML = "HIEP SI CAP 2";
    } else {
      document.getElementById('HS').innerHTML = " ";
    }

    // HSTT
    if (age > 17) {
      document.getElementById('HSTT').innerHTML = "HSTT";
    } else {
      document.getElementById('HSTT').innerHTML = " ";
    }
  }
}
  


